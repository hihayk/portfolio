import React from "react"
import styled from "styled-components"


const Root = styled.div`
  margin: 0 auto;
  
  ${({hasFullWidth}) => !hasFullWidth && `
    padding: 0 var(--pagePadding);
    max-width: calc(1280px + var(--pagePadding));
  `};
`

const SubSection = ({ hasFullWidth, children }) => (
  <Root hasFullWidth={hasFullWidth}>
    {children}
  </Root>
)

export default SubSection