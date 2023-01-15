import React from 'react'
import StorySection from '../components/story-section'
import StoryShot from '../components/story-shot'
import SubSection from '../components/sub-section'


export const LensData = {
  path: '/lens-design-system',
  title: 'Lens',
  titleSuffix: 'Loom Design System',
  subtitle: 'React design system',
  roleTags: ['UI architecture', 'Design', 'Frontend development', 'Documentation website'],
  content: (
    <div>
      <StorySection theme='dark'>
      <SubSection>
          <h2>Documentation</h2>
          <p>
            ///
          </p>
        </SubSection>
        <SubSection>
          <StoryShot
            srcFolder="lens"
            srcList2={[
              'loom-lens-design-system-1.png',
            ]}
          />
        </SubSection>
        
        <SubSection hasFullWidth>
          <StoryShot
            srcFolder="lens"
            srcList2={[
              'loom-lens-design-system-2.png',
            ]}
          />
        </SubSection>

        <SubSection>
          <h2>
            Scaling system
          </h2>
          <p>
            The player is composied on a grid that instead of a px value, uses a fraction of the viewport width. This allows the player to scale to any size, while keeping the same proportions.
          </p>
        
          </SubSection>
          <SubSection hasFullWidth>

          <StoryShot
            
            srcFolder="lens"
            srcList2={[
              'loom-lens-design-system-3.png',
              'loom-lens-design-system-4.png',
              'loom-lens-design-system-5.png',
            ]}
            rows={3}
          />
        </SubSection>
      </StorySection>
    </div>
  ),
}
