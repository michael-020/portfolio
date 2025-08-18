"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Code, Award } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const projects = [
  {
    title: "Collabodraw",
    description:
      "Built a real-time collaborative drawing app from scratch with custom canvas logic, 20% faster load/render times, and integrated AI-powered drawing generation for creative assistance.",
    tech: ["TypeScript", "Next.js", "Express", "WebSockets", "Zustand", "Tailwind CSS", "Prisma", "PostgreSQL"],
    link: "collabodraw.mikexdev.in",
    github: "https://github.com/michael-020",
  },
  {
    title: "CacheUpp",
    description:
      "Developed feature-rich social platform with posts, likes, comments, real-time chat, friend system, and forums, implementing Google OAuth 2.0 from scratch.",
    tech: ["TypeScript", "MERN", "Pgvector", "WebSockets", "Zustand", "MongoDB"],
    link: "cacheupp.com",
    github: "https://github.com/michael-020",
  },
  {
    title: "DevTalk",
    description:
      "Created real-time chat application with WebSockets, TypeScript, and Framer Motion, implementing robust authentication from scratch using cookies and bcrypt.",
    tech: ["TypeScript", "MERN Stack", "WebSockets", "Zustand", "MongoDB"],
    link: "devtalk.mikexdev.in",
    github: "https://github.com/michael-020",
  },
  {
    title: "ReadmeX",
    description:
      "Designed and developed an AI-powered tool to generate professional, customizable README files with live Markdown preview and formatting support.",
    tech: ["TypeScript", "Next.js", "Framer Motion", "Zustand", "Prisma", "PostgreSQL"],
    link: "readmex.mikexdev.in",
    github: "https://github.com/michael-020",
  },
  {
    title: "coders-cafe",
    description: "Responsive landing page built with Next.js, Tailwind, and Framer Motion for clean UI and smooth animations.",
    tech: ["TypeScript", "Next.js", "Framer-motion"],
    link: "coders-cafe.mikexdev.in",
    github: "https://github.com/michael-020/coders-cafe"
  }
]

const skills = {
  Languages: ["JavaScript", "TypeScript", "C/C++"],
  "Frameworks & Libraries": [
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "Framer Motion",
    "Zustand",
    "Tailwind CSS",
  ],
  "Databases & Tools": ["PostgreSQL", "Prisma", "MongoDB", "Docker"],
  "Concepts & Development Skills": [
    "WebSockets",
    "Data Structures & Algorithms",
    "API Development",
    "RESTful Services",
  ],
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl pt-32">
        {/* Hero Section */}
        <motion.section
          id="home"
          className="text-center mb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Michael Hosamani
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-muted-foreground mb-8" variants={fadeInUp}>
              Full Stack Developer & Open Source Contributor
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-4 mb-8" variants={fadeInUp}>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:michaelhosamani26@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/michael-020"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://linkedin.com/in/michael-hosamani0206/"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://x.com/MichaelHosamani"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X
              </a>
            </Button>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-8 flex items-center gap-3" variants={fadeInUp}>
            <Briefcase className="w-8 h-8 text-primary" />
            Experience
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Keploy Open Source Contributor</h3>
                    <Badge variant="secondary" className="mt-2">
                      <Award className="w-3 h-3 mr-1" />
                      Top 3 Contributor - March 2025
                    </Badge>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Contributed merged PR implementing paginated blog listings for Community and Technology sections
                    using Next.js, GraphQL, and TailwindCSS.
                  </li>
                  <li>• Enhanced blog website performance and user experience through efficient pagination system.</li>
                  <li>
                    • Highlighted as one of Keploy's Top 3 contributors in March 2025 for active involvement in
                    community-driven open-source development.
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
                  <a
                    href="https://github.com/keploy/blog-website/pull/98"
                    target="_blank"
                    className="flex items-center gap-2"
                    rel="noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View PR
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-8 flex items-center gap-3" variants={fadeInUp}>
            <Code className="w-8 h-8 text-primary" />
            Projects
          </motion.h2>

          <motion.div className="grid gap-6" variants={staggerContainer}>
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={`https://${project.link}`}
                            target="_blank"
                            className="flex items-center gap-1"
                            rel="noreferrer"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Live
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" className="flex items-center gap-1" rel="noreferrer">
                            <Github className="w-3 h-3" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-8 flex items-center gap-3" variants={fadeInUp}>
            <Code className="w-8 h-8 text-primary" />
            Skills
          </motion.h2>

          <motion.div className="grid gap-6" variants={staggerContainer}>
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="outline">{skill}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Me Section */}
        <motion.section
          id="contact"
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-8 flex items-center gap-3" variants={fadeInUp}>
            <Mail className="w-8 h-8 text-primary" />
            Contact Me
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Let's Connect!</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <a href="mailto:michaelhosamani26@gmail.com" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://linkedin.com/in/michael-hosamani0206/"
                      target="_blank"
                      className="flex items-center gap-2"
                      rel="noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="text-center py-8 border-t"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground">Built with Next.js, Framer Motion, and Tailwind CSS</p>
        </motion.footer>
      </div>
    </div>
  )
}
