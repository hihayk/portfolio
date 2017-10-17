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

import bicefal1 from './assets/images/bicefal1-hayk-an-design.png'
import bicefal2 from './assets/images/bicefal2-hayk-an-design.png'

const altAfter = ' - Hayk An'

const projects = [
	{
    path: '/unit',
    title: 'Unit',
		description: '8px grid',
		link: 'hihayk.github.io/unit',
    content: (
      <Shot src={unit1} alt={'Unit' + altAfter} />
    )
  },
	{
    path: '/modulator',
    title: 'Modulator',
		subtitle: 'Spacing tool for design systems',
    description: 'uscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
    link: 'hihayk.github.io/modulator',
    content: (
      <div>
        <Shot src={modulator3} alt={'Modulator' + altAfter} />
				<Shot src={modulator2} alt={'Modulator' + altAfter} />
				<Shot src={modulator4} alt={'Modulator' + altAfter}
					caption='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat'
				/>
      </div>
    )
  },
	{
    path: '/typeform',
    title: 'Typeform'
  },
	{
    path: '/travelperk',
    title: 'Travelperk',
		subtitle: 'Design system and product design and development',
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
      </div>
    )
  },
	{
    path: '/bicefal',
    title: 'Bicefal',
    subtitle: 'Festival web design and development',
		content: (
      <div>
        <Shot src={bicefal2} alt={'Bicefal' + altAfter} noBg />
        <Shot src={bicefal1} alt={'Bicefal' + altAfter} noBg />
      </div>
    )
  }
]

export default projects
