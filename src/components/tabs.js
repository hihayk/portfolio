import React from 'react'
import styled from 'styled-components'
import { colors, textSizesStyles, breakpoints } from '../styles/variables'

const TabsWrapper = styled.div`
  display: flex;
  ${textSizesStyles.sizeN1}
`

const Tab = styled.div`
  padding: 8px 16px;

  @media (max-width: ${breakpoints.md}) {
    padding: 6px 8px;
  }

  ${props => !props.active && `
    cursor: pointer;
  `}
  ${props => props.active && `
    background-color: white;
    color: ${colors.body};
  `}

  &:not(:last-of-type) {
    margin-right: 0;
  }
`

const TabContentWrapper = styled.div`
  ${props => !props.isVisible && `display: none`};
`

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.tabsObject[0].tabName
    };
    this.handleTabClick = this.handleTabClick.bind(this)
  }

  handleTabClick (tabName) {
    this.setState ({
      activeTab: tabName
    })
    console.log(this.state.activeTab)
  }
  
  render () {
    return (
      <div>
        <TabsWrapper className='TabsWrapper'>
          {Object.values(this.props.tabsObject).map((specTab, index) => (
            <Tab active={specTab.tabName === this.state.activeTab} key={index} onClick={() => this.handleTabClick(specTab.tabName)}>
              {specTab.tabName}
            </Tab>
          ))}
        </TabsWrapper>

        {Object.values(this.props.tabsObject).map((specTab, index) => {
          return (
            <TabContentWrapper key={index} isVisible={specTab.tabName === this.state.activeTab}>
              {specTab.tabContent}
            </TabContentWrapper>
          )
        })}
      </div>
    )
  }
}

export default Tabs