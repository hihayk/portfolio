import React from 'react'
import Shot from './components/shot'
import ShotGroup from './components/shot-group'

import unit1 from './assets/images/unit1-hayk-an-design.png'

import modulator3 from './assets/images/modulator3-hayk-an-design.png'
import modulator2 from './assets/images/modulator2-hayk-an-design.gif'
import modulator4 from './assets/images/modulator4-hayk-an-design.gif'

import travelperk2 from './assets/images/travelperk2-hayk-an-design.png'
import travelperk6 from './assets/images/travelperk6-hayk-an-design.png'
import travelperk7 from './assets/images/travelperk7-hayk-an-design.png'
import travelperk8 from './assets/images/travelperk8-hayk-an-design.png'
import travelperk9 from './assets/images/travelperk9-hayk-an-design.png'
import travelperk10 from './assets/images/travelperk10-hayk-an-design.gif'
import travelperk11 from './assets/images/travelperk11-hayk-an-design.png'
import travelperk12 from './assets/images/travelperk12-hayk-an-design.png'
import travelperk13 from './assets/images/travelperk13-hayk-an-design.png'
import travelperk14 from './assets/images/travelperk14-hayk-an-design.png'

import bicefal1 from './assets/images/bicefal1-hayk-an-design.png'
import bicefal2 from './assets/images/bicefal2-hayk-an-design.png'
import bicefal3 from './assets/images/bicefal3-hayk-an-design.png'

import catWip from './assets/images/cat-wip2.gif'

const altAfter = ' - Hayk An'

const projects = [
	{
    path: '/unit',
    title: 'Unit',
    subtitle: 'Minimal design system',
		link: 'https://hihayk.github.io/unit',
    content: (
			<Shot src={unit1} alt={'Unit' + altAfter} />
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
        <Shot src={modulator3} alt={'Modulator' + altAfter} />
				<Shot src={modulator2} alt={'Modulator' + altAfter} />
				<Shot src={modulator4} alt={'Modulator' + altAfter} />
      </div>
    )
  },
	{
    path: '/typeform',
    title: 'Typeform',
    subtitle: 'Design system — work in progress',
		description: 'Currently building a design system for Typeform',
		content: (
			<Shot src={catWip} alt='wip' style={{maxWidth: 200}} />
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
        <Shot src={travelperk2} alt={'Travelperk' + altAfter} noShadow boxedBg='#f2f2f2' />
				<ShotGroup spaced>
					<Shot src={travelperk6} alt={'Travelperk' + altAfter} boxed={false} />
					<Shot src={travelperk8} alt={'Travelperk' + altAfter} boxed={false} />
				</ShotGroup>
				<ShotGroup spaced>
					<Shot src={travelperk7} alt={'Travelperk' + altAfter} boxed={false} />
					<Shot src={travelperk9} alt={'Travelperk' + altAfter} boxed={false} />
				</ShotGroup>
				<Shot src={travelperk10} alt={'Travelperk' + altAfter} />
				<Shot src={travelperk11} alt={'Travelperk' + altAfter} />
				<ShotGroup spaced>
					<Shot src={travelperk12} alt={'Travelperk' + altAfter} boxed={false} />
					<Shot src={travelperk13} alt={'Travelperk' + altAfter} boxed={false} />
				</ShotGroup>
				<Shot src={travelperk14} alt={'Travelperk' + altAfter} />
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
        <Shot src={bicefal2} alt={'Bicefal' + altAfter} noBg />
        <Shot src={bicefal1} alt={'Bicefal' + altAfter} noBg />
        <Shot src={bicefal3} alt={'Bicefal' + altAfter} noBg />
      </div>
    )
  }
]

export default projects
