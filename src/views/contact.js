import React from 'react'
import Text from '../components/text'
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
          <Text size='size3' weight='bold'>
            Contact
          </Text>
        </Container>
      </Animate>
    </div>
  )
}

export default System
