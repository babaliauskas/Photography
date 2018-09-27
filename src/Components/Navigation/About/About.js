import React, {Component} from 'react';
import Footer from '../../Footer/Footer';
import Nav from '../Nav/Nav';

class About extends Component {
    render () {
        return (
            <div className='about'>
                <Nav/>
                <div className="home">
                    <h1>About Me</h1>
                    <hr/>
                    <div className='about-content'>
                        <div> <img src="http://www.zarias.com/wp-content/uploads/2015/12/61-cute-puppies.jpg" alt=""/></div>
                        <div>
                            <p>Hello, I’m Sigita!</p>
                            <p>
                                I am located in Jessup, Maryland. I specialize in family and children photography. I am a mother to a crazy little girl who always keeps me busy. Family is a top priority in my life and I treasure every single moment I get to spend with my husband and daughter. The joy of having a child has inspired me to capture the happiness I perceive in other people’s lives. I am eager to learn new things and I believe that curiosity and change are essential for personal growth. So please help me grow and hire me for your next photoshoot!
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;