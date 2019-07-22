import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/variables'

const ImageSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (min-width: ${breakpoints.md}) {
    padding: var(--space2) 0;
  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
	}
`

const ChildrenWrapper = styled.div`
  @media (min-width: ${breakpoints.md}) {
		padding-right: var(--space2);
	}
`

const Image = styled.img`
  padding-top: var(--space3);
`

const ImageSection = ({ children, imgSrc }) => (
  <ImageSectionWrapper>
    <ChildrenWrapper>
      {children}
    </ChildrenWrapper>
    <Image src={imgSrc} />
  </ImageSectionWrapper>
)

export default ImageSection
