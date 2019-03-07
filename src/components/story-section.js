import React from 'react'
import styled from 'styled-components'


const StorySectionWrapper = styled.div`
  padding: 64px 64px 128px 64px;
  background-color: ${props => props.section === 'result' ? '#EAEAEA' : '#282828'};

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
    margin: 64px 0 0 0;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.04em;
    color: ${props => props.section === 'result' ? 'rgba(40, 40, 40, 1)' : 'rgba(255, 255, 255, 1)'};
  }
  
  h3 {
    margin: 32px 0 0 0;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.04em;
    color: ${props => props.section === 'result' ? 'rgba(40, 40, 40, 1)' : 'rgba(255, 255, 255, 1)'};
  }
  
  h4 {
    margin: 32px 0 0 0;
    color: rgba(255, 255, 255, 0.8);
  }
  
  p {
    margin: 8px 0 0 0;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.section === 'result' ? 'rgba(40, 40, 40, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
  }
  
  figcaption {
    color: ${props => props.section === 'result' ? 'rgba(40, 40, 40, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
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
