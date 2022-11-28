import React from 'react'
import StorySection, { StorySections } from '../components/story-section'
import StoryShot from '../components/story-shot'
import bicefal3 from '../assets/images/bicefal3-hayk-an-design.png'
import bicefal2 from '../assets/images/bicefal2-hayk-an-design.png'
import SubSection from '../components/sub-section'

export const designForMusicData = {
  path: '/design-for-music',
  title: 'Design for Music',
  subtitle: 'Records and Events',
  links: [
    'http://bicefal.org',
    'http://versalversal.com',
  ],
  content: (
    <div>
      <StorySection theme='light'>
        <SubSection>
          <h2>Bicefal festival</h2>
          <StoryShot src={bicefal2} />
          <StoryShot src={require('../assets/images/design-for-music/bicefal.png')} />
          <StoryShot src={bicefal3} />
        </SubSection>
      </StorySection>

      <StorySection theme='light' backgroundColor='white'>
        <SubSection>
          <h2>Aylevs records</h2>
          <StoryShot
            srcList={[
              require('../assets/images/design-for-music/aylevs-001.jpg'),
              require('../assets/images/design-for-music/rmx-cover.jpg'),
              require('../assets/images/design-for-music/poster-three.png'),
              require('../assets/images/design-for-music/poster-four.png'),
            ]}
            rows={2}
          />
        </SubSection>
      </StorySection>

      <StorySection theme='light'>
        <SubSection>
          <h2>Versal</h2>
          <StoryShot
            srcList={[
              require('../assets/images/design-for-music/versal.png'),
            ]}
            rows={1}
          />
        </SubSection>
      </StorySection>
    </div>
  )
}
