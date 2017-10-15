import React from 'react'
import Shot from './components/shot'
import ShotGroup from './components/shot-group'

import unit1 from './assets/unit1-hayk-an-design.png'
import modulator1 from './assets/modulator1-hayk-an-design.png'
import travelperk2 from './assets/travelperk2-hayk-an-design.png'
import travelperk6 from './assets/travelperk6-hayk-an-design.png'
import travelperk7 from './assets/travelperk7-hayk-an-design.png'
import travelperk8 from './assets/travelperk8-hayk-an-design.png'
import travelperk9 from './assets/travelperk9-hayk-an-design.png'
import travelperk10 from './assets/travelperk10-hayk-an-design.gif'
import travelperk11 from './assets/travelperk11-hayk-an-design.png'

import bicefal1 from './assets/bicefal1-hayk-an-design.png'
import bicefal2 from './assets/bicefal2-hayk-an-design.png'

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
        <Shot src={modulator1} alt={'Modulator' + altAfter} />
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
        <Shot src={travelperk2} alt={'Travelperk' + altAfter} noShadow />
				<ShotGroup spaced>
					<Shot src={travelperk6} alt={'Travelperk' + altAfter} spaced={false} boxed={false} />
					<Shot src={travelperk8} alt={'Travelperk' + altAfter} spaced={false} boxed={false} />
				</ShotGroup>
				<ShotGroup spaced>
					<Shot src={travelperk7} alt={'Travelperk' + altAfter} spaced={false} boxed={false} />
					<Shot src={travelperk9} alt={'Travelperk' + altAfter} spaced={false} boxed={false} />
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
