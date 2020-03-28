import React from 'react';
import './Register.css';
import axios from 'axios';
//finish api calls

class Register extends React.Component {
        
        state = {
            userName: '',
            userPassword: ''
        }

        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        onSubmit = e => { 
            e.preventDefault();
           
            const userSubmission = {
                userName: this.state.userName,
                userPassword: this.state.userPassword
            }
            console.log('------',userSubmission);

            axios.post('/register', userSubmission)
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    console.log
                })
                
        }

        render() {
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
                            <input type='text' className='form-control'
                            name='userPassword' value={this.state.userPassword}
                            onChange={this.handleChange} required />
                        </div>
                        
                        <div className='form-group'>
                            <button id='regButton' type='submit'>
                                Let's Play!
                            </button>
                        </div>
                    </form>
                    </div> 
                </div>
                
            )

        }


}

export default Register;