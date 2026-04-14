import type { APIRoute } from "astro";
import { excerptFromBody, formatDate, sortPosts } from "../lib/content";
import { getAllPosts } from "../lib/data";

export const GET: APIRoute = async () => {
  const posts = sortPosts(getAllPosts());
  const data = posts.map((post) => ({
    title: post.title,
    date: formatDate(post.date),
    excerpt: excerptFromBody(post.body, 220),
    tags: post.tags,
    url: `/posts/${post.slug}/`
  }));
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300"
    }
  });
};
