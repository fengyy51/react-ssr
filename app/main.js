
import React from 'react'
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      res: ''
    }
  }
  clickFetch() {
    console.log('de')
    window.fetch('/helloe').then((res) => {
      console.log('res', res)
      res.json().then(jsonData => {
        console.log('res-data', jsonData)
        this.setState({ 'res': jsonData.data.name })
      })
    })
  }
  render() {
    return <button onClick={() => this.clickFetch()}>hello world{this.state.res}</button>
    // return <button onClick ={this.clickFetch}>hello worldeee</button>
  }
}