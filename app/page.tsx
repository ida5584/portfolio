import { useEffect, useState } from "react";
import { ProjectTile } from "./ui/project-tile";
import { projects } from "@/app/projects";

export default function Home() {
  return (
    <div className="bg-white dark:bg-navy-dark h-screen w-screen flex px-20">
      <div className="basis-1/2 text-violet-100 grow flex flex-col items-center pt-24 m-10 ">
        <div className="items-start">
          <p className="text-7xl font-bold">Ida Ma</p>
          <p className="text-3xl my-5">Software Developer</p>
          <p className="text-gray-500 grow my-5">
            I create dynamic software solutions, leveraging fast learning,
            attention to detail, and effective team collaboration.
          </p>
          <div className="h-10" />
          <div className="font-bold text-xs">
            <p className="p-5"> ABOUT </p>
            <p className="p-5"> EXPERIENCE </p>
            <p className="p-5"> PROJECTS </p>
          </div>
        </div>
      </div>
      <div className="basis-1/2 pt-32 mx-24 overflow-y-scroll no-scrollbar">
        <div className="text-gray-400 grow p-5">
          <div>
            In 2023, I graduated from UC Berkeley with a degree in Electrical
            Engineering and Computer Sciences, having taken numerous CS courses
            and completed various projects along the way. While I am in the
            early stages of my career, my strong appreciation for purposeful
            design and keen eye for detail have consistently driven my work.
          </div>
          <div className="h-5"></div>
          <div>
            Currently, I focus on creating innovative software solutions with a
            user-centric approach. I am particularly passionate about developing
            applications that simplify complex tasks and provide an enjoyable
            user experience, leveraging my creativity and love for design.
          </div>
          <div className="h-5"></div>
          <div>
            Beyond coding, I enjoy exploring new hobbies and activities. When
            I’m not in front of my computer, you can find me playing tennis,
            cooking with friends, or browsing through aesthetic room decor. I
            have a deep appreciation for food, animals, and anything that is
            aesthetically pleasing or cute.
          </div>
        </div>
        {/* Projects */}
        <div className="group/projects">
          {projects.map((proj) => {
            return (
              <ProjectTile
                key={proj.title}
                dates={proj.dates}
                title={proj.title}
                description={proj.description}
                concepts={proj.concepts}
              />
            );
          })}

          <div className="h-24"></div>
        </div>
      </div>
    </div>
  );
}
