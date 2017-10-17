import React from 'react'
import CustomLink from '../components/custom-link'
import Spread from '../components/spread'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  ${props => props.noPadding ? '' : 'padding: 56px 64px'};
  @media (max-width: 1200px) {
    ${props => props.noPadding ? '' : 'padding: 24px 32px'};
  }
  ${props => props.large ? 'font-size: 24px; line-height: 32px' : ''};
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
    <HeaderWrapper noPadding={props.noPadding} large={props.large} notFixed={props.notFixed}>
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
          <Link to='/system'>
            <CustomLink
              tag='span'
              lineOnHover
              primary={props.primary}
            >
              Projects
            </CustomLink>
          </Link>
          <Link to='/system'>
            <CustomLink
              tag='span'
              lineOnHover
              primary={props.primary}
            >
              A
            </CustomLink>
          </Link>
          <Link to='/system'>
            <CustomLink
              tag='span'
              lineOnHover
              primary={props.primary}
            >
              C
            </CustomLink>
          </Link>
        </Spread>
      </MenuSection>
    </HeaderWrapper>
  )
}

export default Header
