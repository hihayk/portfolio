import React from 'react'
import styled from 'styled-components'
import Text from '../components/text'
import Container from '../components/container'
import CustomLink from '../components/custom-link'
import Header from '../components/header'
import Animate from '../components/animate'
import { Link } from 'react-router-dom'
import projects from '../data/data'
import { colors, breakpoints } from '../styles/variables'
import Spacer from '../components/spacer'

const circleWidth = '240'
const homeBreakpoint = '1080px'

const MainContainer = styled.div`
	display: flex;

	@media (max-width: ${homeBreakpoint}) {
		flex-direction: column;
	}
`
const MainSection = styled.div`
	position: relative;
	background-color: ${colors.red};
	flex-shrink: 0;
	flex-grow: 1;
	display: flex;
	align-items: flex-end;
	padding: 56px 64px;
	
	@media (min-width: ${homeBreakpoint}) {
		height: 100vh;
	}
	
	@media (min-width: ${breakpoints.lg}) {
		width: 50%;
	}
	
	@media (max-width: ${homeBreakpoint}) {
		padding: ${circleWidth * 1 + 96}px 32px 32px 32px;
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

		@media (max-width: ${homeBreakpoint}) {
			top: 32px;
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 56px 64px;
	
	@media (min-width: ${breakpoints.lg}) {
		width: 50%;
		flex-shrink: 0;
	}
	
	@media (max-width: ${homeBreakpoint}) {
		padding: 32px;
	}
	
	@media (min-width: ${homeBreakpoint}) {
		height: 100vh;
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

		@media (max-width: ${homeBreakpoint}) {
			bottom: 0;
			top: auto;
			left: 0;
			right: 0;
			width: ${circleWidth}px;
			height: ${circleWidth / 2}px;
			border-radius: ${circleWidth}px ${circleWidth}px 0 0;
		}
	}
`
const Intro = styled.div`
	color: white;
`

const ProjectsList = styled.div`
	padding: ${circleWidth / 2}px 0 ${circleWidth / 2 + 32}px 0;

	@media (min-width: ${homeBreakpoint}) {
		padding: 0 ${circleWidth / 2}px 0 0;
	}
`

const Home = () => {
	return(
		<MainContainer>
			<MainSection>
				<Animate down>
					<Intro>
						<Text size='size3' tag='h1'>
							<Text size='size3' tag='span' weight='bold'>Hayk An</Text>
							<br />
							— design & code
						</Text>

						<Container top={1} width='lg'>
							<Text size='size1'>
								Product designer focused on
								<br />
								modular design and development
								<br />
							</Text>
							<Spacer top={1}>
								<Text size='size0' dimmed>
									Previously I designed products and built
									<br />
									design systems for Typeform and Travelperk.
									<br />
									Currently I'm <CustomLink href='https://www.linkedin.com/in/hihayk' target='_blank' color='white'>open for new opportunities.</CustomLink>
								</Text>
							</Spacer>
						</Container>
					</Intro>
				</Animate>
			</MainSection>

			<ProjectsSection>

				<Header hideName disableProjects noPadding size='size1' notFixed primary/>

				<Animate>
					<ProjectsList id='projectLinksWrapper'>

						{projects.map((project, index) => (
							<Spacer bottom={projects.length === index + 1 ? 0 : 1}>
								{console.log(projects.length, index + 1)}
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
							</Spacer>
						))}

					</ProjectsList>
				</Animate>

				<Text size='size1'>&nbsp;</Text>

			</ProjectsSection>
		</MainContainer>
	)
}

export default Home
