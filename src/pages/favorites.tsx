import * as React from 'react'

import Page from '@thk/components/Page'
import GridImage from '@thk/components/grid-image'
import IndexLayout from '@thk/layouts'
import Code from '@thk/components/code'

const Me = () => (
  <IndexLayout>
    <Page title="favorites.ts">
      <Code alias="Me" packageName="@thk/core" />

      <h4>Favorites</h4>

      <ul>
        <li>Groselha.io</li>
        <li>Mentor at gStudio</li>
        <li>Support at Claro Brasil</li>
        <li>Bigland</li>
      </ul>
    </Page>
  </IndexLayout>
)

export default Me
