import React from 'react'
import styled from 'styled-components'
import Text from '../components/text'
import Container from '../components/container'
import CustomLink from '../components/custom-link'
import Distribute from '../components/distribute'
import Header from '../components/header'
import Animate from '../components/animate'
import { Link } from 'react-router-dom'
import projects from '../data'
import { colors } from '../styles/variables'

const circleWidth = '240'

const MainContainer = styled.div`
	display: flex;

	@media (max-width: 1150px) {
		flex-direction: column;
	}
`
const MainSection = styled.div`
	position: relative;
	background-color: ${colors.red};
	height: 100vh;
	flex-shrink: 0;
	flex-grow: 1;
	display: flex;
	align-items: flex-end;
	padding: 56px 64px;

	@media (max-width: 1200px) {
		padding: 32px;
	}

	&:after {
		content: '';
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		display: block;
		position: absolute;
		width: ${circleWidth}px;
		height: ${circleWidth}px;
		border-radius: 50%;
		background-color: white;

		@media (max-width: 720px) {
			top: 56px;
			bottom: auto;
		}
	}

	*::-moz-selection {
  	color: white;
  	background-color: white;
  }
	*::selection {
		color: white;
		background-color: white;
	}
`
const ProjectsSection = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 56px 64px;
	width: 50%;

	@media (max-width: 1200px) {
		padding: 24px 32px;
		max-width: 480px;
	}

	@media (max-width: 1150px) {
		width: 100%;
		max-width: 100%;
	}

	&:after {
		content: '';
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		display: block;
		position: absolute;
		width: ${circleWidth / 2}px;
		height: ${circleWidth}px;
		border-radius: ${circleWidth}px 0 0 ${circleWidth}px;
		background-color: ${colors.red};
	}
`
const Intro = styled.div`
	color: white;
`

const Home = () => {
	return(
		<MainContainer>
			<MainSection>
				<Animate down>
					<Intro>
						<Text size='size3' weight='bold'>Hayk An</Text>
						<Text size='size3'>— design & code</Text>

						<Container top={2} width='lg'>
							<Text dimmed>
								Product designer focused on... dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
							</Text>
						</Container>
					</Intro>
				</Animate>
			</MainSection>

			<ProjectsSection>

				<Header hideName disableProjects noPadding size='size1' notFixed primary/>

				<Animate>
					<Distribute space={1} vertical>

						{projects.map((project, index) => (
							<Link to={project.path} key={index}>
								<CustomLink
									size='size3'
									tag='span'
									lineOnHover
									tickLine
									primary
							  >
									{project.title}
								</CustomLink>
							</Link>
						))}

					</Distribute>
				</Animate>

				<Text size='size1'>&nbsp;</Text>

			</ProjectsSection>
		</MainContainer>
	)
}

export default Home
