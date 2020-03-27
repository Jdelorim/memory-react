import React from 'react';
import './Register.css';
//finish api calls

class Register extends React.Component {
        
        state = {
            userName: '',
            userPassword: ''
        }

        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            },()=>console.log(this.state))
        }

        onSubmit = e => { 
            e.preventDefault();

            const userSubmission = {
                userName: this.state.userName,
                userPassword: this.state.userPassword
            }

        }

        render() {
            return ( 
                <div className='reg-container'>
                    <div className='img-container'>
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