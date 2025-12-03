"use client"

import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Award, Code2, FolderGit2, File, FileText } from "lucide-react"
import { projects } from "@/lib/projects"
import { skills } from "@/lib/skills"
import Image from "next/image"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const expandedTextVariants = {
  initial: { 
    opacity: 0, 
    height: 0,
    marginTop: 0
  },
  animate: { 
    opacity: 1, 
    height: "auto",
    marginTop: "1rem",
    transition: { 
      duration: 0.5, 
      ease: easeInOut, 
      opacity: { delay: 0.1, duration: 0.3 }
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    marginTop: 0,
    transition: { 
      duration: 0.4, 
      ease: easeInOut, 
      height: { delay: 0.1 }
    }
  }
}

const buttonVariants = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: easeInOut }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1, ease: easeInOut }
  }
}

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 max-w-4xl pt-6 sm:pt-32">
        <div id="about" className="absolute top-0"></div>
        <motion.section
          className="text-center mb-16 sm:mb-20"
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 0.5 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Michael Hosamani
            </motion.h1>
            <motion.p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-2" variants={fadeInUp}>
              Full Stack Developer & Open Source Contributor
            </motion.p>
            <motion.div 
              className="text-base sm:text-lg md:text-xl text-muted-foreground text-justify max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
              variants={fadeInUp}
            >
              <p>
                I'm a Full Stack Developer with a passion for crafting accessible, pixel-perfect user interfaces that seamlessly blend thoughtful design 
                with robust engineering. I specialize in building modern, scalable web applications using Next.js, MERN Stack, TypeScript, and Tailwind CSS.
              </p>
              
              <AnimatePresence mode="wait">
                {showMore && (
                  <motion.div
                    variants={expandedTextVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <p>
                      My expertise spans from building intuitive frontends to architecting performant backends with REST APIs and WebSockets. 
                      I'm especially drawn to projects at the intersection of design, development, and AI, where user experience meets technical excellence.
                    </p>
                    <p className="mt-4">
                      I thrive in environments that challenge me to learn, push boundaries, and build meaningful digital products that make an impact.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => setShowMore(!showMore)}
                className="text-sm sm:text-md lg:text-md opacity-60 cursor-pointer underline underline-offset-4 font-medium mt-4 block transition-all duration-300 hover:opacity-80"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                {showMore ? "See less" : "See more"}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2" variants={fadeInUp}>
            <Button variant="outline" size="sm" asChild title="Email">
              <a href="mailto:michaelhosamani26@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="hidden xs:inline">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild title="GitHub">
              <a
                href="https://github.com/michael-020"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <Github className="w-4 h-4" />
                <span className="hidden xs:inline">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild title="LinkedIn">
              <a
                href="https://linkedin.com/in/michael-hosamani0206/"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden xs:inline">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild title="X">
              <a
                href="https://x.com/MichaelHosamani"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="hidden xs:inline">X</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild title="Resume">
              <a
                href="https://drive.google.com/file/d/1VKa07n8xvyZ7CX3439G_VDlBWz4nhF70/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden xs:inline">Resume</span>
              </a>
            </Button>
          </motion.div>
        </motion.section>
        
        <div id="experience" className="relative -top-20 sm:-top-40"></div>
        <motion.section
          className="mb-16 sm:mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3" variants={fadeInUp}>
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Experience
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Keploy Open Source Contributor</h3>
                    <Badge variant="secondary" className="mt-2 w-fit">
                      <Award className="w-3 h-3 mr-1" />
                      Top 3 Contributor - March 2025
                    </Badge>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li>
                    • Contributed merged PR implementing paginated blog listings for Community and Technology sections
                    using Next.js, GraphQL, and TailwindCSS.
                  </li>
                  <li>• Enhanced blog website performance and user experience through efficient pagination system.</li>
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
        
        <div id="projects" className="relative -top-20 sm:-top-40"></div>
       <motion.section
          className="mb-16 sm:mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3" variants={fadeInUp}>
            <FolderGit2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Projects
          </motion.h2>

          <motion.div className="grid gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`${project.title === "Coders-cafe" ? " p-0 lg:py-10 lg:pl-5": "p-0 lg:pl-5"} hover:shadow-lg dark:hover:shadow-accent transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
                  <div className="grid items-center lg:grid-cols-2 gap-0">
                    <div className="relative aspect-video border w-full bg-muted order-1 rounded-md overflow-hidden">
                      <a
                        href={`https://${project.link}`}
                        target="_blank"
                        className="flex items-center gap-1"
                        rel="noreferrer"
                      >
                        <Image
                          src={project.image}
                          alt={project.imageAlt || `${project.title} preview`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </a>
                    </div>

                    <CardContent className="p-4 sm:p-6 flex flex-col justify-between order-1 lg:order-2">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                          <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                          <div className="flex gap-2 flex-shrink-0">
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={`https://${project.link}`}
                                target="_blank"
                                className="flex items-center gap-1"
                                rel="noreferrer"
                              >
                                <ExternalLink className="w-3 h-3" />
                                <span className="hidden xs:inline">Live</span>
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github} target="_blank" className="flex items-center gap-1" rel="noreferrer">
                                <Github className="w-3 h-3" />
                                <span className="hidden xs:inline">Code</span>
                              </a>
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <div id="skills" className="relative -top-20 sm:-top-40"></div>
        <motion.section
          className="mb-16 sm:mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3" variants={fadeInUp}>
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Skills
          </motion.h2>

          <motion.div className="grid gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="outline" className="text-xs sm:text-sm">{skill}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        <div id="contact" className="relative -top-20 sm:-top-40"></div>
        <motion.section
          className="mb-16 sm:mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3" variants={fadeInUp}>
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Contact Me
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Let's Connect!</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <Button asChild>
                    <a href="mailto:michaelhosamani26@gmail.com" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <motion.footer
          className="text-center py-6 sm:py-8 pb-0 border-t text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © Michael Hosamani - 2025
        </motion.footer>
      </div>
    </div>
  )
}