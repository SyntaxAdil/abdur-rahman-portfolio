import React from 'react'
import Hero from '../section/Hero'
import AboutSection from './../section/AboutSection';
import SkillsSection from '../section/SkillSection';
import FeaturedProjects from '../section/ProjectSection';
import ExperienceEducation from '../section/ExEd';
import ContactSection from '../section/ContactSection';


const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <FeaturedProjects></FeaturedProjects>
      <ExperienceEducation ></ExperienceEducation>
      <ContactSection></ContactSection>
      
    </div>
  )
}

export default HomePage