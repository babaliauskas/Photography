import React, {Component} from 'react';

class About extends Component {
    render () {
        return (
            <div className="about-container">
                <h1>About</h1>
                <hr/>
                <div className="about-content">
                    <div className="image">
                        <img src="https://i.ebayimg.com/images/g/v4sAAOSw46BZqYql/s-l640.jpg" alt=""/>
                    </div>
                    <div className="about-text">
                        <p>Hello, I’m Sigita!</p>
                        <br/>
                        <p>
                            I am located in Jessup, Maryland. I specialize in family and children photography. I am a mother to a crazy little girl who always keeps me busy. Family is a top priority in my life and I treasure every single moment I get to spend with my husband and daughter. 
                        </p>
                        <br/>
                        <p>
                            The joy of having a child has inspired me to capture the happiness I perceive in other people’s lives. I am eager to learn new things and I believe that curiosity and change are essential for personal growth. So please help me grow and hire me for your next photoshoot!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;