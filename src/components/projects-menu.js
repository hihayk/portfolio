import React from 'react'
import projects from '../data/data'
import CustomLink from '../components/custom-link'
import Text from '../components/text'
import Spacer from '../components/spacer'
import Distribute from '../components/distribute'
import { Link } from 'react-router-dom'
import { HomeLink } from '../views/home'

const otherProjects = [
  {
    url: `https://hihayk.github.io/poco/`,
    title: 'Poco'
  },
  {
    url: `http://versalversal.com/`,
    title: 'Versal'
  },
  {
    url: `http://elenaguilar.com/`,
    title: 'Elena Aguilar'
  },
  {
    url: `https://hihayk.github.io/distribute/`,
    title: 'Distribute'
  },
  {
    url: `http://css2sass.herokuapp.com/`,
    title: 'CSS2SASS'
  },
  {
    url: `http://dromnu.space/`,
    title: 'Drömnu'
  },
  {
    url: `https://hihayk.github.io/granularsynths/`,
    title: 'Granular Synths'
  },
  {
    url: `https://hihayk.github.io/ride/`,
    title: 'Ride'
  },
]

const ProjectsMenu = () => {
  return(
    <div>
      <Distribute space={1} vertical>

        {projects.map((project, index) => (
          <Link to={project.path} key={index}>
            <CustomLink
              size='size3'
              tag='span'
              tickLine
            >
              {project.title}
            </CustomLink>
          </Link>
        ))}

      </Distribute>

      <Spacer top={2} bottom={1}>
        <Text dimmed>Other</Text>
      </Spacer>

      {otherProjects.map((item, index) => (
        <div key={index}>
          <CustomLink href={item.url} target='_blank'>{item.title}</CustomLink>
        </div>
      ))}
    </div>
  )
}

export default ProjectsMenu
