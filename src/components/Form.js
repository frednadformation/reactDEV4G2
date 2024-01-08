import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         comments: "",
         topic: "react"
      }
    }

    handleUsernameChange = (event) => {
        console.log(event.target.value);
        this.setState({
            username : event.target.value
        })
    }
    handleCommentsChange = (event) => {
        console.log(event.target.value);
        this.setState({
            comments : event.target.value
        })
    }
    handleTopicChange = (event) => {
        console.log(event.target.value);
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmitChange = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }


  render() {
    const { username, comments, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitChange}>
            <label>Username</label>
            <input type="text" onChange={this.handleUsernameChange} />
            
            <label>comments</label>
            <input type="text" onChange={this.handleCommentsChange} />
            <label>topic</label>
            {/* <input type="text" onChange={this.handleTopicChange} /> */}
        
            <select onChange={this.handleTopicChange}>
                <option>
                    React
                </option>
                <option>
                    VueJS
                </option>
                <option>
                    AngularJS
                </option>
            </select>

            <input type='submit' value="envoyer" />
        </form>

      </div>
    )
  }
}

export default Form