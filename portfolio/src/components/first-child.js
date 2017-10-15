import React from 'react'

const FirstChild = ({ children }) => React.Children.toArray(children)[0] || null

export default FirstChild
