import React from 'react'

class ResetCounter extends React.Component {

    state = {
        current : ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submit = (e) => {
        e.preventDefault();
        let current = this.state.current 
        this.props.resetCounter(current);
        this.setState({current : ''})
    }

    render() {
        return (   
            <div>
            <h2>Reset counter value</h2>
            <form onSubmit={this.submit}>
                <input type="text" name="current" placeholder="enter the current" value={this.state.current} onChange={this.handleChange}/>                
                <input type="submit" disabled={!this.state.current}/>
            </form>
            </div>     
        )
    }

}

export default ResetCounter;