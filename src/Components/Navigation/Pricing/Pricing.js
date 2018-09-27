import React from 'react'
import Nav from '../Nav/Nav'

 class Pricing extends React.Component {
     constructor(){
         super()
         this.state = {
            showNewborn: false,
            showWedding: false,
            showPortrait: false
         }
     }
    render() {
        let pricingText;
        if(this.state.showNewborn){
            pricingText = <div>
                <p>
                    Baby Pictures
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
                    <div className='pricing-photo'>
                        <img src="https://i.pinimg.com/564x/85/98/5c/85985c8efbaa40cf7d655be59917b342.jpg" alt=""/>
                        <h3>newborn pricing</h3>
                    </div>
                    <div className='pricing-photo'>
                        <img src="https://i.pinimg.com/564x/85/98/5c/85985c8efbaa40cf7d655be59917b342.jpg" alt=""/>
                        <h3>wedding pricing</h3>
                    </div>
                    <div className='pricing-photo'>
                        <img src="https://i.pinimg.com/564x/85/98/5c/85985c8efbaa40cf7d655be59917b342.jpg" alt=""/>
                        <h3>portrait pricing</h3>
                    </div>
                </section>
                </section>

                <section className='home-footer'>
                    &copy; Sigita Petruzis Photography | Maryland Photographer | Newborn | Maternity
                </section>
            </div>  
        )
    }
}

export default Pricing