import * as React from 'react'
import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl'

import Page from '@thk/components/Page'
import GridImage from '@thk/components/grid-image'
import Image from '@thk/components/image'
import IndexLayout from '@thk/layouts'
import Code from '@thk/components/code'

const Me = ({ intl }: any) => (
  <IndexLayout>
    <Page title="me.ts">
      <Code alias="Me" packageName="@thk/core" />

      <h2>{intl.formatMessage({ id: 'me.who-am-i.title' })}</h2>
      <p>{intl.formatMessage({ id: 'me.who-am-i.description' })}</p>
      <ul>
        <FormattedHTMLMessage id="me.who-am-i.jobs" />
      </ul>

      <h2>{intl.formatMessage({ id: 'me.about-me.title' })}</h2>
      <p>{intl.formatMessage({ id: 'me.about-me.description' })}</p>

      <GridImage>
        <Image
          alt={intl.formatMessage({ id: 'me.images.my-workspace' })}
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859371/jiraiya_xiwjj4.gif"
        />
        <Image
          alt={intl.formatMessage({ id: 'me.images.home-office' })}
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859121/home-office_roqb9z.jpg"
        />
        <Image
          alt={intl.formatMessage({ id: 'me.images.mother' })}
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859121/mother_bxtnsm.jpg"
        />
        <Image
          alt={intl.formatMessage({ id: 'me.images.my-love' })}
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/love_gwwvyt.jpg"
        />
        <Image
          alt={intl.formatMessage({ id: 'me.images.dad' })}
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/father_hglwfd.jpg"
        />
        <Image
          alt={intl.formatMessage({ id: 'me.images.palmeiras' })}
          src="https://res.cloudinary.com/dmmhdwajy/image/upload/v1564859120/palmeiras_bspfch.jpg"
        />
      </GridImage>
    </Page>
  </IndexLayout>
)

export default injectIntl(Me)
