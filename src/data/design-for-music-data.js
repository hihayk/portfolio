import React from 'react'
import StorySection, { StorySections } from '../components/story-section'
import ImageSection from '../components/image-section'
import StoryShot from '../components/story-shot'
import bicefal1 from '../assets/images/bicefal1-hayk-an-design.png'
import bicefal3 from '../assets/images/bicefal3-hayk-an-design.png'
import bicefal2 from '../assets/images/bicefal2-hayk-an-design.png'

export const designForMusicData = {
  path: '/design-for-music',
  title: 'Design for Music',
  subtitle: 'Records and Events',
  links: [
    'http://bicefal.org',
    'http://versalversal.com',
  ],
  content: (
    <StorySections>
      <StorySection theme='light'>
        <h2>Bicefal festival</h2>
        <StoryShot src={bicefal2} />
        <StoryShot src={require('../assets/images/design-for-music/bicefal.png')} />
        <StoryShot src={bicefal3} />
      </StorySection>
      
      <StorySection theme='light' backgroundColor='white'>
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
      </StorySection>
      
      <StorySection theme='light'>
        <h2>Versal</h2>
        <StoryShot
          srcList={[
            require('../assets/images/design-for-music/versal.png'),
          ]}
          rows={1}
        />
      </StorySection>
    </StorySections>
  )
}