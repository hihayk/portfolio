import styled, { injectGlobal } from 'styled-components'
import { colors } from '../styles/variables'

injectGlobal`
	body {
		margin: 0;
	  padding: 0;
  }

  ::-moz-selection {
  	color: ${colors.red};
  	background-color: ${colors.red};
  }
	::selection {
		color: ${colors.red};
		background-color: ${colors.red};
	}
`
const BaseStyles = styled.div`
	font-family: Graphik, sans-serif;
	color: #666;
	font-size: 18px;
	line-height: 24px;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	img {
		max-width: 100%;
	}
`

export default BaseStyles
