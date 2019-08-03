import * as React from 'react'

import Page from '@thk/components/Page'
import GridImage from '@thk/components/grid-image'
import IndexLayout from '@thk/layouts'
import Code from '@thk/components/code'

const Me = () => (
  <IndexLayout>
    <Page title="me.ts">
      <Code alias="Me" packageName="@thk/core" />

      <h2>Who am I?</h2>
      <p>
        Fullstack developer - (Javascript | ReactJs | React Native | Nodejs)
      </p>

      <ul>
        <li>Groselha.io</li>
        <li>Mentor at gStudio</li>
        <li>Support at Claro Brasil</li>
        <li>Bigland</li>
      </ul>

      <h2>About me!</h2>
      <p>
        My career started 8 years ago, when I began studying Programming Logic,
        OOP, HTML5, Web Design, Javascript and jQuery. In the meantime I
        attended an ObjC Course which made me relate to the area of code and
        logic. I’ve made some projects regarding Hybrid Apps on Cordova and
        Ionic framework. I have some experience with PHP (OOP) using Symfony
        framework on admin projects and creating Rest APIs to be consumed on
        Front-end with Angular and jQuery. I also have built many institutional
        websites with HTML5, CSS3, JS , PHP and MySQL. I worked for a few months
        with Asp.Net MVC with SQL Server database and later my team and I
        changed the server language from C# to NodeJs and we consumed the API
        written on Java. On this project we recreated the whole server on Node
        with HapiJs framework making calls to SQL Server and through API and on
        client we utilized Angular with Nunjucks template rendering. I have been
        specializing as a Fullstack developer attending back-end courses such as
        .NetCore, ReactNative, Flutter, GraphQL, among others. Nowadays I am on
        a front-end team that works with multi languages and I’m always studying
        new technologies for my professional growth.
      </p>

      <GridImage />
    </Page>
  </IndexLayout>
)

export default Me
