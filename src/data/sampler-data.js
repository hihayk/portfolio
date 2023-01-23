import React from 'react'
import StorySection from '../components/story-section'
import StoryShot from '../components/story-shot'
import SubSection from '../components/sub-section'
import styled from 'styled-components'

const srcFolder = 'lens'
const srcFolder2 = 'sampler'

const ColorBlockWrapper = styled.div`
  width: 100%;
  font-size: calc(var(--size1) / 2);
  display: grid;
  grid-auto-flow: row;
  justify-content: start;
  align-items: center;
  gap: var(--space2);
`

const ColorBlock = styled.div`
  aspect-ratio: 1/1;
  background: ${({ color }) => color};
  display: grid;
  place-items: center;
  color: hsl(0 0% 0% / 0.5);
  width: var(--space4);
`

const ColorBlocksRoot = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
`

const ColorSection = styled.div`
  display: grid;
  grid-template-columns: 4fr auto;
  gap: var(--space3);
`

const theme1 = [
  { color: "#E8EAE5", title: 'bg' },
  { color: "#8B536B", title: 'title' },
  { color: "#AD896E", title: 'answer' },
  { color: "#603F6E", title: 'button' },
]

const theme2 = [
  { color: "#0E1523", title: 'bg' },
  { color: "#D7DBD4", title: 'title' },
  { color: "#B8C2B6", title: 'answer' },
  { color: "#98A99A", title: 'button' },
]

const theme3 = [
  { color: "#181026", title: 'bg' },
  { color: "#CEE0D6", title: 'title' },
  { color: "#A9C7BC", title: 'answer' },
  { color: "#629694", title: 'button' },
]

const theme4 = [
  { color: "#C74139", title: 'bg' },
  { color: "#F5CCE2", title: 'title' },
  { color: "#ECA5C0", title: 'answer' },
  { color: "#4D1449", title: 'button' },
]

const ColorBlocks = ({theme, showTitle, ...props}) => {
  return (
    <ColorBlocksRoot {...props}>
      {theme.map(({ color, title }) => (
        <ColorBlockWrapper>
          {showTitle && title}
          <ColorBlock color={color} />
        </ColorBlockWrapper>
      ))}
    </ColorBlocksRoot>
  )
}
    

export const samplerData = {
  path: '/sampler-typeform-design-system',
  title: 'Sampler',
  titleSuffix: 'Typeform Design System',
  subtitle: 'Typeform forms rebuild with a dedicated Design System',
  roleTags: ['UI architecture', 'Design', 'Frontend development', 'Documentation website'],
  content: (
    <StorySection theme='dark'>
      <SubSection>
        <p>
          The system provides low-level components and a set of bigger compositions that are used as form question types.
        </p>
      </SubSection>
      <SubSection>
        <StoryShot
          srcFolder={srcFolder2}
          srcList2={[
            'sampler-6.png',
            'sampler-7.png',
            'sampler-8.png',
            'sampler-10.png',
          ]}
          rows={2}
        />
      </SubSection>
      <SubSection>
        <p>Old design adapted to 8px grid</p>
      </SubSection>
      <SubSection>
        <StoryShot
          srcFolder={srcFolder2}
          srcList2={[
            'sampler-1.png',
          ]}
        />
      </SubSection>
        
      <SubSection>
        <h2>Theming</h2>
        <p>
          Theming is Typeform's most important feature. The Sampler system takes 4 colors and generates a the necessary opacity variations for all components.
        </p>
      </SubSection>

      <SubSection>
        <div className="mt-3">
          <ColorBlocks theme={theme1} showTitle/>
          <ColorBlocks theme={theme2}/>
          <ColorBlocks theme={theme3}/>
          <ColorBlocks theme={theme4}/>
        </div>
      </SubSection>
          
      <SubSection >
        <StoryShot
          srcFolder={srcFolder2}
          srcList2={[
            'sampler-2.png',
            'sampler-3.png',
            'sampler-4.png',
            'sampler-5.png',
          ]}
          rows={2}
        />
      </SubSection>
    </StorySection>
  ),
}
