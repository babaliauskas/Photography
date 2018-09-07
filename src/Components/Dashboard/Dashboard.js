import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
import styled, { css } from 'styled-components';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 400px;
`;
const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

 class Dashboard extends React.Component {
    render() {
        return (
            <div className='dashboard'>
                <div className='dashboard-logo'> Sigute </div>
                <div className='dashboard-img'>
                <Carousel defaultWait={5000} /*wait for 1000 milliseconds*/ >
                    <Fade duration={5000}>
                    <div className='dashboard-img1'></div>
                    </Fade>

                    <Fade duration={5000}>
                    <div className='dashboard-img2'></div>
                    </Fade>

                    <Fade duration={5000}>
                    <div className='dashboard-img3'></div>
                    </Fade>

                    <Fade duration={5000}>
                    <div className='dashboard-img4'></div>
                    </Fade>

                    <Fade duration={5000}>
                    <div className='dashboard-img5'></div>
                    </Fade>

                    <Fade duration={5000}>
                    <div className='dashboard-img6'></div>
                    </Fade>
                </Carousel>
                </div>

                <section className='home'>
                    home 
                    <hr/>
                    welcome!

                    <div className='home-bio'>
                        <h6>Patty Othon Photography specializes in newborn, wedding and maternity photography in Los Angeles, California and surrounding areas including but not limited to Pasadena, Riverside, Corona and Orange County.</h6>
                    </div>
                    resent posts
                    <div className='home-posts'>
                        <div>
                            <img src="http://wptest.io/demo/wp-content/uploads/sites/2/2012/12/unicorn-wallpaper.jpg" alt=""/>
                            <p>asdasd</p>
                        </div>
                    </div>
                </section>

                <section className='home-something'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </section>

                <section className='home-footer'>
                    &copy; Sigita Petruzis Photography | Maryland Photographer | Newborn | Maternity
                </section>
            </div>  
        )
    }
}

export default Dashboard