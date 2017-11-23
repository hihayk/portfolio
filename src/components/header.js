import React from 'react'
import CustomLink from '../components/custom-link'
import Spread from '../components/spread'
import ProjectsMenu from '../components/projects-menu'
import Dropdown from '../components/dropdown'
import Text from '../components/text'
import Spacer from '../components/spacer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  ${props => props.noPadding ? '' : 'padding: 56px 64px'};
  @media (max-width: 1200px) {
    ${props => props.noPadding ? '' : 'padding: 24px 32px'};
  }
  /*${props => props.large ? 'font-size: 24px; line-height: 32px' : ''};*/
  ${props => props.notFixed ? '' : 'position: fixed'};
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 80;
`
const MainSection = styled.div`
  flex-grow: 1;
`
const MenuSection = styled.div`
  flex-grow: 1;
`

const Header = (props) => {
  return(
    <HeaderWrapper noPadding={props.noPadding} size={props.size} notFixed={props.notFixed}>
      {props.hideName
        ? null
        : <MainSection>
          <Link to='/'>
            <CustomLink
              tag='span'
              lineOnHover
              primary={props.primary}
            >
              Hayk An
            </CustomLink>
          </Link>
        </MainSection>
      }

      <MenuSection>
        <Spread>

          {!props.hideProjects
            ? <div>
              {props.disableProjects
                ? <Text primary={props.primary} size={props.size}>Projects</Text>
                : <Dropdown triggerContent={(<CustomLink tag='span' primary={props.primary} dimmed={props.dimmed}>{props.projectsLabel}</CustomLink>)}>
                  <Spacer top={1}>
                    <ProjectsMenu />
                  </Spacer>
                </Dropdown>
              }
            </div>
            : null
          }

          <Link to='/about'>
            <CustomLink
              tag='span'
              primary={props.primary}
              size={props.size}
              dimmed={props.dimmed}
            >
              {props.aboutLabel}
            </CustomLink>
          </Link>
          <Link to='/contact'>
            <CustomLink
              tag='span'
              primary={props.primary}
              size={props.size}
              dimmed={props.dimmed}
            >
              {props.contactLabel}
            </CustomLink>
          </Link>
        </Spread>
      </MenuSection>
    </HeaderWrapper>
  )
}

Header.defaultProps = {
  projectsLabel: 'Projects',
  aboutLabel: 'A',
  contactLabel: 'C'
}

export default Header
