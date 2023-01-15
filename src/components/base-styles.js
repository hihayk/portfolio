import React from 'react'
import styled, { createGlobalStyle, injectGlobal } from 'styled-components'
import { colors, textSizesStyles } from '../styles/variables'

import AtlasGrotesk400Woff from '../assets/fonts/AtlasGrotesk-400.woff'
import AtlasGrotesk400Woff2 from '../assets/fonts/AtlasGrotesk-400.woff2'
import AtlasGrotesk700Woff from '../assets/fonts/AtlasGrotesk-700.woff'
import AtlasGrotesk700Woff2 from '../assets/fonts/AtlasGrotesk-700.woff2'

const GlobalStyles = createGlobalStyle`
	
`

const Root = styled.div`
`

const BaseStyles = ({children}) => (
	<Root>
		<GlobalStyles />
		{children}
	</Root>
)

export default BaseStyles
