import React from 'react'
import Container from '../components/container'
import Text from '../components/text'
import Spacer from '../components/spacer'
import CustomLink from '../components/custom-link'
import ProjectsMenu from '../components/projects-menu'
import Dropdown from '../components/dropdown'
import Header from '../components/header'
import Animate from '../components/animate'
import styled from 'styled-components'

const ProjectContainer = styled.div`
  min-height: 70vh;
`

const ProjectsDropdownTrigger = () => {
  return(
    <CustomLink lineOnHover>Projects /</CustomLink>
  )
}

const Project = (props) => {

  let visibleUrl
  if (props.link && props.link.includes('http://')) {
    visibleUrl = props.link.replace('http://', '')
  } else if (props.link && props.link.includes('https://')) {
    visibleUrl = props.link.replace('https://', '')
  } else {
    visibleUrl = props.link
  }

	return(
    <div>
  		<ProjectContainer>
  			<Header />
  			<Spacer bottom={32} smBottom={16} />

        <Animate duration={0.8}>
    			<Container fullPage>
            <Spacer bottom={16} smBottom={8}>
      				<Spacer bottom={1}>
      					<Dropdown triggerContent={<ProjectsDropdownTrigger />}>
      						<Spacer top={1}>
      							<ProjectsMenu />
      						</Spacer>
      					</Dropdown>
      				</Spacer>

      				<Spacer bottom={2}>
      					<Text size='size3' weight='bold' tag='h1'>
      						{props.title}
      					</Text>
                <Text size='size3' dimmed tag='h2'>
      						{props.subtitle}
      					</Text>
      				</Spacer>

      				<Container width='lg'>
      					<Spacer bottom={4}>
      						<Text tag='p'>
      							{props.description}
      						</Text>
      					</Spacer>

                {props.role
                  ? <Spacer bottom={2}>
        						<Text dimmed>my role:</Text>
        						<Text>{props.role}</Text>
        					</Spacer>
                  : null
                }
                {props.link
                  ? <CustomLink href={props.link} target='_blank' lineOnHover={false} withArrow>{visibleUrl}</CustomLink>
                  : null
                }
      				</Container>
            </Spacer>
    			</Container>

    			{props.children}

        </Animate>
  		</ProjectContainer>

      <Header notFixed hideName hideProjects contactLabel='Contact' aboutLabel='About' dimmed />
    </div>
	)
}

export default Project
