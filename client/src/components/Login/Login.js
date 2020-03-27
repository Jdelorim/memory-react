import React from 'react';
import './Login.css';


class Login extends React.Component{
    
    state = {
        username: '',
        password: ''
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <div className='form-holder'>
                    <lable>Username:</lable>
                    <input type='text' className='form-control'
                    value={this.state.username}
                    onChange={this.onChange} required/>
                </div>
            </form>
        )

}

export default Login;