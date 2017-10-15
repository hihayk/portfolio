import React from 'react'
import Shot from './components/shot'
import modulator1 from './assets/modulator-1.png'

const projects = [
	{
    path: '/unit',
    title: 'Unit'
  },
	{
    path: '/modulator',
    title: 'Modulator',
    description: 'uscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
    link: 'hihayk.github.io/modulator',
    content: (
      <div>
        <Shot src={modulator1} boxed />
        <br />
        <Shot src={modulator1} boxed />
      </div>
    )
  },
	{
    path: '/typeform',
    title: 'Typeform'
  },
	{
    path: '/travelperk',
    title: 'Travelperk'
  },
	{
    path: '/bicefal',
    title: 'Bicefal'
  }
]

export default projects
