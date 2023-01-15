import React from "react";
import styled from "styled-components";
import Text from "../components/text";
import Animate from "../components/animate";
import { Link } from "react-router-dom";
import projects from "../data/data";
import { SimpleNav } from "./header";

const homeBreakpoint = "1080px";

const ProjectsList = styled.div`
  padding: calc(var(--circleWidth) / 2) 0 calc(var(--circleWidth) / 2 + 32px) 0;
  font-size: var(--size3);
  color: var(--c1);
  display: grid;
  gap: var(--space1);

  @media (min-width: ${homeBreakpoint}) {
    padding: 0 calc(var(--circleWidth) / 2) 0 0;
  }
`;

const Root = styled.div`
  position: relative;
  display: grid;
  padding: var(--pagePadding);
  background: var(--c2);
  
  @media (min-width: ${homeBreakpoint}) {
    height: 100vh;
  }
`;

const SemiCircle = styled.div`
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  position: absolute;
  width: calc(var(--circleWidth) / 2);
  height: var(--circleWidth);
  border-radius: var(--circleWidth) 0 0 var(--circleWidth);
  background-color: var(--c1);
  z-index: 1;

  @media (max-width: ${homeBreakpoint}) {
    bottom: 0;
    top: auto;
    left: 0;
    right: 0;
    width: var(--circleWidth);
    height: calc(var(--circleWidth) / 2);
    border-radius: var(--circleWidth) var(--circleWidth) 0 0;
  }
`

const ProjectLink = ({title, titleSuffix, to, href}) => {
  if(href) return (
    <a href={href} target="_blank">{title}</a>
  )
  if(to) return (
    <Link to={to}>
      {title}
      {titleSuffix && <Text outline color="var(--c1)" size="inherit" tag="span">{' ' + titleSuffix}</Text>}
    </Link>
  )
}

export const ProjectsSection = ({onCircleClick}) => {
  return (
    <Root>
      <SemiCircle onClick={onCircleClick}/>
      <SimpleNav />

      <Animate>
        <ProjectsList id="projectLinksWrapper">
          <ProjectLink title="Shaper" href="https://hihayk.github.io/shaper" />
          {projects.map((project, index) => (
            <ProjectLink
              key={index}
              to={project.path} 
              title={project.title}
              titleSuffix={project.titleSuffix}
            />
          ))}
          <ProjectLink title="Matter" href="https://hihayk.github.io/matter" />
          <ProjectLink title="Scale" href="https://hihayk.github.io/scale" />
          <ProjectLink title="More" href="https://hihayk.github.io/" />
        </ProjectsList>
      </Animate>

    </Root>
  );
}