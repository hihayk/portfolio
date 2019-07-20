import React from 'react'
import StorySection, { StorySections } from '../components/story-section'
import StoryShot from '../components/story-shot'
import sequence1 from '../assets/images/sequence1-hayk-an-design.png'
import sequence3 from '../assets/images/sequence3-hayk-an-design.png'
import sequence4 from '../assets/images/sequence4-hayk-an-design.png'
import sequence5 from '../assets/images/sequence5-hayk-an-design.png'

export const sequenceData = {
  path: '/sequence',
  title: 'Sequence',
  subtitle: 'Project manager',
  description: 'A full case study coming soon.',
  content: (
    <StorySections>
      <StorySection>
        <StoryShot src={sequence1} />
        <StoryShot src={sequence4} />
      </StorySection>
    
      <StorySection>
        <StoryShot srcList={[ sequence3, sequence5 ]} />
      </StorySection>
    </StorySections>
  )
}