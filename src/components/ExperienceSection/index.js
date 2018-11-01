import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import logo1 from '../../assets/images/experience/p2logo.png'
import logo2 from '../../assets/images/experience/oslogo.jpg'
import logo3 from '../../assets/images/experience/google.svg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={logo1}
            colour='#FFFFFF'
            title='Phase2 Technolgy'
            link='https://www.phase2technology.com/'
            timeperiod='2014 - Present'
            subtitle='In my current role, I act as an advocate for the end user; ensuring that our client’s products are built with the best user experience possible. Ultimately I am responsible for ensuring that the product delivered is the product envisioned through intricate planning, design, and testing during all stages of development.'
          />
          <ExperienceUnit
            logo={logo2}
            colour='#FFFFFF'
            title='OpenSourcery'
            link='https://www.getfitso.com/'
            timeperiod='2013 - 2014'
            subtitle='At OpenSourcery, I acted as the advocate for testing throughout the process of building websites. I worked to create and integrate a single standardized QA process into all stages of development for a dozen projects simultaneously.'
          />
          <ExperienceUnit
            logo={logo3}
            colour='#FFFFFF'
            title='Google'
            link='https://www.google.com/'
            timeperiod='2011 - 2012'
            subtitle='Worked with a multinational team of linguists and engineers to help improve the quality of Google’s advertising products through daily evaluations of the quality and relevance of hundreds of individual ads, web pages, and google searches to improve algorithms and create better ad targeting systems.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
