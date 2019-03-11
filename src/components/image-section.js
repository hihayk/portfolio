import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/variables'

const ImageSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (min-width: ${breakpoints.md}) {
    padding: 32px 0;
  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
	}
`

const ChildrenWrapper = styled.div`
  @media (min-width: ${breakpoints.md}) {
		padding-right: 32px;
	}
`

const Image = styled.img`
  padding-top: 32px;

  @media (max-width: ${breakpoints.md}) {
    padding-top: 16px;
  }
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
