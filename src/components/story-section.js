import React from 'react'
import styled from 'styled-components'
import { textSizesStyles, breakpoints, colors } from '../styles/variables'

export const themeStyles = {
  dark: {
    color: 'white',
    backgroundColor: '#282828',
  },
  light: {
    color: colors.body,
    backgroundColor: '#EAEAEA',
  },
}

const StorySectionWrapper = styled.div`
  padding: var(--pagePadding) var(--pagePadding) calc(var(--pagePadding) * 2) var(--pagePadding);
  
  color: ${props => themeStyles[props.theme].color};
  background-color: ${props => props.backgroundColor || themeStyles[props.theme].backgroundColor};

  h2,
  h3,
  h4,
  p {
    max-width: 664px;
  }

  h2 {
    margin: 0;
    padding-top: 64px;
    ${textSizesStyles.size2};

    @media (max-width: ${breakpoints.md}) {
      padding-top: 32px;
    }
  }
  
  h3 {
    margin: 0;
    padding-top: 32px;
    ${textSizesStyles.size1};

    @media (max-width: ${breakpoints.sm}) {
      padding-top: 24px;
    }
  }
  
  p {
    margin: 0;
    padding-top: 8px;
    opacity: 0.7;
  }
  
  figcaption {
    opacity: 0.5;
  }

  .TabsWrapper {
    padding-top: 32px;
    
    @media (max-width: ${breakpoints.md}) {
      padding-top: 16px;
    }
  }
`

StorySectionWrapper.defaultProps = {
  theme: 'dark',
}

const StoryContent = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`

export const StorySections = styled.div`
  
`

const StorySection = ({ children, section, backgroundColor, theme }) => (
  <StorySectionWrapper section={section} backgroundColor={backgroundColor} theme={theme}>
    <StoryContent>
      {children}
    </StoryContent>
  </StorySectionWrapper>
)

export default StorySection
