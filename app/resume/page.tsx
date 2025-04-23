import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b p-4 bg-background z-10">
        <Breadcrumb />
      </div>
      <div className="flex-1 p-8 max-w-4xl mx-auto w-full z-10">
        <div className="bg-background p-8 rounded-lg border">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Resume</h1>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <div className="border rounded-lg p-8 space-y-8">
            {/* Header */}
            <div className="text-center pb-6 border-b">
              <h2 className="text-2xl font-bold">Myles Hansen</h2>
              <p className="text-muted-foreground">Software Engineer & Game Developer</p>
              <div className="flex justify-center gap-4 mt-2 text-sm">
                <span>contact@example.com</span>
                <span>(123) 456-7890</span>
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-lg font-bold mb-2">Professional Summary</h3>
              <p className="text-muted-foreground">
                Experienced software engineer and game developer with a passion for creating exceptional digital
                experiences. Skilled in frontend and backend development, with a focus on responsive design and user
                experience.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-bold mb-4">Work Experience</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-bold">Senior Software Engineer</h4>
                    <span className="text-muted-foreground">2020 - Present</span>
                  </div>
                  <p className="text-primary">Tech Innovations Inc.</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    <li>Led development of multiple web applications using React, Next.js, and Node.js</li>
                    <li>Implemented CI/CD pipelines and improved deployment processes</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                    <li>Optimized application performance, reducing load times by 40%</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between">
                    <h4 className="font-bold">Game Developer</h4>
                    <span className="text-muted-foreground">2018 - 2020</span>
                  </div>
                  <p className="text-primary">Interactive Studios</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    <li>Developed game mechanics and UI systems using Unity and C#</li>
                    <li>Collaborated with artists and designers to create engaging user experiences</li>
                    <li>Implemented performance optimizations for mobile platforms</li>
                    <li>Contributed to two successful game launches with over 100,000 downloads</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between">
                    <h4 className="font-bold">Frontend Developer</h4>
                    <span className="text-muted-foreground">2016 - 2018</span>
                  </div>
                  <p className="text-primary">Web Solutions Co.</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    <li>Built responsive websites and web applications using modern JavaScript frameworks</li>
                    <li>Worked closely with UX designers to implement pixel-perfect designs</li>
                    <li>Developed and maintained company component library</li>
                    <li>Improved site accessibility to meet WCAG 2.1 AA standards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-bold mb-4">Education</h3>
              <div>
                <div className="flex justify-between">
                  <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
                  <span className="text-muted-foreground">2012 - 2016</span>
                </div>
                <p className="text-primary">University of California, Berkeley</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Technical Skills</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>JavaScript, TypeScript, HTML, CSS</li>
                    <li>React, Next.js, Node.js, Express</li>
                    <li>Unity, C#</li>
                    <li>MongoDB, PostgreSQL</li>
                    <li>Git, GitHub, CI/CD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Soft Skills</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>Project Management</li>
                    <li>Communication</li>
                    <li>Mentoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
