import React from 'react'
import Shot from '../components/shot'
import ShotText from '../components/shot-text'

import sequence1 from '../assets/images/sequence1-hayk-an-design.png'
import sequence3 from '../assets/images/sequence3-hayk-an-design.png'
import sequence4 from '../assets/images/sequence4-hayk-an-design.png'
import sequence5 from '../assets/images/sequence5-hayk-an-design.png'

import modulator3 from '../assets/images/modulator3-hayk-an-design.png'
import modulator2 from '../assets/images/modulator2-hayk-an-design.gif'
import modulator4 from '../assets/images/modulator4-hayk-an-design.gif'

import travelperk10 from '../assets/images/travelperk10-hayk-an-design.gif'
import travelperk11 from '../assets/images/travelperk11-hayk-an-design.png'
import travelperk12 from '../assets/images/travelperk12-hayk-an-design.png'
import travelperk13 from '../assets/images/travelperk13-hayk-an-design.png'
import travelperk14 from '../assets/images/travelperk14-hayk-an-design.png'
import travelperk15 from '../assets/images/travelperk15-hayk-an-design.png'
import travelperk18 from '../assets/images/travelperk18-hayk-an-design.png'
import travelperk19 from '../assets/images/travelperk19-hayk-an-design.png'
import travelperk21 from '../assets/images/travelperk21-hayk-an-design.png'
import travelperk22 from '../assets/images/travelperk22-hayk-an-design.png'
import travelperk23 from '../assets/images/travelperk23-hayk-an-design.png'
import travelperk24 from '../assets/images/travelperk24-hayk-an-design.png'
import travelperk25 from '../assets/images/travelperk25-hayk-an-design.png'
import travelperk26 from '../assets/images/travelperk26-hayk-an-design.png'

import bicefal1 from '../assets/images/bicefal1-hayk-an-design.png'
import bicefal2 from '../assets/images/bicefal2-hayk-an-design.png'
import bicefal3 from '../assets/images/bicefal3-hayk-an-design.png'

import scale1 from '../assets/images/scale1-hayk-an-design.png'
import scale2 from '../assets/images/scale2-hayk-an-design.png'
import scale3 from '../assets/images/scale3-hayk-an-design.gif'
import scale4 from '../assets/images/scale4-hayk-an-design.gif'
import scale5 from '../assets/images/scale5-hayk-an-design.gif'
import scale6 from '../assets/images/scale6-hayk-an-design.gif'

import wheel1 from '../assets/images/wheel1-hayk-an-design.png'
import wheel2 from '../assets/images/wheel2-hayk-an-design.gif'
import wheel3 from '../assets/images/wheel3-hayk-an-design.gif'

import { typeformData } from './typeform-data'

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
			  <Shot srcList={[ sequence3, sequence5 ]} />
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
	typeformData,
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
        
				<Shot srcList={[travelperk10, travelperk15]} />
        
        <ShotText>
          Travelperk product built with the design system
        </ShotText>
				
        <Shot src={travelperk11} />
        <Shot src={travelperk26} />
        <Shot src={travelperk25} />
				
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
