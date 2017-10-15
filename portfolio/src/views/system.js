import React from 'react'
import Text from '../components/text'
import Distribute from '../components/distribute'
import Spacer from '../components/spacer'
import Dropdown from '../components/dropdown'
import Header from '../components/header'

const System = () => {
  return(
    <div>
      <Header />
      
      <Spacer left={8} top={7}>
        <Distribute vertical space={8}>
          <div>
            <Text size='size3'>40/48 — size 3</Text>
            <Text size='size2'>32/40 — size 2</Text>
            <Text size='size1'>24/32 — size 1</Text>
            <Text size='size0'>18/24 — size 0</Text>
          </div>

          <Dropdown
            triggerContent='triggerContent'
          >
          </Dropdown>
        </Distribute>
      </Spacer>
    </div>
  )
}

export default System
