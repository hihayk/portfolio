import React from "react";
import styled from "styled-components";
import Text from "../components/text";
import Container from "../components/container";
import CustomLink from "../components/custom-link";
import Animate from "../components/animate";
import { ProjectsSection } from "../components/projects-section";

const homeBreakpoint = "1080px";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;

  @media (max-width: ${homeBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

const MainSection = styled.div`
  position: relative;
  background: var(--c2);
  color: var(--c1);
  display: flex;
  align-items: flex-end;
  padding: var(--pagePadding);

  @media (min-width: ${homeBreakpoint}) {
    height: 100vh;
  }

  @media (max-width: ${homeBreakpoint}) {
    padding: calc(var(--circleWidth) + 96px) var(--pagePadding) var(--pagePadding)
      var(--pagePadding);
  }
`;

const Circle = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  position: absolute;
  width: var(--circleWidth);
  height: var(--circleWidth);
  border-radius: 50%;
  background-color: currentColor;

  @media (max-width: ${homeBreakpoint}) {
    top: 32px;
    bottom: auto;
  }
`

const Intro = styled.div`
  
`;

export const HomeLink = ({ href, title, titleSuffix  }) => (
  <CustomLink
    size="size3"
    lineOnHover
    tickLine
    color="var(--body)"
    target="_blank"
    href={href}
    tag="span"
  >
    {title}
    {titleSuffix && <Text outline color="var(--c1)" size="inherit" tag="span">{' ' + titleSuffix}</Text>}
  </CustomLink>
)

const Home = () => {

  const handleCircleClick = () => {
    document.body.dataset.theme = document.body.dataset.theme === 'minus' ? '' : 'minus';
  }
  
  return (
    <MainContainer>
      <MainSection data-theme='invert'>
        <Circle onClick={handleCircleClick}/>
        <Animate down>
          <Intro>
            <Text size="size3" tag="h1" weight="bold">
              <Text size="size3" tag="span">
                Hayk An
              </Text>
              <br />
              <Text size="size3" tag="span" outline color="var(--c2)">
                design & code
              </Text>
            </Text>

            <Container top={1} width="lg">
              <Text size="size0">
                Product designer focused on
                <br />
                modular design and development
                <br />
              </Text>
            </Container>
          </Intro>
        </Animate>
      </MainSection>

      <ProjectsSection onCircleClick={handleCircleClick} />
    </MainContainer>
  );
};

export default Home;
