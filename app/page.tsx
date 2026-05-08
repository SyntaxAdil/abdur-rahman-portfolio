import React from 'react'
import Hero from '../section/Hero'
import AboutSection from './../section/AboutSection';
import SkillsSection from '../section/SkillSection';
import FeaturedProjects from '../section/ProjectSection';
import ExperienceEducation from '../section/ExEd';
import ContactSection from '../section/ContactSection';
import { getProject } from '../lib/porject';


const HomePage =async () => {
  const project=await getProject();
  const project_section=project.slice(0,4)

  return (
    <div>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <FeaturedProjects project={project_section} ></FeaturedProjects>
      <ExperienceEducation ></ExperienceEducation>
      <ContactSection></ContactSection>
      
    </div>
  )
}

export default HomePage