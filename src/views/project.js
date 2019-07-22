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

const SubtitleWrapper = styled.div`
  max-width: 664px;
`

const PageContainer = styled.div`
  padding: 0 var(--pagePadding);
`

const ProjectsDropdownTrigger = () => {
  return(
    <CustomLink lineOnHover>Projects /</CustomLink>
  )
}

let getVisibleUrl = (url) => {
	let finalUrl

	if (url && url.includes('http://')) {
		finalUrl = url.replace('http://', '')
	} else if (url && url.includes('https://')) {
		finalUrl = url.replace('https://', '')
	} else {
		finalUrl = url
	}

	return finalUrl
}

const Project = (props) => {
	return(
    <div>
  		<ProjectContainer>
  			<Header useCase='header' />
  			<Spacer bottom='calc(var(--pagePadding) * 4)'/>

        <Animate duration={0.8}>
    			<Container fullPage>
            <Spacer bottom='var(--space4)'>
      				<Spacer bottom='var(--space1)'>
      					<Dropdown triggerContent={<ProjectsDropdownTrigger />}>
      						<Spacer top='var(--space1)'>
      							<ProjectsMenu />
      						</Spacer>
      					</Dropdown>
      				</Spacer>

      				<Spacer bottom='var(--space2)'>
      					<Text size='size3' weight='bold' tag='h1'>
									{props.title}
      					</Text>
								<SubtitleWrapper>								
                <Text size='size3' dimmed tag='h2'>
      						{props.subtitle}
      					</Text>
								</SubtitleWrapper>
      				</Spacer>

      				<Container width='lg'>
      					<Spacer bottom='var(--space2)'>
      						<Text tag='p'>
      							{props.description}
      						</Text>
      					</Spacer>

                {props.role
                  ? <Spacer bottom='var(--space2)'>
        							<Text dimmed>my role{props.inTeam ? ' (in team)' : ''}:</Text>
        							<Text>{props.role}</Text>
        					</Spacer>
                  : null
								}



                {props.contributors && (
									<Text dimmed>main contributors:</Text>
								)}
								
								{props.contributors && props.contributors.map(( contributor ) => (
									<Spacer>
										<CustomLink target='_blank' href={'https://github.com/' + contributor.githubUsername}>@{contributor.githubUsername}</CustomLink> — <Text tag='span' dimmed>{contributor.role}</Text>
									</Spacer>
								))}

                {props.link
                  ? <CustomLink href={props.link} target='_blank' lineOnHover={false} withArrow>{getVisibleUrl(props.link)}</CustomLink>
                  : null
								}
								
								{props.links && (
									<div>
										{props.links.map((item, index) => (
											<div key={index}>
												<CustomLink href={item} target='_blank' lineOnHover={false} withArrow>{getVisibleUrl(item)}</CustomLink>
												<br />
											</div>
										))}
									</div>
								)}
      				</Container>
            </Spacer>
    			</Container>

					{props.children}
					
					<PageContainer>
						<Spacer top='var(--pagePadding)' bottom='var(--pagePadding)'>
							<ProjectsMenu />
						</Spacer>
					</PageContainer>

        </Animate>
  		</ProjectContainer>

			<Header notFixed hideName hideProjects contactLabel='Contact' aboutLabel='About' dimmed useCase='footer' />
    </div>
	)
}

export default Project
