type MarkdownModule = {
  frontmatter?: Record<string, unknown>;
  default?: unknown;
  rawContent?: () => string;
};

export type PostItem = {
  slug: string;
  title: string;
  date: unknown;
  tags: string[];
  categories: string[];
  top: boolean;
  Content: unknown;
  body: string;
};

function toList(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((v) => String(v)).filter(Boolean);
  if (typeof value === "object") return Object.values(value as Record<string, unknown>).map((v) => String(v));
  return [String(value)];
}

function fileBase(path: string): string {
  return path.split("/").pop()?.replace(/\.md$/i, "") || path;
}

const postModules = import.meta.glob("../content/posts/*.md", { eager: true }) as Record<string, MarkdownModule>;
const pageModules = import.meta.glob("../content/pages/*.md", { eager: true }) as Record<string, MarkdownModule>;

export function getAllPosts(): PostItem[] {
  return Object.entries(postModules).map(([file, mod]) => {
    const fm = mod.frontmatter || {};
    const abbr = fm.abbrlink ? String(fm.abbrlink) : undefined;
    return {
      slug: abbr || fileBase(file),
      title: String(fm.title || fileBase(file)),
      date: fm.date,
      tags: toList(fm.tags),
      categories: toList(fm.categories),
      top: Boolean(fm.top),
      Content: mod.default,
      body: typeof mod.rawContent === "function" ? mod.rawContent() : ""
    };
  });
}

export function getAboutPage(): { title: string; date: unknown; Content: unknown } | null {
  const entry =
    Object.entries(pageModules).find(([file]) => file.endsWith("/about.md")) || Object.entries(pageModules)[0];
  if (!entry) return null;
  const [, mod] = entry;
  const fm = mod.frontmatter || {};
  return {
    title: String(fm.title || "About"),
    date: fm.date,
    Content: mod.default
  };
}
