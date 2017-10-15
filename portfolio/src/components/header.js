import React from 'react'
import CustomLink from '../components/custom-link'
import Spread from '../components/spread'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  padding: 56px 64px;
  display: flex;
  justify-content: space-between;
`
const MainSection = styled.div`

`
const MenuSection = styled.div`
  width: 50%;
`

const Header = () => {
  return(
    <HeaderWrapper>
      <MainSection>
        <Link to='/'>
          <CustomLink
            tag='span'
            lineOnHover
          >
            Hayk An
          </CustomLink>
        </Link>
      </MainSection>

      <MenuSection>
        <Spread>
          <Link to='/system'>
            <CustomLink
              tag='span'
              lineOnHover
            >
              Projects
            </CustomLink>
          </Link>
          <Link to='/system'>
            <CustomLink
              tag='span'
              lineOnHover
            >
              A
            </CustomLink>
          </Link>
          <Link to='/system'>
            <CustomLink
              tag='span'
              lineOnHover
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
