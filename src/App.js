import React, { Component, useEffect } from 'react'
import Home from './views/home'
import About from './views/about'
import Contact from './views/contact'
import Project from './views/project'
import BaseStyles from './components/base-styles'
import ScrollToTop from './components/scroll-to-top'
import { HashRouter as Router, Route } from 'react-router-dom'
import projects from './data/data'
import "./styles.css";

const useBodyHashClass = () => {
  useEffect(() => {
    const updateBodyClass = () => {
      const hash = window.location.hash
      const body = document.querySelector('body')
      body.classList.remove('home', 'about', 'contact')
      if (hash === '#/') {
        body.classList.add('home')
      } else if (hash === '#/about') {
        body.classList.add('about')
      } else if (hash === '#/contact') {
        body.classList.add('contact')
      }
    }
    updateBodyClass()
    window.addEventListener('hashchange', updateBodyClass)
    return () => window.removeEventListener('hashchange', updateBodyClass)
  }, [])
}

const App = () => {
  useBodyHashClass()

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
                titleSuffix={project.titleSuffix}
                subtitle={project.subtitle}
                description={project.description}
                link={project.link}
                links={project.links}
                role={project.role}
                roleTags={project.roleTags}
                inTeam={project.inTeam}
                contributors={project.contributors}
                collaborators={project.collaborators}
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

export default App
