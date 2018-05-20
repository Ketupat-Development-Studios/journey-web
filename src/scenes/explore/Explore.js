import React, { Component } from 'react'
import ApiManager from 'utils/ApiManager'

class Explore extends Component {
  constructor () {
    super()
    this.state = {
      paths: [],
      isLoading: true
    }
  }
  componentDidMount () {
    this.fetchPaths()
  }
  render () {
    const { isLoading, paths } = this.state
    if (isLoading) {
      return <span>Loading...</span>
    }
    return (
      <div>
        <h1>Explore</h1>
        <ul>
          {
            paths.map(path => (
              <li key={path.id}><a href={`/path/${path.id}`}>{path.title}</a></li>
            ))
          }
        </ul>
      </div>
    )
  }
  fetchPaths = async () => {
    let paths
    try {
      paths = await ApiManager.getPaths()
    } catch (error) {
      console.error(error)
    }
    this.setState({ paths, isLoading: false })
  }
}

export default Explore
