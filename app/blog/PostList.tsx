import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Author {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogCategory {
  id: number;
  name: string;
}
interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  slug: string;
  image: string;
  keywords: string | null;
  createdAt: string;
  updatedAt: string;
  Author: Author;
  BlogCategory: BlogCategory;
}

interface PostListProps {
  post: Post;
  aspect?: "landscape" | "custom" | "square";
  minimal?: boolean;
  pathPrefix?: string;
  preloadImage?: boolean;
  fontSize?: "large" | "normal";
  fontWeight?: "normal" | "bold";
}

export default function PostList({
  post,
  aspect = "square",
  minimal = false,
  preloadImage = false,
  fontSize = "normal",
  fontWeight = "bold",
}: PostListProps) {
  return (
    <div className={cn("group cursor-pointer", minimal && "grid gap-10 md:grid-cols-2")}>
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">

        <Link
          className={cn(
            "relative block",
            aspect === "landscape" ? "aspect-video" : aspect === "custom" ? "aspect-[5/4]" : "aspect-square"
          )}
          href={`/blog/${post.slug}`}
        >
          <Image
            src={post.image}
            alt={post.title || "Thumbnail"}
            priority={preloadImage}
            className="object-cover transition-all"
            fill
            sizes="(max-width: 768px) 30vw, 33vw"
          />
        </Link>
      </div>
      <div className={cn(minimal && "flex items-center")}>
        <div>
          <h2
            className={cn(
              fontSize === "large" ? "text-2xl" : minimal ? "text-3xl" : "text-lg",
              fontWeight === "normal"
                ? "line-clamp-2 font-medium tracking-normal text-black"
                : "font-semibold leading-snug tracking-tight",
              "mt-2 dark:text-white"
            )}
          >
            <Link href={`/blog/${post.slug}`}>
              <h1 className="text-base uppercase font-semibold">{post.BlogCategory.name}</h1>
              <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                {post.title}
              </span>
            </Link>
          </h2>

          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <Link href={`/author/${post.Author.id}`}>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-sm font-medium text-white dark:bg-gray-700">
                  {post.Author.name.charAt(0).toUpperCase()}
                </div>
                <span className="truncate text-sm">{post.Author.name}</span>
              </div>
            </Link>
            <span className="text-xs text-gray-300 dark:text-gray-600">&bull;</span>
            <time className="truncate text-sm" dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
