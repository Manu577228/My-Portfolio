import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "My-Portfolio",
    description:
      "A portfolio exemplifies your beliefs, skills, qualifications, education, training, and experiences. The tech-stack used is React, MUI, Three.JS & Firebase.",
    image: "/portfolio.PNG",
    github: "https://github.com/Manu577228/manu-portfolio",
    link: "https://manu-portfolio-3d.web.app/",
  },
  {
    name: "My-Blog",
    description:
      "The purpose of a blog is to create a more engaging website for your brand. The tech-stack used is Next.js & React.",
    image: "/blog.jpeg",
    github: "https://github.com/Manu577228/Blog-Using-Next.JS",
    link: "https://manu-blog.vercel.app/",
  },
  {
    name: "Note-Taking-App",
    description:
      "Note-Taking-App is a web app that let's us digitally take note of anything we wish. The tech-stack used is Next.JS, React.JS & Mongo-DB.",
    image: "/note-taking-app.jpg",
    github: "https://github.com/Manu577228/Next-JS--Mongo-DB--CRUD-App",
    link: "https://github.com/Manu577228/Next-JS--Mongo-DB--CRUD-App/blob/master/Sample-UI-1.PNG/",
  },
  {
    name: "TODO-App",
    description: "A Full-stack ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do. The tech-stack used is Mongo-DB, React.JS, Express.JS & Node.JS.",
    image: "/todo.jpg",
    github: "https://github.com/Manu577228/MERN-Todo-App",
    link: "https://github.com/Manu577228/MERN-Todo-App",
  },
  {
    name: "Admin-Dashboard",
    description:
      "My Blog using Admin Dashboard. The tech-stack used is Angular Material, Material Icons, SCSS, RXJS, Angular Routing & Angular Services",
    image: "/admin-dashboard.jpg",
    github: "https://github.com/Manu577228/Angular-AdminDashboard-Blog",
    link: "https://github.com/Manu577228/Angular-AdminDashboard-Blog",
  },
  {
    name: "Food-Delivery-App",
    description:
      "Food delivery apps are third-party delivery services hosted on mobile applications that restaurants or retailers partner with to showcase their menu and food offerings.The tech-stack used is React-Native.",
    image: "/food-delivery.webp",
    github: "https://github.com/Manu577228/Food-Delivery-App-Native",
    link: "https://github.com/Manu577228/Food-Delivery-App-Native",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
       Some of my Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
