import React from 'react';
import './Login.css';
import axios from 'axios';
import {Redirect} from 'react-router';


class Login extends React.Component{
    
    state = {
        userName: '',
        userPassword: '',
        msg: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        },()=>console.log(this.state))
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('helllooo');

        axios.post('users/login', this.state)
            .then(response => {
                console.log(response.data.msg);
                this.setState({
                  msg: response.data.msg
                });
                if(response.data.success) {
                  this.setState({
                    redirect: true
                  })
                }
            })
            .catch(err => {
                console.error(err);
            });
            
    }

    render() {
      const {redirect, msg, userName, userPassword} = this.state;
      if(redirect) {
        return <Redirect push to='/game' />
      }
        return (
          <div className="log-container">
            <div className="img-container">
              <div className="log-title">
                <b>Login:</b>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label className='log-label'>User Name: </label>
                  <input
                    type="text"
                    name="userName"
                    className="form-control"
                    value={userName}
                    onChange={this.onChange}
                    required />
                </div>
                <div className="form-group">
                  <label className='log-label'>User Password: </label>
                  <input
                    type="password"
                    name="userPassword"
                    className="form-control"
                    value={userPassword}
                    onChange={this.onChange}
                    required />
                </div>
                <div className='form-group'>
                    <button id='logButton' type='submit'>
                        Let's Play!
                    </button>
                    <div className='log-err'>
                        {msg}
                    </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default Login;