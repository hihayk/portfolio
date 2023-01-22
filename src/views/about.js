import React from 'react'
import Text from '../components/text'
import Distribute from '../components/distribute'
import Container from '../components/container'
import Nav from '../components/nav'
import Animate from '../components/animate'
import { textSizes } from '../styles/variables';

const letterSize = `calc(var(--size3) * 3)`

const About = () => {
  return(
    <div>
      <Nav style={{  marginBottom: 'calc(var(--pagePadding) * 2)' }}/>

      <Animate duration={0.8}>
        <Container fullPage className="mb-3">
          <Text size={letterSize}>
            A
          </Text>

          <Container width='lg'>
            <Text size='size1' dimmed>
              i design and develop modular products. constantly exploring ways to make design-dev process smoother. code is my favorite design tool.
            </Text>

            <Text size='size1' dimmed>
              my design work is heavily inspired by my music production machines.
            </Text>
          </Container>

        </Container>

        <Container fullPage>
        <Container width='lg' className="mb-3">
            <Container width='lg'>
              <Text size='size1' weight="bold">
                what i actually do
              </Text>
              <Text size='size1'>
                ❤︎ building minimal design systems for complex products
                ❤︎ obssessing over CSS 
                ❤︎ React.js
                ❤︎ building design tools
                ❤︎ wrestling with Figma to make it behave like CSS
              </Text>
            </Container>
          </Container>
        </Container>

        <Container fullPage className="mb-3">
          <Text size='size1' weight="bold">
            contact
          </Text>
          <Text size='size1'>
            say@hihayk.com
          </Text>
          <Container width='lg'>
            <Text size='size1'>
              <a href='https://github.com/hihayk' target='_blank'>github</a><br/>
              <a href='https://twitter.com/hihayk' target='_blank'>twitter</a><br/>
              <a href='https://www.linkedin.com/in/hihayk' target='_blank'>linkedin</a><br/>
              <a href='https://dribbble.com/hihayk' target='_blank'>dribbble</a><br/>
            </Text>
          </Container>
        </Container>

        <Container fullPage className="mt-4 mb-4">

          <Text size={letterSize} outline>
            M
          </Text>

          <Container width='lg' className="mb-3">
            <Container width='lg'>
              <Text size='size1' weight='bold' tag='h2'>
                the modules that form this website
              </Text>
              <Text size='size1' dimmed>
                this website is built with a small design system and developed with React, here are some of its components:
              </Text>
            </Container>
          </Container>

          <>
            <div className="mb-1">
              <Text size="size1">Space</Text>
            </div>
            <Distribute vertical space='var(--space1)'>
              {[1, 2, 3, 4, 5].map((space, index) => (
                <div key={index} style={{ background: 'currentColor', height: `var(--space${space})`, width: `var(--space${space})` }} />
              ))}
            </Distribute>

            <div className="mb-1 mt-3">
              <Text size="size1">Text</Text>
            </div>
            
            {Object.entries(textSizes).map(([key, value], index) => (
              <div className="mb-1" key={index}>
                <Text size={key}>{key}: {value.fontSize}</Text>
              </div>
            ))}
          </>
        </Container>
      </Animate>
      <Nav />
    </div>
  )
}

export default About
