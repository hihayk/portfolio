import styled, { injectGlobal } from 'styled-components'

const red = '#C25353'

injectGlobal`
	body {
		margin: 0;
	  padding: 0;
  }

  ::-moz-selection {
  	color: ${red};
  	background-color: ${red};
  }
	::selection {
		color: ${red};
		background-color: ${red};
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
