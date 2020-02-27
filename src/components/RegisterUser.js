import React from 'react'

class RegisterUser extends React.Component {

    state = {
        email : '',
        password : ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submit = (e) => {
        e.preventDefault();
        let user = {
            email: this.state.email, 
            password: this.state.password 
        }
        this.props.getToken(user);
        this.setState({password : ''})
    }

    render() {
        return ( 
            <div>   
            <h2>Register User to get authorization token</h2>    
            <form onSubmit={this.submit}>
                <input type="text" name="email" placeholder="enter the email" value={this.state.email} onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="enter the password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" disabled={!this.state.email && !this.state.password}/>
            </form>
            </div>
        )
    }

}

export default RegisterUser;