import React from 'react'
import Text from '../components/text'
import Distribute from '../components/distribute'
import Spread from '../components/spread'
import Spacer from '../components/spacer'
import Container from '../components/container'
import Dropdown from '../components/dropdown'
import CustomLink from '../components/custom-link'
import Header from '../components/header'
import Animate from '../components/animate'
import { textSizes } from '../styles/variables';

const About = (props) => {
  return(
    <div>
      <Header useCase='header' />
      <Spacer bottom='calc(var(--pagePadding) * 4)'/>

      <Animate duration={0.8}>
        <Container fullPage>
          <Text size='huge'>
            A
          </Text>

          <Container width='lg'>
            <Text size='size3' weight='bold' tag='h1' >
              Hey there, I'm Hayk
            </Text>
            <Text size='size3'>
              Designer and music producer
            </Text>
            <Text size='size3' dimmed >
              I design and develop modular products
            </Text>

          </Container>

        </Container>

        <Spacer bottom='var(--space3)' />

        <Container fullPage>
          <Container width='lg'>
            <Container width='lg'>
              <Text size='size1' weight='bold' tag='h2'>
                Also...
              </Text>
              <Text size='size1' dimmed>
                occasionally I teach front-end
              </Text>
              <Text size='size1' dimmed>
                and talk about design
              </Text>
            </Container>
          </Container>

          <Spacer bottom='var(--space4)' />

          <Text size='huge'>
            A/m
          </Text>

          <Container width='lg'>
            <Container width='lg'>
              <Text size='size1' weight='bold' tag='h2'>
                The modules that form this website
              </Text>
              <Text size='size1' dimmed>
                This website is built with a small design system and developed with React, here are some of its components:
              </Text>
            </Container>
          </Container>

          <Spacer bottom='var(--space3)' />


          <Distribute vertical space='var(--space4)'>
            <Distribute vertical space='var(--space1)'>
              <div style={{ background: 'pink', height: 'var(--space1)', width: 'var(--space1)' }} />
              <div style={{ background: 'pink', height: 'var(--space2)', width: 'var(--space2)' }} />
              <div style={{ background: 'pink', height: 'var(--space3)', width: 'var(--space3)' }} />
              <div style={{ background: 'pink', height: 'var(--space4)', width: 'var(--space4)' }} />
              <div style={{ background: 'pink', height: 'var(--space5)', width: 'var(--space5)' }} />
            </Distribute>

            <div>
              <Text dimmed>Text</Text>
              <Spacer bottom='var(--space1)' />
              
              {Object.entries(textSizes).map(([key, value], index) => (
                <Spacer bottom='var(--space1)' key={index}>
                  <Text size={key}>{key}: {value.fontSize}</Text>
                </Spacer>
              ))}
            </div>

            <div>
              <Text dimmed>Dropdown</Text>
              <Spacer bottom='var(--space1)' />
              <Dropdown
                triggerContent='Trigger'
              >
                Content
              </Dropdown>
            </div>

            <div>
              <Text dimmed>Link</Text>
              <Spacer bottom='var(--space1)' />
              <CustomLink>Link on hover</CustomLink>
              <br />
              <CustomLink primary>Link on hover primary</CustomLink>
              <br />
              <CustomLink lineOnHover={false}>Link</CustomLink>
              <br />
              <CustomLink primary lineOnHover={false}>Link primary</CustomLink>
            </div>

            <div>
              <Text dimmed>Spread</Text>
              <Spacer bottom='var(--space1)' />
              <Spread>
                <div>A</div>
                <div>B</div>
                <div>C</div>
              </Spread>
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
    </div>
  )
}

export default About
