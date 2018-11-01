import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h2>
          Hi, I am <span className="bold">Chris Wright</span>
        </h2>

        <h4 className="bold">
        My role is to facilitate the design and execution of great digital products for a portfolio of high-profile clients. My background is varied and I bring to the table a thorough understanding of a broad range of specialties from Information Architecture to User Experience, Digital Strategy, Project and Product Management.

        </h4>
        <ExperienceSection />
        <ProjectsSection />
      </div>

       <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
