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

const About = (props) => {
  return(
    <div>
      <Header />
      <Spacer bottom={32} smBottom={16} />

      <Animate duration={0.8}>
        <Container fullPage>
          <Text dimmed huge>
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

            <Spacer bottom={8} />
          </Container>

          <Spacer bottom={8} smBottom={4} />
        </Container>

        <Container fullPage>
          <Container width='lg'>
            <Container width='lg'>
              <Spacer bottom={8} />
              <Text size='size1' weight='bold' tag='h2'>
                About this website
              </Text>
              <Text size='size1' dimmed>
                This website is build with a small design system and developed with React, here are some of it's components:
              </Text>
            </Container>
          </Container>

          <Spacer bottom={8} />

          <Distribute vertical space={8}>
            <div>
              <Text dimmed>Text</Text>
              <Spacer bottom={1} />
              <Text size='size3'>40/44 — size3</Text>
              <Text size='size2'>32/40 — size2</Text>
              <Text size='size1'>24/32 — size1</Text>
              <Text size='size0'>18/24 — size0</Text>
              <Text size='sizeN1'>14/20 — sizeN1</Text>
            </div>

            <div>
              <Text dimmed>Dropdown</Text>
              <Spacer bottom={1} />
              <Dropdown
                triggerContent='Trigger'
              >
                Content
              </Dropdown>
            </div>

            <div>
              <Text dimmed>Link</Text>
              <Spacer bottom={1} />
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
              <Spacer bottom={1} />
              <Spread>
                <div>A</div>
                <div>B</div>
                <div>C</div>
              </Spread>
            </div>

            <div>
              <Text dimmed>Distribute</Text>
              <Spacer bottom={1} />
              <Distribute space={4}>
                <div>A</div>
                <div>B</div>
                <div>C</div>
              </Distribute>
            </div>

            <div>
              <Text dimmed>Spacer</Text>
              <Spacer bottom={1} />
              <Spacer right={2} inline>
                <span>A</span>
              </Spacer>
              <Spacer right={4} inline>
                <span>B</span>
              </Spacer>
              <Spacer right={8} inline>
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
