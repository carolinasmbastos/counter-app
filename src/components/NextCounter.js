import React from 'react'
import axios from 'axios'

class NextCounter extends React.Component {
    state = {
        counter : ''
    }

    getNextCounter = () => {
        console.log(this.props.token)
        axios.get('http://localhost:8080/api/next', {
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
                <h2>Next Counter Value: {this.state.counter}</h2>
                <button onClick={this.getNextCounter} disabled={!this.props.token}>Get Next</button> 
            </div>
        )
    }

}

export default NextCounter;