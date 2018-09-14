import React from 'react'
import projects from '../data'
import CustomLink from '../components/custom-link'
import Text from '../components/text'
import Spacer from '../components/spacer'
import Distribute from '../components/distribute'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuWrapper = styled.div`
`

const ProjectsMenu = () => {
  return(
    <MenuWrapper>
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

      <CustomLink href='http://versalversal.com/' target='_blank'>Versal</CustomLink>
      <br />
      <CustomLink href='http://elenaguilar.com/' target='_blank'>Elena Aguilar</CustomLink>
      <br />
      <CustomLink href='https://hihayk.github.io/distribute/' target='_blank'>Distribute</CustomLink>
      <br />
      <CustomLink href='http://css2sass.herokuapp.com/' target='_blank'>CSS2SASS</CustomLink>
      <br />
      <CustomLink href='http://dromnu.com/' target='_blank'>Drömnu</CustomLink>
      <br />
      <CustomLink href='https://hihayk.github.io/granularsynths/' target='_blank'>Granular Synths</CustomLink>
      <br />
      <CustomLink href='https://hihayk.github.io/ride/' target='_blank'>Ride</CustomLink>
    </MenuWrapper>
  )
}

export default ProjectsMenu
