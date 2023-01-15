import React from 'react'
import Container from '../components/container'
import Text from '../components/text'
import Spacer from '../components/spacer'
import CustomLink from '../components/custom-link'
import Nav from '../components/nav'
import Animate from '../components/animate'
import styled from 'styled-components'
import { colors, textSizesStyles } from '../styles/variables'

const RoleTitle = styled.div`
  ${textSizesStyles.sizeN1};
  font-weight: bold;
  text-transform: uppercase;
`

const ProjectContainer = styled.div`
  min-height: 70vh;
`

const SubtitleWrapper = styled.div`
  max-width: 664px;
`

const ChildrenWrapper = styled.div`
  h2, h3 {
		font-weight: 700;
	}
`

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
				<Nav />
  			<Spacer bottom='calc(var(--pagePadding) * 2)'/>

        <Animate duration={0}>
    			<Container fullPage>
            <Spacer bottom='var(--space4)'>
      				<Spacer bottom='var(--space2)'>
      					<Text size='size3' weight='bold' tag='h1'>
									{props.title}
									{props.titleSuffix && (
										<Text tag="span" outline color={colors.body}>
											{' ' + props.titleSuffix}
										</Text>
									)}
      					</Text>
								<SubtitleWrapper>
                <Text size='size3' tag='h2'>
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

                {props.roleTags && (
                  <div>
                    <RoleTitle>Role</RoleTitle>
								    {props.roleTags.map((item, index) => (
                      <div key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {props.collaborators && (
                  <div>
                    <span>In collaboration with: </span>
                    {props.collaborators.map((item, index) => (
                      <CustomLink key={index} href={item.link}>
                        {item.name}
                      </CustomLink>
                    ))}
                  </div>
                )}

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

					<ChildrenWrapper>
						{props.children}
					</ChildrenWrapper>

        </Animate>
				<Nav />
  		</ProjectContainer>

    </div>
	)
}

export default Project
