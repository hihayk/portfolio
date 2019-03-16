import React from 'react'
import Shot from '../components/shot'

import sequence1 from '../assets/images/sequence1-hayk-an-design.png'
import sequence3 from '../assets/images/sequence3-hayk-an-design.png'
import sequence4 from '../assets/images/sequence4-hayk-an-design.png'
import sequence5 from '../assets/images/sequence5-hayk-an-design.png'

import modulator3 from '../assets/images/modulator3-hayk-an-design.png'
import modulator2 from '../assets/images/modulator2-hayk-an-design.gif'
import modulator4 from '../assets/images/modulator4-hayk-an-design.gif'

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

import { travelperkData } from './travelperk-data'
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
	travelperkData,
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
