"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import RenderModel from "./RenderModel";
import Keyboard from "./model/keyboard";

const TAB_DATA = [
  {
    title: "3D Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Modeling</li>
        <li>Texturing and UV Mapping</li>
      </ul>
    ),
  },
  {
    title: "Web",
    id: "web",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Wordpress</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Informatics BSIT</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/projects/keyboard.png"
          width={500}
          height={500}
          alt="johnjosephflorina"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a 3D artist and web developer, I combine these skills to create
            high-quality assets and impressive websites that provide an
            immersive and engaging user experience. Combining my artistic vision
            and technical expertise, I design visually stunning graphics and
            animations that enhance your website's visual appeal and help it
            stand out in a crowded digital landscape. Whether it's
            photorealistic product rendering, dynamic motion graphics, or
            creating immersive 3D environments, we strive to push the boundaries
            of creativity to create memorable and impactful online experiences.
            Additionally, our web development knowledge allows us to seamlessly
            integrate these 3D assets into your website, ensuring smooth
            performance and interactivity across various platforms. By
            harnessing the power of both 3D art and web development, we create
            digital experiences that not only captivate your audience, but also
            effectively communicate your brand's message and drive engagement.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              3D Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("web")}
              active={tab === "web"}
            >
              {" "}
              Web{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
