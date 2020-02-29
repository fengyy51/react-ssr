
import React from 'react'
export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      res:''
    }
  }
  clickFetch(){
    console.log('de')
    window.fetch('/hello').then((res)=>{
      console.log('res', res)
    })
  }
  render() {
    return <button onClick={() => this.clickFetch()}>hello world{this.state.res}</button>
    // return <button onClick ={this.clickFetch}>hello worldeee</button>
  }
}