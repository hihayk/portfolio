import React from 'react'
import styled from 'styled-components'
import Text from './text'
import { breakpoints } from '../styles/variables'

const ShotTextWrapper = styled.div`
  padding: 0 128px;
  max-width: ${1280 + 128 * 2}px;
  margin: 0 auto 64px auto;

  @media (max-width: ${breakpoints.md}) {
		max-width: auto;
    padding: 0 32px;
    margin: 0 auto 32px auto;
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
