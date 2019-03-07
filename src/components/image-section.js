import React from 'react'
import styled from 'styled-components'

const ImageSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 32px 0;

  @media (max-width: 1200px) {
    flex-direction: column;
	}
`

const ChildrenWrapper = styled.div`
  padding-right: 32px;
`

const Image = styled.img`
  padding-top: 32px;
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
