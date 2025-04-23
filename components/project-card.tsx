import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Link href={link} className="group h-full">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full">
        <div className="overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground mt-2 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
