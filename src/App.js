import React, { Component } from 'react'
import Home from './views/home'
import About from './views/about'
import Contact from './views/contact'
import Project from './views/project'
import BaseStyles from './components/base-styles'
import ScrollToTop from './components/scroll-to-top'
import { HashRouter as Router, Route } from 'react-router-dom'
import projects from './data/data'

class App extends Component {
  render() {
    return (
      <BaseStyles>
        <Router>
          <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

            {projects.map((project, index) => (
  						<Route exact path={project.path} key={index} render={(props) => (
                <Project
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  link={project.link}
                  links={project.links}
                  role={project.role}
                  inTeam={project.inTeam}
                  contributors={project.contributors}
                >
                  {project.content}
                </Project>
              )} />
  					))}
          </ScrollToTop>
        </Router>
      </BaseStyles>
    )
  }
}

export default App
