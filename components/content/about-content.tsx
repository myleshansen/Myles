export default function AboutContent() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="space-y-6 text-muted-foreground">
        <p>
          Hi, I'm Myles Hansen, a software engineer and game developer with over 5 years of experience building web
          applications and interactive experiences.
        </p>

        <p>
          I specialize in creating responsive, user-friendly interfaces and robust backend systems. My passion lies at
          the intersection of technology and creativity, where I can leverage both technical expertise and design
          sensibilities to craft exceptional digital experiences.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Skills</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-foreground mb-2">Frontend</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>CSS / Tailwind</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Backend</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB / PostgreSQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Game Development</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Unity</li>
              <li>C#</li>
              <li>Game Design</li>
              <li>3D Modeling (Basic)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">Other</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Git / GitHub</li>
              <li>CI/CD</li>
              <li>Agile Methodologies</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Education</h2>

        <div className="border rounded-lg p-4">
          <h3 className="font-bold text-foreground">Bachelor of Science in Computer Science</h3>
          <p>University of California, Berkeley</p>
          <p className="text-sm">2012 - 2016</p>
        </div>
      </div>
    </div>
  )
}
