import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Breadcrumb from "@/components/breadcrumb"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b p-4 bg-background z-10">
        <Breadcrumb />
      </div>
      <div className="flex-1 p-8 max-w-4xl mx-auto w-full z-10">
        <div className="bg-background p-8 rounded-lg border">
          <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Connect</h2>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                    <span>github.com/myleshansen</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/myleshansen</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
