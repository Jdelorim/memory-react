import React from 'react';

//finish api calls
//make input it's own stateless component on this page
class Register extends React.Component {
        
        state = {
            userName: '',
            userPassword: ''
        }

        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        onSubmit = e => { 
            e.preventDefault();

            const userSubmission = {
                userName: this.state.userName,
                userPassword: this.state.userPassword
            }

        }

        render() {
            return(
                <div className='reg-container'>
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
                            <button type='submit'>
                                Let's Play!
                            </button>
                        </div>
                    </form>
                    </div>
            )

        }


}

export default Register;