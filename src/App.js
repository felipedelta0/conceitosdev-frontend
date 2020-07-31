import React, { useState } from 'react'

import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState(['App Development', 'Mobile Development'])

  function handleAddProject() {
    setProjects([ ...projects, `New Project ${Date.now()}` ])
  }

  return (
    <>
      <Header title='Project' />

      <ul>
        { projects.map(project => <li key={project}>{project}</li>) }
      </ul>

      <button type='button' onClick={handleAddProject}>Add Project</button>
    </>
  )
}

export default App