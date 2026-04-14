export function toList(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((v) => String(v)).filter(Boolean);
  return [String(value)];
}

export function parseDate(value: unknown): Date {
  if (value instanceof Date) return value;
  if (typeof value === "string" || typeof value === "number") {
    const dt = new Date(value);
    if (!Number.isNaN(dt.getTime())) return dt;
  }
  return new Date(0);
}

export function excerptFromBody(body: string, max = 180): string {
  const clean = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[#>*_~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return clean.length > max ? `${clean.slice(0, max).trim()}...` : clean;
}

export function formatDate(value: unknown): string {
  return parseDate(value).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

export function sortPosts<T extends { date: unknown }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
}
