import * as React from 'react'

import Image from '../components/image'
import Page from '../components/Page'
import IndexLayout from '../layouts'

import { bootcampImg, fatherImg, loveImg, motherImg, palmeirasImg, umbandaImg } from '@thk/content/media'

const Me = () => (
  <IndexLayout>
    <Page title="me.ts">
      <Image src={bootcampImg} />
      <h1>Me</h1>
      <h4>Who am I?</h4>
      <p>Fullstack developer - (Javascript | ReactJs | React Native | Nodejs)</p>
      <ul>
        <li>Groselha.io</li>
        <li>Mentor at gStudio</li>
        <li>Bigland</li>
      </ul>

      <p>
        My career started 8 years ago, when I began studying Programming Logic, OOP, HTML5, Web Design, Javascript and jQuery. In the
        meantime I attended an ObjC Course which made me relate to the area of code and logic. I’ve made some projects regarding Hybrid Apps
        on Cordova and Ionic framework. I have some experience with PHP (OOP) using Symfony framework on admin projects and creating Rest
        APIs to be consumed on Front-end with Angular and jQuery. I also have built many institutional websites with HTML5, CSS3, JS , PHP
        and MySQL. I worked for a few months with Asp.Net MVC with SQL Server database and later my team and I changed the server language
        from C# to NodeJs and we consumed the API written on Java. On this project we recreated the whole server on Node with HapiJs
        framework making calls to SQL Server and through API and on client we utilized Angular with Nunjucks template rendering. I have been
        specializing as a Fullstack developer attending back-end courses such as .NetCore, ReactNative, Flutter, GraphQL, among others.
        Nowadays I am on a front-end team that works with multi languages and I’m always studying new technologies for my professional
        growth.
      </p>

      <div
        style={{
          display: 'grid'
        }}
      >
        <img src={fatherImg} />
        <img src={motherImg} />
        <img src={loveImg} />
        <img src={palmeirasImg} />
        <img src={umbandaImg} />
      </div>
    </Page>
  </IndexLayout>
)

export default Me
