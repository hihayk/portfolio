import React from 'react'
import Text from '../components/text'
import CustomLink from '../components/custom-link'
import Spacer from '../components/spacer'
import Container from '../components/container'
import Animate from '../components/animate'
import Header from '../components/header'

const System = () => {
  return(
    <div>
      <Header />
      <Spacer bottom={32} smBottom={16} />

      <Animate duration={0.8}>
        <Container fullPage>
          <Text dimmed huge>
            C
          </Text>

          <Text size='size3' weight='bold' tag='h1'>
            Say hi
          </Text>
        </Container>


        <Container fullPage>
          <Text size='size3'>
            say@hihayk.com
          </Text>
        </Container>

        <Container fullPage>
          <Container width='lg'>
            <Spacer bottom={8} />
            <Text size='size1' weight='bold' tag='h2'>
              Find me on
            </Text>
            <CustomLink size='size1' dimmed href='https://dribbble.com/hihayk' target='_blank'>dribbble</CustomLink>
            <br />
            <CustomLink size='size1' dimmed href='https://ello.co/hihayk' target='_blank'>ello</CustomLink>
            <br />
            <CustomLink size='size1' dimmed href='https://www.designspiration.net/hayk/' target='_blank'>designspiration</CustomLink>
            <br />
            <CustomLink size='size1' dimmed href='https://www.facebook.com/hihayk' target='_blank'>facebook</CustomLink>
          </Container>
        </Container>

        <Spacer bottom={8} />

      </Animate>
    </div>
  )
}

export default System
