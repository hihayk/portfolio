import React from 'react'
import Text from '../components/text'
import Distribute from '../components/distribute'
import Spacer from '../components/spacer'
import Container from '../components/container'
import Nav from '../components/nav'
import Animate from '../components/animate'
import { textSizes } from '../styles/variables';

const About = () => {
  return(
    <div>
      <Nav />
      <Spacer bottom='calc(var(--pagePadding) * 2)'/>

      <Animate duration={0.8}>
        <Container fullPage>
          <Text size='huge'>
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
        
        <Spacer bottom='var(--space3)' />

        <Container fullPage>
        <Container width='lg'>
            <Container width='lg'>
              <Text size='size1' weight="bold">
                what i actually do
              </Text>
              <Text size='size1'>
                ❤ building minimal design systems for complex products
                ❤ obssessing over CSS 
                ❤ React.js
                ❤ building design tools
                ❤ wrestling with Figma to make it behave like CSS
              </Text>
            </Container>
          </Container>
        </Container>

        <Spacer bottom='var(--space3)' />

        <Container fullPage>
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


        <Spacer bottom='var(--space3)' />

        <Container fullPage>
          

          

          <Text size='huge' outline>
            M
          </Text>

          <Container width='lg'>
            <Container width='lg'>
              <Text size='size1' weight='bold' tag='h2'>
                the modules that form this website
              </Text>
              <Text size='size1' dimmed>
                this website is built with a small design system and developed with React, here are some of its components:
              </Text>
            </Container>
          </Container>

          <Spacer bottom='var(--space3)' />


          <Distribute vertical space='var(--space4)'>
            <Text size="size1">Text</Text>
            <Distribute vertical space='var(--space1)'>
              {[1, 2, 3, 4, 5].map((space, index) => (
                <div key={index} style={{ background: 'currentColor', height: `var(--space${space})`, width: `var(--space${space})` }} />
              ))}
            </Distribute>

            <div>
              <Text>Text</Text>
              <Spacer bottom='var(--space1)' />
              
              {Object.entries(textSizes).map(([key, value], index) => (
                <Spacer bottom='var(--space1)' key={index}>
                  <Text size={key}>{key}: {value.fontSize}</Text>
                </Spacer>
              ))}
            </div>

            <div>
              <Text dimmed>Distribute</Text>
              <Spacer bottom='var(--space1)' />
              <Distribute space='var(--space3)'>
                <div>A</div>
                <div>B</div>
                <div>C</div>
              </Distribute>
            </div>

            <div>
              <Text dimmed>Spacer</Text>
              <Spacer bottom='var(--space1)' />
              <Spacer right='var(--space2)' inline>
                <span>A</span>
              </Spacer>
              <Spacer right='var(--space3)' inline>
                <span>B</span>
              </Spacer>
              <Spacer right='var(--space4)' inline>
                <span>C</span>
              </Spacer>
              <Spacer inline>
                <span>D</span>
              </Spacer>
            </div>
          </Distribute>
        </Container>
      </Animate>
      <Nav />
    </div>
  )
}

export default About
