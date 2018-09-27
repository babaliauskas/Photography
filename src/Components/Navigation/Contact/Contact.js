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
                        <h1>Contact me</h1>
                        <p>Thank you for your interest in Patty Othon Photography! I would love to hear from you!</p>
                        <p>Please fill out the form below to get more information or to book your session. Please be sure to look through the website for pricing and session info. I will contact you within 48 business hours. Please be sure to provide as much information as possible in your inquiry.</p>
                        <p>Newborn sessions are held weekdays only.</p>
                        <p>Reminder: I schedule a limited number of sessions per month. If you are expecting, contact me today and please provide your due date. </p>
                        <p>I look forward to being your photographer! </p>
                        <p>~ Patty</p>
                    </div>

                    <div>
                        <h1>Your information</h1>
                        <form onSubmit={this.handleSubmit}>
            <div className='email-box'>
            <div className='xa' >
                <div className='contact-input-div'>
                    <input 
                        className='contact-input' 
                        type="text" 
                        placeholder='Name' 
                        name='name' 
                        onChange={this.handleChange} 
                        value={this.state.name}/>
                </div>

                <div className='contact-input-div'>
                    <input 
                        className='contact-input' 
                        type="text" 
                        placeholder='Email'
                        name='email' 
                        onChange={this.handleChange} 
                        value={this.state.email}/>
                </div>

                <div className='contact-input-div'>
                    <textarea 
                        className='contact-text'
                        name="text" 
                        id="" 
                        placeholder='Message' 
                        name='message' 
                        onChange={this.handleChange} 
                        value={this.state.message}></textarea>
                </div>

                <div className='contact-input-div'>
                    <button className='send'>
                        CONTACT US
                    </button>
                </div>
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