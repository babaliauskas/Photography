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
            </div>
        )
    }
}

export default Dashboard