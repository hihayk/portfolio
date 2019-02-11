import React from 'react'
import Shot from './components/shot'
import ShotText from './components/shot-text'
import CustomLink from './components/custom-link'

import sequence1 from './assets/images/sequence1-hayk-an-design.png'
import sequence2 from './assets/images/sequence2-hayk-an-design.png'
import sequence4 from './assets/images/sequence4-hayk-an-design.png'

import modulator3 from './assets/images/modulator3-hayk-an-design.png'
import modulator2 from './assets/images/modulator2-hayk-an-design.gif'
import modulator4 from './assets/images/modulator4-hayk-an-design.gif'

import travelperk10 from './assets/images/travelperk10-hayk-an-design.gif'
import travelperk11 from './assets/images/travelperk11-hayk-an-design.png'
import travelperk12 from './assets/images/travelperk12-hayk-an-design.png'
import travelperk13 from './assets/images/travelperk13-hayk-an-design.png'
import travelperk14 from './assets/images/travelperk14-hayk-an-design.png'
import travelperk15 from './assets/images/travelperk15-hayk-an-design.png'
import travelperk18 from './assets/images/travelperk18-hayk-an-design.png'
import travelperk19 from './assets/images/travelperk19-hayk-an-design.png'
import travelperk21 from './assets/images/travelperk21-hayk-an-design.png'
import travelperk22 from './assets/images/travelperk22-hayk-an-design.png'
import travelperk23 from './assets/images/travelperk23-hayk-an-design.png'
import travelperk24 from './assets/images/travelperk24-hayk-an-design.png'

import bicefal1 from './assets/images/bicefal1-hayk-an-design.png'
import bicefal2 from './assets/images/bicefal2-hayk-an-design.png'
import bicefal3 from './assets/images/bicefal3-hayk-an-design.png'

import scale1 from './assets/images/scale1-hayk-an-design.png'
import scale2 from './assets/images/scale2-hayk-an-design.png'
import scale3 from './assets/images/scale3-hayk-an-design.gif'
import scale4 from './assets/images/scale4-hayk-an-design.gif'
import scale5 from './assets/images/scale5-hayk-an-design.gif'
import scale6 from './assets/images/scale6-hayk-an-design.gif'

import wheel1 from './assets/images/wheel1-hayk-an-design.png'
import wheel2 from './assets/images/wheel2-hayk-an-design.gif'
import wheel3 from './assets/images/wheel3-hayk-an-design.gif'

import typeform2 from './assets/images/typeform2-hayk-an-design.png'
import typeform1 from './assets/images/typeform1-hayk-an-design.png'
import typeform3 from './assets/images/typeform3-hayk-an-design.png'
import typeform4 from './assets/images/typeform4-hayk-an-design.png'
import typeform5 from './assets/images/typeform5-hayk-an-design.png'
import typeform6 from './assets/images/typeform6-hayk-an-design.png'
import typeform7 from './assets/images/typeform7-hayk-an-design.png'
import typeform9 from './assets/images/typeform9-hayk-an-design.png'
import typeform10 from './assets/images/typeform10-hayk-an-design.png'
import typeform11 from './assets/images/typeform11-hayk-an-design.png'
import typeform12 from './assets/images/typeform12-hayk-an-design.png'
import typeform13 from './assets/images/typeform13-hayk-an-design.png'
import typeform14 from './assets/images/typeform14-hayk-an-design.png'

const projects = [
  {
    path: '/scale',
    title: 'Scale',
    link: 'https://hihayk.github.io/scale',
    subtitle: 'Playful color scales generator',
		content: (
      <div>
        <Shot src={scale1} />
        <Shot src={scale2} />
        <Shot src={scale6} />
        <Shot src={scale3} />
        <Shot src={scale4} />
        <Shot src={scale5} />
      </div>
    )
  },
	{
    path: '/sequence',
    title: 'Sequence',
    subtitle: 'Project manager',
    content: (
      <div>
        <Shot src={sequence1} />
			  <Shot src={sequence2} />
			  <Shot src={sequence4} />
      </div>
    )
  },
	{
    path: '/modulator',
    title: 'Modulator',
		subtitle: 'Spacing tool for design systems',
		description: 'I created Modulator to experiment with spacing in my design systems. Modulator helps designers define a base unit size and create preset spaces.',
    link: 'https://hihayk.github.io/modulator',
    content: (
      <div>
        <Shot src={modulator3} />
				<Shot src={modulator2} />
				<Shot src={modulator4} />
      </div>
    )
  },
	{
    path: '/typeform',
    title: 'Typeform',
    subtitle: 'Design system',
    contributors: [
      {
        githubUsername: 'terrencewwong',
        role: 'previous team member',
      },
      {
        githubUsername: 'jeremenichelli',
        role: 'current team member',
      }
    ],
		content: (
      <div>
        <Shot src={typeform1} />
        <Shot srcList={[ typeform12, typeform11, typeform13 ]} />
        
        <ShotText>
          <b>Visual guide:</b> documentation that helps designers to take elemental decisions like spacing, typograpghy, color, shadows and more.
        </ShotText>
        <Shot srcList={[ typeform2, typeform3, typeform4 ]} />

        <ShotText>
          Components are collected in Storybook with use cases and code snippets
        </ShotText>

			  <Shot src={typeform5} />
        <Shot src={typeform9} />
        <Shot src={typeform14} />

        <ShotText>
          Custom icon set
        </ShotText>

        <Shot src={typeform7} />

        <ShotText>
          Typeform product built with the design system
        </ShotText>
			  
        <Shot
          src={typeform6}
          caption={
            <span>Page built with the design system by <CustomLink href='https://github.com/josepmartins' target='_blank' size='sizeN1'>@josepmartins</CustomLink></span>
          }
        />
        <Shot
          src={typeform10}
          caption={
            <span>Page built with the design system by <CustomLink href='https://github.com/josepmartins' target='_blank' size='sizeN1'>@josepmartins</CustomLink></span>
          }
        />

      </div>
    ),
		inTeam: true,
		role: (
			<div>
				Create and mantain the design system
				<br />
				Develop the design system with React
			</div>
		),
  },
	{
    path: '/travelperk',
    title: 'Travelperk',
		subtitle: 'Design system and product design',
		inTeam: true,
		role: (
			<div>
				Create and mantain the design system
				<br />
				Develop the design system with React
				<br />
				Design the product
			</div>
		),
		content: (
      <div>        
        <Shot srcList={[ travelperk18, travelperk21, travelperk19, travelperk22, travelperk23, travelperk24 ]} rows={3} />
        
				<Shot src={travelperk10} />
				<Shot src={travelperk15} />
        
        <ShotText>
          Travelperk product built with the design system
        </ShotText>
				
        <Shot src={travelperk11} />
				
        <Shot srcList={[ travelperk12, travelperk13 ]} />

				<Shot src={travelperk14} />
      </div>
    )
  },
	{
    path: '/bicefal',
    title: 'Bicefal',
    subtitle: 'Web design and development',
    link: 'http://bicefal.org',
		content: (
      <div>
        <Shot src={bicefal2} noBg />
        <Shot src={bicefal1} noBg />
        <Shot src={bicefal3} noBg />
      </div>
    )
  },
	{
    path: '/wheel',
    title: 'Wheel',
    link: 'https://hihayk.github.io/wheel',
    subtitle: 'Playful color wheel generator',
		content: (
      <div>
        <Shot src={wheel1} />
        <Shot src={wheel2} />
        <Shot src={wheel3} />
      </div>
    )
  }
]

export default projects
