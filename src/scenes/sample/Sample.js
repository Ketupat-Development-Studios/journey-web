import React, { PureComponent } from 'react'
import './Sample.css'

class Sample extends PureComponent {
  render () {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="navBar">
                    <h1 className="title">LEARNING JOURNEY</h1>
                </div>
            </div>
            <div className="container">
                <input type="text" className="searchBar" placeholder="Search" onKeyPress={this.keypress}/>
                <div className =  "results">
                    <div className = "results1"></div>
                    <div className = "results2"></div>
                    <div className = "results3"></div>
                </div>
            </div>
        </div>
    )
  }
  keypress (e){
    if(e.key == 'Enter'){
        window.location.href = "/results/python"
    }
  }
}


export default Sample
