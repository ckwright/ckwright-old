import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import nbalogo from '../../assets/images/projects/nbalogo.png'
import pinlogo from '../../assets/images/projects/pin.png'
import Arsenallogo from '../../assets/images/projects/Arsenal.png'
import wwlogo from '../../assets/images/projects/wwlogo.jpg'
import cflogo from '../../assets/images/projects/cflogo.png'
import doelogo from '../../assets/images/projects/doelogo.jpg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={pinlogo}
            colour="#FFFFFF"
            title="Pinterest Help Center"
            link="https://help.pinterest.com/en"
            subtitle="Relaunched the help center for Pinterest using a combination of cutting-edge React and AI driven natural language processing Chatbot tech to create a robust search experience."
          />
          <ExperienceUnit
            logo={nbalogo}
            colour="#FFFFFF"
            title="NBA.com"
            link="http://nba.com"
            subtitle="Defined and rebuild a new content management system for NBA.com with an implementation of Drupal 8; including an extensively customized editorial backend, a custom front-end with multi-headed angular components, and integrations from external content systems and APIs."
          />
          <ExperienceUnit
            logo={Arsenallogo}
            colour="#FFFFFF"
            title="Arsenal Football Club"
            link="https://www.arsenal.com/"
            subtitle="Helped Arsenal Football Club define and build a digital content hub to drive fan engagement and serve as a central architectural solution for an API-driven platform to support multiple websites and mobile apps."
          />
        </div>
        <div>
        &nbsp;
        </div>
        <div className="row">
          <ExperienceUnit
            logo={wwlogo}
            colour="#FFFFFF"
            title="Weight Watchers"
            link="https://www.weightwatchers.com/us/"
            subtitle="Redesigned and rebuilt a new public facing visitor site for Weight Watchers in less than 9 weeks. Helped turn that one site into a multisite platform of 12 international sites with 16 language variants including automated workflows, built in training documentation, and a flexible component based design system that allows editors to create new complex designs without the need for new front-end code."
          />
          <ExperienceUnit
            logo={cflogo}
            colour="#FFFFFF"
            title="CrossFit"
            link="https://www.crossfit.com/"
            subtitle="Led a redesign and rebranding effort for CrossFit to accelerate global growth through an audience-aware digital experience focused on increasing conversions. This included several rounds of executive stakeholder interviews, international surveys and user testing, and extensive user experience work while interfacing directly with CrossFit’s in-house development and product teams."
          />
          <ExperienceUnit
            logo={doelogo}
            colour="#FFFFFF"
            title="Department of Energy"
            link="https://www.energy.gov/"
            subtitle="Supported 2 years of ongoing improvements to the Energy.gov platform including a design refresh of site, a new flexible design system for content editors, accessibility improvements and expanded functionality for individual offices. "
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
