import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'


export class ImgCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../assets/images/slide_1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../assets/images/slide_2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../assets/images/slide_3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../assets/images/slide_4.jpg"
                            alt="Fourth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../assets/images/slide_5.jpg"
                            alt="Fifth slide"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
        )
    }
}

export default ImgCarousel
