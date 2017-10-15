import React, { Component } from 'react'
import Home from './views/home'
import System from './views/system'
import Project from './views/project'
import BaseStyles from './components/base-styles'
import { HashRouter as Router, Route } from 'react-router-dom'
import projects from './data'

class App extends Component {
  render() {
    return (
      <BaseStyles>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/system" component={System} />

            {projects.map((project, index) => (
  						<Route path={project.path} key={index} render={(props) => (
                <Project
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  link={project.link}
                >
                  {project.content}
                </Project>
              )} />
  					))}
          </div>
        </Router>
      </BaseStyles>
    )
  }
}

export default App
