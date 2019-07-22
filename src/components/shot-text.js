import React from 'react'
import styled from 'styled-components'
import Text from './text'
import { breakpoints } from '../styles/variables'

const ShotTextWrapper = styled.div`
  padding: 0 128px;
  max-width: ${1280 + 128 * 2}px;
  margin: 0 auto var(--space4) auto;

  @media (max-width: ${breakpoints.md}) {
		max-width: auto;
    padding: 0 var(--space3);
    margin: 0 auto var(--space3) auto;
	}
`

const ShotTextContainer = styled.div`
  max-width: 320px;
`

const ShotText = ({ children }) => (
  <ShotTextWrapper>
    <ShotTextContainer>
      <Text>
        {children}
      </Text>
    </ShotTextContainer>
  </ShotTextWrapper>
)

export default ShotText
