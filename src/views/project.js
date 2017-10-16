import React from 'react'
import Container from '../components/container'
import Text from '../components/text'
import Spacer from '../components/spacer'
import CustomLink from '../components/custom-link'
import ProjectsMenu from '../components/projects-menu'
import Dropdown from '../components/dropdown'
import Header from '../components/header'
import Animate from '../components/animate'
import styled, {keyframes} from 'styled-components'

const ProjectsDropdownTrigger = () => {
  return(
    <CustomLink lineOnHover>Projects /</CustomLink>
  )
}

const Project = (props) => {
	return(
		<Spacer bottom={16}>
			<Header />
			<Spacer bottom={32} />

      <Animate duration={0.8}>
  			<Container fullPage>
  				<Spacer bottom={1}>
  					<Dropdown triggerContent={<ProjectsDropdownTrigger />}>
  						<Spacer top={1}>
  							<ProjectsMenu />
  						</Spacer>
  					</Dropdown>
  				</Spacer>

  				<Spacer bottom={2}>
  					<Text size='size3' weight='bold'>
  						{props.title}
  					</Text>
            <Text size='size3' dimmed>
  						{props.subtitle}
  					</Text>
  				</Spacer>

  				<Container width='lg'>
  					<Spacer bottom={4}>
  						<Text>
  							{props.description}
  						</Text>
  					</Spacer>

  					<Spacer bottom={16}>
  						<CustomLink href={'https://' + props.link} target='_blank' lineOnHover={false}>{props.link}</CustomLink>
  					</Spacer>
  				</Container>
  			</Container>

  			{props.children}
      </Animate>
		</Spacer>
	)
}

export default Project
