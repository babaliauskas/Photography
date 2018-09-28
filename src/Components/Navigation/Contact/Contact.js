import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../../Footer/Footer'
import axios from 'axios'

export default class Contact extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit (e) {
       e.preventDefault()
        await axios.post('/api/form', this.state )

    }

    render() {
        return (
            <div className='dashboard'>
                <Nav/>
                <div className='home contact'>
                    <div>
                        <h1>Contact Me</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className='email-box'>
                                <div className='contact-input-div'>
                                    <p>Name <span>(required)</span></p>
                                    <input 
                                        className='contact-input' 
                                        type="text" 
                                        placeholder='Name' 
                                        name='name' 
                                        onChange={this.handleChange} 
                                        value={this.state.name}
                                        required/>
                                </div>

                                <div className='contact-input-div'>
                                    <p>Email <span>(required) </span></p>
                                    <input 
                                        className='contact-input' 
                                        type="text" 
                                        placeholder='Email'
                                        name='email' 
                                        onChange={this.handleChange} 
                                        value={this.state.email}
                                        required/>
                                </div>

                                <div className='contact-input-div'> 
                                    <p>Message (required)</p>
                                    <textarea 
                                        className='contact-text'
                                        name="text" 
                                        id="" 
                                        placeholder='Message' 
                                        name='message' 
                                        onChange={this.handleChange} 
                                        value={this.state.message}
                                        required></textarea>
                                </div>

                                <div className='contact-input-div'>
                                    <button className='send'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>     
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}