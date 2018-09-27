import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../../Footer/Footer'

 class Pricing extends React.Component {
     constructor(){
         super()
         this.state = {
            showNewborn: false,
            showWedding: false,
            showPortrait: false
         }
     }

     toggleNewborn = () =>{
        this.setState({
            showNewborn: !this.state.showNewborn,
            showWedding: false,
            showPortrait: false
        })
     }

     toggleWedding = () =>{

        this.setState({
            showWedding: !this.state.showWedding,
            showNewborn: false,
            showPortrait: false
        })
     }

     togglePortrait = () =>{
        this.setState({
            showPortrait: !this.state.showPortrait,
            showWedding: false,
            showNewborn: false
        })
     }


    render() {
        let pricingText;
        if(this.state.showNewborn){
            pricingText = <div>
                <h2>Congradulations on Your New Baby!</h2>
                <p>
                    Baby pricing paragraph.
                </p>
            </div>
        }
        if(this.state.showWedding){
            pricingText = <div>
                <h2>Congradulations on Your Engagement!</h2>
                <p>
                    Wedding pricing paragraph
                </p>
            </div>
        }
        if(this.state.showPortrait){
            pricingText = <div>
                <h2>Create Memories to Last a Lifetime</h2>
                <p>
                    Portrait pricing paragraph
                </p>
            </div>
        }

        return (
            <div className='dashboard'>
            <Nav />
                <div className='dashboard-logo'> Sigute </div>

                <section className='home'>
                    pricing
                    <hr/>
                    <section className='pricing-photos'>
                        <div className='pricing-photo' onClick={this.toggleNewborn}>
                            <img src="https://i.pinimg.com/564x/85/98/5c/85985c8efbaa40cf7d655be59917b342.jpg" alt=""/>
                            <h3>newborn pricing</h3>
                        </div>
                        <div className='pricing-photo' onClick={this.toggleWedding}>
                            <img src="https://i.pinimg.com/564x/85/98/5c/85985c8efbaa40cf7d655be59917b342.jpg" alt=""/>
                            <h3>wedding pricing</h3>
                        </div>
                        <div className='pricing-photo' onClick={this.togglePortrait}>
                            <img src="https://i.pinimg.com/564x/85/98/5c/85985c8efbaa40cf7d655be59917b342.jpg" alt=""/>
                            <h3>portrait pricing</h3>
                        </div>
                    </section>
                    {pricingText}
                </section>

                <Footer />
            </div>  
        )
    }
}

export default Pricing