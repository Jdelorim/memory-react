import React from 'react';

import './Register.css';
import axios from 'axios';
import {Redirect} from 'react-router';
//finish api calls

class Register extends React.Component {
        
        state = {
            userName: '',
            userPassword: '',
            msg: '',
            redirect: false
        }

        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        onSubmit = (e) => { 
            e.preventDefault();
           
            const userSubmission = {
                userName: this.state.userName,
                userPassword: this.state.userPassword
            }
            

            axios.post('users/register', userSubmission)
                .then(res=>{
                    console.log(res.data.msg);
                    this.setState({
                        msg: res.data.msg
                    })
                    if(res.data.success) {
                        this.setState({
                            redirect: true
                        })
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
                
        }

        render() {
            if(this.state.redirect) {
                return <Redirect push to='/game'/>
            }
            return ( 
                <div className='reg-container'>
                    <div className='img-container'>
                    <div className='reg-title'>
                        <b>Register:</b>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label>User Name:</label>
                            <input type='text' className='form-control'
                            name='userName' value={this.state.userName}
                            onChange={this.handleChange} required />
                        </div>

                        <div className='form-group'>
                            <label>User Password:</label>
                            <input type='password' className='form-control'
                            name='userPassword' value={this.state.userPassword}
                            onChange={this.handleChange} required />
                        </div>
                        
                        <div className='form-group'>
                            <button id='regButton' type='submit'>
                                Let's Play!
                            </button>
                            <div className='reg-err'>
                                {this.state.msg}
                            </div>
                        </div>

                    </form>
                    </div> 
                </div>
                
            )

        }


}

export default Register;