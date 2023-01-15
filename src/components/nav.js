import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Text from './text';

const Root = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: var(--space3);
  justify-content: space-between;
  font-size: var(--size1);
	padding: var(--pagePadding);
	grid-template-columns: 1fr auto auto;

  a {
    width: fit-content;
  }
`;

const Nav = () => {
  return (
    <Root>
      <Link to="/">hayk an</Link>
      <Link to="/">projects</Link>
      <Link to="/about">A</Link>
    </Root>
  )
}

const SimpleNavRoot = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: var(--space1);
  justify-content: space-between;
  font-size: var(--size1);
`;


export const SimpleNav = () => {
  return (
    <SimpleNavRoot>
      <Text>projects</Text>
      <Link to='/about'>A</Link>
    </SimpleNavRoot>
  )
}

export default Nav
