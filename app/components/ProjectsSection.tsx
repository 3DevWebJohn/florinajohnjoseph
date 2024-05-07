"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Portfolio react next js",
    image: "/images/projects/portpolio.png",
    tag: ["Featured", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "GWP",
    description: "Event Service",
    image: "/images/projects/Gwp.png",
    tag: ["Featured", "Wordpress"],
    gitUrl: "https://gwpengage.com/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "CJ Sunset View Resort",
    description: "C & J Sunset View Resort in Zambales",
    image: "/images/projects/cjsunset.png",
    tag: ["Wordpress"],
    gitUrl: "https://cjsunsetview.com/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Captain Ron",
    description: "Captain Ron's Window Cleaning & Solar SunScreens",
    image: "/images/projects/captainron.png",
    tag: ["Wordpress"],
    gitUrl: "https://captainronsaz.com/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Haya Kape",
    description:
      "haya kape is small business in Paranaque that currently have 3 branches 2 in Paranaque and GMA Cavite and catering events",
    image: "/images/projects/hayakape.png",
    tag: ["Wordpress"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Mutube",
    description: "Nextjs music app",
    image: "/images/projects/mutube.png",
    tag: ["Featured", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Donut",
    description: "Donut 1st rendered",
    image: "/images/projects/donutbase.png",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Haya Kape Neon",
    description: "Haya Kape assets",
    image: "/images/projects/hayakapelogoneon.png",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Haya Kape Cups with animation",
    description: "Haya Kape animation ads",
    image: "/images/projects/0200.png",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Haya Kape Cups assets website",
    description: "Haya Kape 3D assets for website",
    image: "/images/projects/cupss.jpg",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Product Keyboard",
    description: "Product ads for megadimps",
    image: "/images/projects/keyboard.png",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Centro Escolar University Project (animation)",
    description: "Koleideiscopic Adventure",
    image: "/images/projects/ceumakati.png",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },

  {
    id: 11,
    title: "CheckMate",
    description: "3D rendered Realistic Chess and Board",
    image: "/images/projects/chessboard2.png",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Cara y Cruz",
    description: "3D rendered Realistic Cara y Cruz",
    image: "/images/projects/piso.png",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },

  {
    id: 13,
    title: "Lonely PokeBall",
    description: "3D rendered Realistic Pokeball",
    image: "/images/projects/pokeball.png",
    tag: ["Featured", "Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Iso metric",
    description: "Iso metric design",
    image: "/images/projects/iso1.png",
    tag: ["Blender"],
    gitUrl:
      "https://drive.google.com/drive/folders/1m78jXJS-NCL-8ScXoySzNczv1Z9sOQCf?usp=drive_link",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Featured"
          isSelected={tag === "Featured"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blender"
          isSelected={tag === "Blender"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Wordpress"
          isSelected={tag === "Wordpress"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
