import Breadcrumb from "@/components/breadcrumb"

export default function WorkPage() {
  const workExperience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description:
        "Led development of multiple web applications using React, Next.js, and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
    },
    {
      title: "Game Developer",
      company: "Interactive Studios",
      period: "2018 - 2020",
      description:
        "Developed game mechanics and UI systems using Unity and C#. Collaborated with artists and designers to create engaging user experiences.",
    },
    {
      title: "Frontend Developer",
      company: "Web Solutions Co.",
      period: "2016 - 2018",
      description:
        "Built responsive websites and web applications using modern JavaScript frameworks. Worked closely with UX designers to implement pixel-perfect designs.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b p-4 bg-background z-10">
        <Breadcrumb />
      </div>
      <div className="flex-1 p-8 max-w-4xl mx-auto w-full z-10">
        <div className="bg-background p-8 rounded-lg border">
          <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold">{job.title}</h2>
                <div className="flex justify-between items-center mt-1 mb-4">
                  <span className="text-primary">{job.company}</span>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
