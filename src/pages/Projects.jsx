import React, { useState } from "react";
import { FaCode, FaExternalLinkAlt, FaGithub, FaChevronDown } from "react-icons/fa";

const projects = [
  {
    title: "Flight Booking & Reservation System ",
    description:
      "A full-stack flight reservation system with authentication, real-time booking, and payment integration.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://flight-booking-final-2.netlify.app/",
    backendLiveLink: "https://flight-booking-and-reservation.onrender.com",

    repoLink:
      "https://github.com/GanishwarArun/flight-final-booking-and-reservation-frontend",
    backendRepoLink:
      "https://github.com/GanishwarArun/flight-booking-and-reservation-.git",
  },

  {
    title: "Mental Health Counselling",
    description:
      "A comprehensive mental health counselling platform built with MERN stack.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://mental-health-counselling.netlify.app/",
    backendLiveLink: "https://mental-health-counselling-76d1.onrender.com",
    repoLink:
      "https://github.com/GanishwarArun/Mental--Health-Counselling-Frontend.git",
    backendRepoLink:
      "https://github.com/GanishwarArun/Mental--Health-Counselling-Backend.git",
  },

  {
    title: "Health & Wellness App",
    description:
      "A full-stack web application for health and wellness tracking.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://heath-wellness.netlify.app/",
    backendLiveLink: "https://health-wellness-backend.onrender.com",
    repoLink: "https://github.com/GanishwarArun/Health-Wellness-Frontend",
    backendRepoLink:
      "https://github.com/GanishwarArun/health-wellness--Backend.git",
  },
  {
    title: "Garage Management System",
    description:
      "An AI-powered garage management system that streamlines vehicle diagnostics and service tracking.",
    category: "Full Stack ",
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "AI"],
    liveLink: "https://app.crankcase.ai",
    repoLink: "https://github.com/robox-corp/garage-client",
    backendRepoLink: "https://github.com/roboxcorp/crankcase-server.git",
  },

  {
    title: "Password Reset Flow ",
    description: "A full-stack password reset flow system using MERN stack.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink:
      "https://passwordresetflow-fullfsd-mernstack.netlify.app/user/login",
    repoLink:
      "https://github.com/GanishwarArun/Reset-flow-project-13-Full-MERN-stack.git",
  },
  {
    title: "Recipe API Backend",
    description:
      "A Node.js and Express-based API for managing and retrieving recipes.",
    category: "Backend",
    techStack: ["Node.js", "Express.js", "MongoDB"],
    liveLink: "https://dashboard.render.com/web/srv-csbo3gi3esus73ftuotg",
    backendRepoLink: "https://github.com/GanishwarArun/recipie.git",
  },
  {
    title: "Bearer Token Authentication API",
    description:
      "A backend authentication service using bearer token authorization.",
    category: "Backend",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    liveLink: "https://dashboard.render.com/web/srv-csfkiq5svqrc73fggue0",
    backendRepoLink: "https://github.com/GanishwarArun/Task11-Bearer-token.git",
  },
  {
    title: "Movie Searching App",
    description: "A movie search application built using React Router.",
    category: "Frontend",
    techStack: ["React", "React Router"],
    liveLink: "https://ganish-moviesearchingapp-reactrouter7.netlify.app/",
    repoLink: "https://github.com/GanishwarArun/Movie-Searching-app-task-7.git",
  },
  {
    title: "E-Cart App",
    description:
      "A fully responsive e-commerce cart application built with React and React Router.",
    category: "Frontend",
    techStack: ["React", "TailwindCSS"],
    liveLink: "https://ganish-router-task6.netlify.app/",
    repoLink:
      "https://github.com/GanishwarArun/CART_APP-React-Router-Task-6.git",
  },
  {
    title: "Income-Expense Calculator (JS DOM)",
    description:
      "A web-based income and expense tracker built using JavaScript DOM manipulation.",
    category: "Frontend",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://ganishwarinc-expcalculator-task-4.netlify.app/",
    repoLink:
      "https://github.com/GanishwarArun/income-expenditure-tracker-task-4.git",
  },
  {
    title: "Landing Page using HTML & TailwindCSS",
    description: "A responsive landing page built with HTML and TailwindCSS.",
    category: "Frontend",
    techStack: ["HTML", "TailwindCSS"],
    liveLink: "https://ganishwartailwindtask-2.netlify.app/",
    repoLink: "https://github.com/GanishwarArun/task-2-tailwind",
  },
];

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All"); // Add this line

  const categories = ["All", "Full Stack", "Frontend", "Backend"]; // Add this line

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section className="p-8 pt-24 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-5xl font-bold text-center mb-10">Projects</h1>

      {/* Add this category filter buttons section */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-blue-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Change projects.map to filteredProjects.map */}
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 p-4 transition-transform duration-300 hover:scale-105"
          >
            {/* Rest of your existing project card code remains the same */}
            <div
              className="text-xl font-semibold flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              onClick={() => toggleProject(index)}
            >
              <FaCode className="text-blue-500 transition-transform duration-300 transform hover:scale-125" />{" "}
              {project.title}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  expandedProject === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {expandedProject === index && (
              <div className="mt-2">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="relative inline-block">
                  <button className="px-4 py-2 bg-blue-200 dark:bg-blue-600 text-sm rounded-md">
                    {project.category}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 py-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-200 dark:bg-green-600 text-sm rounded-md relative group cursor-pointer"
                    >
                      {tech}
                      <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className="text-blue-500 hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Frontend Demo
                    </a>
                    {project.backendLiveLink && (
                      <a
                        href={project.backendLiveLink}
                        className="text-blue-500 hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt /> Backend API
                      </a>
                    )}
                  </div>
                  <div className="flex gap-4">
                    {project.repoLink ? (
                      <>
                        <a
                          href={project.repoLink}
                          className="text-blue-500 hover:underline flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> Frontend Repo
                        </a>
                        {project.backendRepoLink && (
                          <a
                            href={project.backendRepoLink}
                            className="text-blue-500 hover:underline flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub /> Backend Repo
                          </a>
                        )}
                      </>
                    ) : (
                      <a
                        href={project.backendRepoLink}
                        className="text-blue-500 hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub /> GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;
