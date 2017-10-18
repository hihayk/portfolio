import React from 'react'
import projects from '../data'
import CustomLink from '../components/custom-link'
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
    </MenuWrapper>
  )
}

export default ProjectsMenu
