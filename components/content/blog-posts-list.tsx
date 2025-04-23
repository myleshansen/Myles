import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BlogPostsList() {
  const posts = [
    {
      title: "Optimizing React Performance",
      description: "Learn how to identify and fix performance bottlenecks in your React applications.",
      date: "May 15, 2023",
      category: "React",
      slug: "optimizing-react-performance",
    },
    {
      title: "Getting Started with Unity",
      description: "A beginner's guide to creating your first game with Unity.",
      date: "April 3, 2023",
      category: "Game Dev",
      slug: "getting-started-with-unity",
    },
    {
      title: "The Future of Web Development",
      description: "Exploring emerging technologies and trends that will shape the future of web development.",
      date: "March 12, 2023",
      category: "Web Dev",
      slug: "future-of-web-development",
    },
    {
      title: "Building a RESTful API with Node.js",
      description: "A comprehensive guide to building a RESTful API with Node.js and Express.",
      date: "February 28, 2023",
      category: "Backend",
      slug: "building-restful-api-nodejs",
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
