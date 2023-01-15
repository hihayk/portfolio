import React from 'react'
import StorySection from '../components/story-section'
import StoryShot from '../components/story-shot'
import SubSection from '../components/sub-section'

const srcFolder = 'lens'

export const LensData = {
  path: '/lens-design-system',
  title: 'Lens',
  titleSuffix: 'Loom Design System',
  roleTags: ['UI architecture', 'Design', 'Frontend development', 'Documentation website'],
  content: (
    <StorySection theme='dark'>
      <SubSection>
        <h2>Lens Documentation</h2>
        <p>
          Custom documentation website built with Next.js, MDX and Lens styles.
        </p>
      </SubSection>
      <SubSection>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-1.png',
          ]}
        />
      </SubSection>
        
      <SubSection>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-2.png',
          ]}
        />
      </SubSection>

      <SubSection>
        <h3>Code preview and playground</h3>
        <br />
        <video autoPlay muted loop src={require('../assets/images/lens/loom-lens-design-system-17.mp4')}/>
      </SubSection>

      <SubSection>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-18.png',
          ]}
        />
      </SubSection>

      <SubSection>
        <h2>
          Variables
        </h2>      
      </SubSection>
      <SubSection hasFullWidth>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-3.png',
            'loom-lens-design-system-4.png',
            'loom-lens-design-system-5.png',
            'loom-lens-design-system-10.png',
          ]}
          rows={2}
        />
      </SubSection>

      <SubSection>
        <h2>Utilities</h2>
        <p>
          CSS classes that use Lens variables for quick styling.
        </p>
      </SubSection>

      <SubSection hasFullWidth>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-6.png',
            'loom-lens-design-system-7.png',
            'loom-lens-design-system-8.png',
            'loom-lens-design-system-9.png',
          ]}
          rows={2}
        />
      </SubSection>

      <SubSection>
        <h2>Showcase</h2>
        <p>
          A set of example compositions commonly used in the product. 
          Developers can grab the code and adapt it to their use case. 
        </p>
      </SubSection>

      <SubSection hasFullWidth>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-11.png',
            'loom-lens-design-system-12.png',
          ]}
          rows={2}
        />
      </SubSection>
      <SubSection hasFullWidth>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-13.png',
            'loom-lens-design-system-14.png',
          ]}
          rows={2}
        />
      </SubSection>

      <SubSection>
        <h3>Layout recipes</h3>
        <p>
          A set of commonenly used layout snippets to speed up composition.
        </p>
      </SubSection>

      <SubSection hasFullWidth>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-15.png',
            'loom-lens-design-system-16.png',
          ]}
          rows={2}
        />
      </SubSection>
      
      <SubSection>
        <h2>Theme</h2>
        <p>
          The documentation website uses Lens, so when the theme changes, the documentation changes too.
        </p>
      </SubSection>

      <SubSection>
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-21.png',
          ]}
          rows={1}
        />
      </SubSection>
      <SubSection >
        <StoryShot
          srcFolder={srcFolder}
          srcList2={[
            'loom-lens-design-system-19.png',
            'loom-lens-design-system-20.png',
          ]}
          rows={2}
        />
      </SubSection>
    </StorySection>
  ),
}
