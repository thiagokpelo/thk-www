import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Code from '../components/code'

const Projects = () => (
  <IndexLayout>
    <Page title="projects.ts">
      <Container>
        <h1>Projects</h1>

        <Code alias="jsSkills" packageName="@thk/js" />
        <Code alias="cssSkils" packageName="@thk/css" />
        <Code alias="htmlSkills" packageName="@thk/html" />

        <ul>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default Projects
