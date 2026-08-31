import { Head } from 'vite-react-ssg'
import { Hero } from '@/components/index/Hero'
import { AvailabilityBar } from '@/components/index/AvailabilityBar'
import { BioBand } from '@/components/index/BioBand'
import { TheStack } from '@/components/index/TheStack'
import { WorkList } from '@/components/index/WorkList'
import { ExperienceEducation } from '@/components/index/ExperienceEducation'
import { ContactFooter } from '@/components/index/ContactFooter'

const DESCRIPTION =
  'React and Next.js interfaces — production dashboards, server-rendered booking flows, and Chrome extensions that give people their attention back.'

export function IndexPage() {
  return (
    <>
      <Head>
        <title>Muhammad Gad — Frontend Engineer</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Muhammad Gad — Frontend Engineer" />
        <meta property="og:description" content={DESCRIPTION} />
      </Head>

      <main className="shell">
        <Hero className="reveal" />
        <AvailabilityBar available className="reveal" />
        <BioBand className="reveal" />
        <TheStack />
        <WorkList />
        <ExperienceEducation className="reveal" />
      </main>

      <ContactFooter className="reveal" />
    </>
  )
}
