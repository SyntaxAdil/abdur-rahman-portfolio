import React from 'react'
import Hero from '../section/Hero'
import AboutSection from './../section/AboutSection';
import SkillsSection from '../section/SkillSection';
import FeaturedProjects from '../section/ProjectSection';


const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <FeaturedProjects></FeaturedProjects>
      
    </div>
  )
}

export default HomePage