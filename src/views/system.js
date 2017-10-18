import React from 'react'
import Text from '../components/text'
import Distribute from '../components/distribute'
import Spacer from '../components/spacer'
import Container from '../components/container'
import Dropdown from '../components/dropdown'
import CustomLink from '../components/custom-link'
import Header from '../components/header'
import Animate from '../components/animate'

const System = () => {
  return(
    <div>
      <Header />
      <Spacer bottom={32} smBottom={16} />

      <Animate duration={0.8}>
        <Container fullPage>
          <Text size='size3' weight='bold'>
            About
          </Text>
        </Container>

        <Spacer bottom={8} />

        <Container fullPage>
          <Distribute vertical space={8}>
            <div>
              <Text size='size3'>40/48 — size3</Text>
              <Text size='size2'>32/40 — size2</Text>
              <Text size='size1'>24/32 — size1</Text>
              <Text size='size0'>18/24 — size0</Text>
              <Text size='sizeN1'>14/20 — sizeN1</Text>
            </div>

            <Dropdown
              triggerContent='Dropdown'
            >
              Content
            </Dropdown>

            <div>
              <CustomLink>Link on hover</CustomLink>
              <br />
              <CustomLink primary>Link on hover primary</CustomLink>
              <br />
              <CustomLink lineOnHover={false}>Link</CustomLink>
              <br />
              <CustomLink primary lineOnHover={false}>Link primary</CustomLink>
            </div>
          </Distribute>
        </Container>
      </Animate>
    </div>
  )
}

export default System
