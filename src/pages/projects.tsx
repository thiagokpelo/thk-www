import * as React from 'react'

import Page from '@thk/components/Page'
import IndexLayout from '@thk/layouts'
import Code from '@thk/components/code'
import JobList, { JobListItem } from '@thk/components/job-list'

const Projects = () => (
  <IndexLayout>
    <Page title="projects.ts">
      <Code alias="Projects" packageName="@thk/repositories" />
      <h2>What I already did</h2>

      <JobList>
        <JobListItem companyName="Claro" jobTitle="fullstack developer">
          <ul>
            <li>Component library development</li>
            <li>Definition and structure of design tokens</li>
            <li>Choice of technology stack</li>
          </ul>
        </JobListItem>
        <JobListItem companyName="Amil" jobTitle="frontend developer">
          <ul>
            <li>New features development</li>
            <li>Ui/Ux</li>
            <li>Application optimization</li>
            <li>Building hybrid applications</li>
          </ul>
        </JobListItem>
        <JobListItem companyName="Glambox" jobTitle="fullstack developer">
          <ul>
            <li>New architecture design with AngularJS and NodeJs</li>
            <li>Develop new user-facing features</li>
            <li>Build reusable code and libraries for future use</li>
            <li>Ensure the technical feasibility of UI/UX designs</li>
            <li>Optimize application for maximum speed and scalability</li>
            <li>
              Assure that all user input is validated before submitting to
              back-end
            </li>
            <li>Collaborate with other team members and stakeholders</li>
          </ul>
        </JobListItem>
        <JobListItem companyName="Printi" jobTitle="fullstack developer">
          <ul>
            <li>Component library development</li>
            <li>Definition and structure of design tokens</li>
            <li>Choice of technology stack</li>
          </ul>
        </JobListItem>
        <JobListItem companyName="Meiuca" jobTitle="technical leader">
          <ul>
            <li>Component library development</li>
            <li>Definition and structure of design tokens</li>
            <li>Choice of technology stack</li>
            <li>Design System bootcamp instructor</li>
          </ul>
        </JobListItem>
      </JobList>
    </Page>
  </IndexLayout>
)

export default Projects
