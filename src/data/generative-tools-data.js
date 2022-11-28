import React from 'react'
import StorySection, { StorySections } from '../components/story-section'
import StoryShot from '../components/story-shot'
import CustomLink from '../components/custom-link'
import scale1 from '../assets/images/scale1-hayk-an-design.png'
import scale2 from '../assets/images/scale2-hayk-an-design.png'
import scale3 from '../assets/images/scale3-hayk-an-design.gif'
import scale4 from '../assets/images/scale4-hayk-an-design.gif'
import scale5 from '../assets/images/scale5-hayk-an-design.gif'
import scale6 from '../assets/images/scale6-hayk-an-design.gif'

import wheel1 from '../assets/images/wheel1-hayk-an-design.png'
import wheel2 from '../assets/images/wheel2-hayk-an-design.gif'
import wheel3 from '../assets/images/wheel3-hayk-an-design.gif'

import modulator3 from '../assets/images/modulator3-hayk-an-design.png'
import modulator2 from '../assets/images/modulator2-hayk-an-design.gif'
import modulator4 from '../assets/images/modulator4-hayk-an-design.gif'
import SubSection from '../components/sub-section'

export const generativeToolsData = {
  path: '/generative-tools',
  title: 'Generative Tools',
  links: [
    'https://hihayk.github.io/scale',
    'https://hihayk.github.io/wheel',
    'https://hihayk.github.io/modulator',
  ],
  subtitle: 'Design with Functions',
  description: 'These are tools that I designed and developed to experiment with generative design techniques.',
  content: (
    <div>
      <StorySection theme='light'>
        <SubSection>
          <h2>Scale</h2>
          <p>
            Playful color scales generator.
            <br />
            <CustomLink href='https://hihayk.github.io/scale' target='_blank' lineOnHover={false} withArrow>hihayk.github.io/scale</CustomLink>
          </p>
          <StoryShot src={scale1} />
          <StoryShot src={scale2} />
          <StoryShot src={scale6} />
          <StoryShot src={scale3} />
          <StoryShot src={scale4} />
          <StoryShot src={scale5} />
        </SubSection>
      </StorySection>

      <StorySection backgroundColor='#e5e5e5' theme='light'>
        <SubSection>
          <h2>Wheel</h2>
          <p>
            Playful color wheel generator.
            <br />
            <CustomLink href='https://hihayk.github.io/wheel' target='_blank' lineOnHover={false} withArrow>hihayk.github.io/wheel</CustomLink>
          </p>
          <StoryShot src={wheel1} />
          <StoryShot src={wheel2} />
          <StoryShot src={wheel3} />
        </SubSection>
      </StorySection>

      <StorySection theme='light'>
        <SubSection>
          <h2>Modulator</h2>
          <p>
            Spacing tool for design systems that helps designers define a base unit size and create preset spaces.
            <br />
            <CustomLink href='https://hihayk.github.io/modulator' target='_blank' lineOnHover={false} withArrow>hihayk.github.io/modulator</CustomLink>
          </p>
          <StoryShot src={modulator3} />
          <StoryShot src={modulator2} />
          <StoryShot src={modulator4} />
        </SubSection>
      </StorySection>
    </div>
  )
}
