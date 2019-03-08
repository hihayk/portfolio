import React from 'react'
import styled from 'styled-components'
import { textSizesStyles, textColorStyles } from '../styles/variables'

const StorySectionWrapper = styled.div`
  padding: 64px 64px 128px 64px;
  background-color: ${props => props.section === 'result' ? '#EAEAEA' : '#282828'};

  ${props => props.section === 'result' ? textColorStyles.lightThene : textColorStyles.darkTheme};
  
  @media (max-width: 1200px) {
    padding: 32px 32px 64px 32px;
	}
  

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

    @media (max-width: 1200px) {
      padding-top: 32px;
    }
  }
  
  h3 {
    margin: 0;
    padding-top: 32px;
    ${textSizesStyles.size1};

    @media (max-width: 1200px) {
      padding-top: 16px;
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
`

const StoryContent = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`

const StorySection = ({ children, section }) => (
  <StorySectionWrapper section={section}>
    <StoryContent>
      {children}
    </StoryContent>
  </StorySectionWrapper>
)

export default StorySection
