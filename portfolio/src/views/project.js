import React from 'react'
import Container from '../components/container'
import Text from '../components/text'
import Spacer from '../components/spacer'
import CustomLink from '../components/custom-link'
import Menu from '../components/menu'
import Dropdown from '../components/dropdown'
import Header from '../components/header'

const ProjectsDropdownTrigger = () => {
  return(
    <CustomLink lineOnHover>Projects /</CustomLink>
  )
}

const Project = (props) => {
	return(
		<div>
			<Header />

			<Container contain>
				<Spacer bottom={1} top={16}>
					<Dropdown triggerContent={<ProjectsDropdownTrigger />}>
						<Spacer top={1}>
							<Menu />
						</Spacer>
					</Dropdown>
				</Spacer>

				<Spacer bottom={2}>
					<Text size='size3' weight='bold'>
						{props.title}
					</Text>
				</Spacer>

				<Container width='lg'>
					<Spacer bottom={4}>
						<Text>
							{props.description}
						</Text>
					</Spacer>

					<CustomLink href={'https://' + props.link} target='_blank'>{props.link}</CustomLink>
				</Container>
			</Container>

			<br />
			<br />
			<br />
			<br />

			{props.children}
		</div>
	)
}

export default Project
