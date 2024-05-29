import type { APIContext } from "astro";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function POST({ request }: APIContext) {
  if (request.method !== "POST") {
    return new Response("Use POST", { status: 405 });
  }

  const contentType = request.headers.get("Content-Type") || "";
  if (contentType !== "application/json") {
    return new Response("Must be JSON", { status: 400 });
  }

  const body = await request.json();
  const slug: string | undefined = body.slug;

  if (!slug) {
    return new Response("Slug not found", { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("fastly-client-ip") ||
    request.headers.get("true-client-ip") ||
    request.headers.get("x-client-ip") ||
    request.headers.get("x-cluster-client-ip") ||
    request.headers.get("x-forwarded") ||
    request.headers.get("forwarded-for") ||
    request.headers.get("forwarded") ||
    request.headers.get("via") ||
    request.headers.get("remote_addr") ||
    request.headers.get("remote-addr");

  if (ip) {
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(ip)
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });
    if (!isNew) {
      return new Response(null, { status: 202 });
    }
  }

  await redis.incr(["pageviews", "projects", slug].join(":"));
  return new Response(null, { status: 202 });
}
