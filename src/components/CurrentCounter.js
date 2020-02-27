import React from 'react'
import axios from 'axios'

class CurrentCounter extends React.Component {
    state = {
        counter : ''
    }

    getCurrentCounter = () => {
        console.log(this.props.token)
        axios.get('https://counter-api-dev.herokuapp.com/api/current', {
            headers: {
              'Authorization': `Bearer ${this.props.token}`
            }})
            .then(result => {
                console.log(result.data)
                this.setState({
                    counter : result.data.data.id
                })
                console.log(this.state.counter)
            })
            .catch(error=> {
                console.log(error)
                this.setState({
                    message : error.message
                })
            })
    }

    render() {
        return (
            <div>
                <h2>Current Counter Value: {this.state.counter}</h2>
                <button onClick={this.getCurrentCounter} disabled={!this.props.token}>Get Current</button> 
            </div>
        )
    }

}

export default CurrentCounter;