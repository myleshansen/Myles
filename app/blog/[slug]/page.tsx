import type { Metadata } from "next"
import BlogPostPageClient from "./BlogPostPageClient"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  // In a real app, you would fetch the post data based on the slug
  return {
    title: `Blog Post | Myles Hansen`,
    description: "Blog post description would go here.",
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostPageClient params={params} />
}
