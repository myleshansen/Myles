"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPageClient({ params }: BlogPostPageProps) {
  // In a real app, you would fetch the post data based on the slug
  const post = {
    title: "Optimizing React Performance",
    description: "Learn how to identify and fix performance bottlenecks in your React applications.",
    content: `
      <p>React is a popular JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM. While React is generally fast out of the box, as applications grow in complexity, performance issues can arise.</p>
      
      <h2>Common Performance Issues</h2>
      
      <p>Before diving into optimization techniques, it's important to understand common performance issues in React applications:</p>
      
      <ul>
        <li>Unnecessary re-renders</li>
        <li>Large component trees</li>
        <li>Expensive calculations</li>
        <li>Inefficient state management</li>
      </ul>
      
      <h2>Identifying Performance Bottlenecks</h2>
      
      <p>The first step in optimizing your React application is identifying where performance bottlenecks exist. React DevTools provides a Profiler that allows you to record and analyze component render times.</p>
      
      <h2>Optimization Techniques</h2>
      
      <h3>1. Memoization</h3>
      
      <p>React provides several APIs for memoization:</p>
      
      <ul>
        <li><code>React.memo</code>: Prevents unnecessary re-renders of functional components</li>
        <li><code>useMemo</code>: Memoizes expensive calculations</li>
        <li><code>useCallback</code>: Memoizes callback functions</li>
      </ul>
      
      <h3>2. Code Splitting</h3>
      
      <p>Code splitting allows you to split your code into smaller chunks that can be loaded on demand, reducing the initial load time of your application.</p>
      
      <h3>3. Virtualization</h3>
      
      <p>When rendering large lists, virtualization techniques can significantly improve performance by only rendering items that are currently visible to the user.</p>
      
      <h2>Conclusion</h2>
      
      <p>Optimizing React performance is an ongoing process that requires careful consideration of your application's specific needs. By understanding common performance issues and applying appropriate optimization techniques, you can create React applications that are both feature-rich and performant.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "React",
    date: "May 15, 2023",
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-8">{post.date}</p>
          <div className="mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto rounded-lg" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  )
}
