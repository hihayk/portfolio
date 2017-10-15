import React from 'react'
import styled, {keyframes} from 'styled-components'
import Text from '../components/text'
import Container from '../components/container'
import CustomLink from '../components/custom-link'
import Distribute from '../components/distribute'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import projects from '../data'
import { colors } from '../styles/variables'

const circleWidth = '240'

const MainContainer = styled.div`
	display: flex;

	@media (max-width: 640px) {
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

	@media (max-width: 1280px) {
		max-width: 480px;
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
const introSlide = keyframes`
	0% {
		transform: translateY(-32px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
	}
`
const Intro = styled.div`
	color: white;
	will-change: transform, opacity;
	animation: ${introSlide} 1s cubic-bezier(0,0,0,1);
`
const projectsSlide = keyframes`
	0% {
		transform: translateY(32px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
	}
`
const ProjectsWrapper = styled.div`
	will-change: transform, opacity;
	animation: ${projectsSlide} 1s cubic-bezier(0,0,0,1);
`

const Home = () => {
	return(
		<MainContainer>
			<MainSection>
				<Intro>
					<Text size='size3' weight='bold'>Hayk An</Text>
					<Text size='size3'>— design & code</Text>

					<Container top={2} width='lg'>
						<Text dimmed>
							Product designer focused on... dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
						</Text>
					</Container>
				</Intro>
			</MainSection>

			<ProjectsSection>

				<Header hideName noPadding large notFixed primary/>

				<ProjectsWrapper>
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
				</ProjectsWrapper>

				<Text size='size1'>&nbsp;</Text>

			</ProjectsSection>
		</MainContainer>
	)
}

export default Home
