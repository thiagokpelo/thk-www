import * as React from 'react'
import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl'

import Page from '@thk/components/Page'
import IndexLayout from '@thk/layouts'
import Code from '@thk/components/code'
import JobList, { JobListItem } from '@thk/components/job-list'

const Projects = ({ intl }: any) => (
  <IndexLayout>
    <Page title="projects.ts">
      <Code alias="Projects" packageName="@thk/repositories" />

      <h2>{intl.formatMessage({ id: 'projects.what-i-already-do.title' })}</h2>

      <JobList>
        <JobListItem
          companyName={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.blz.name'
          })}
          jobTitle={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.blz.job-description'
          })}
        >
          <ul>
            <FormattedHTMLMessage id="projects.what-i-already-do.jobs.blz.list" />
          </ul>
        </JobListItem>
        <JobListItem
          companyName={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.claro.name'
          })}
          jobTitle={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.claro.job-description'
          })}
        >
          <ul>
            <FormattedHTMLMessage id="projects.what-i-already-do.jobs.claro.list" />
          </ul>
        </JobListItem>
        <JobListItem
          companyName={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.amil.name'
          })}
          jobTitle={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.amil.job-description'
          })}
        >
          <ul>
            <FormattedHTMLMessage id="projects.what-i-already-do.jobs.amil.list" />
          </ul>
        </JobListItem>
        <JobListItem
          companyName={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.glambox.name'
          })}
          jobTitle={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.glambox.job-description'
          })}
        >
          <ul>
            <FormattedHTMLMessage id="projects.what-i-already-do.jobs.glambox.list" />
          </ul>
        </JobListItem>
        <JobListItem
          companyName={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.printi.name'
          })}
          jobTitle={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.printi.job-description'
          })}
        >
          <ul>
            <FormattedHTMLMessage id="projects.what-i-already-do.jobs.printi.list" />
          </ul>
        </JobListItem>
        <JobListItem
          companyName={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.meiuca.name'
          })}
          jobTitle={intl.formatMessage({
            id: 'projects.what-i-already-do.jobs.meiuca.job-description'
          })}
        >
          <ul>
            <FormattedHTMLMessage id="projects.what-i-already-do.jobs.meiuca.list" />
          </ul>
        </JobListItem>
      </JobList>
    </Page>
  </IndexLayout>
)

export default injectIntl(Projects)
