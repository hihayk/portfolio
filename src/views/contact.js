import React from 'react'
import Text from '../components/text'
import Spacer from '../components/spacer'
import Container from '../components/container'
import Animate from '../components/animate'
import Header from '../components/header'
import styled from 'styled-components'

const BigLetter = styled.div`
  font-size: 144px;
  line-height: 1;
  opacity: .2;
`

const System = () => {
  return(
    <div>
      <Header />
      <Spacer bottom={32} smBottom={16} />

      <Animate duration={0.8}>
        <Container fullPage>
          <BigLetter>
            C
          </BigLetter>

          <Text size='size3' weight='bold' tag='h1'>
            Say hi
          </Text>
        </Container>


        <Container fullPage>
          <Text size='size3'>
            say@hihayk.com
          </Text>
        </Container>
      </Animate>
    </div>
  )
}

export default System
