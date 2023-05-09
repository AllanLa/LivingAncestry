import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap';

export class MediaCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false,
            images: [],
            videos: []
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }

    componentDidMount() {
        this.setState({
            images: this.props.images,
            videos: this.props.videos
        });
    }

    toggleAnimate(val) {
        this.setState({ animating: val });
    }

    previous() {
        if (this.state.animating) {
            return;
        }
        const { activeIndex, images, videos } = this.state;
        const size = images.length + videos.length;
        const nextIndex = activeIndex === 0 ? size - 1 : activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    next() {
        if (this.state.animating) {
            return;
        }
        const { activeIndex, images, videos } = this.state;
        const size = images.length + videos.length;
        const nextIndex = activeIndex === size - 1 ? 0 : activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(index) {
        if (this.state.animating) {
            return;
        }
        this.setState({ activeIndex: index });
    }

    render() {
        const { activeIndex } = this.state;
        const { images, videos } = this.props;
        let items = images.map(image => {
            return {
                src: image
            }
        });
        items = items.concat(videos.map(video => {
            return {
                src: video
            }
        }));
        let slides = images.map(image => {
            return (
                <CarouselItem
                    className='custom-tag'
                    onExiting={this.toggleAnimate.bind(this, true)}
                    onExited={this.toggleAnimate.bind(this, false)}
                    key={image}>
                    <img style={{ maxWidth: "300px", maxHeight: '300px' }} src={image} />
                </CarouselItem>
                )
        });
        const videoSlides = videos.map(video => {
            return (
                <CarouselItem
                    className='custom-tag'
                    onExiting={this.toggleAnimate.bind(this, true)}
                    onExited={this.toggleAnimate.bind(this, false)}
                    key={video}>
                    <video style={{ maxWidth: "300px", maxHeight: '300px' }} src={video} type="video/mp4" controls />
                </CarouselItem>
            )
        });
        slides = slides.concat(videoSlides);
        
        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                              max-width: 100%;
                              height: 300px;
                              text-align: center;
                              background: #d3d3d3;
                        }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    interval={false}
                    previous={this.previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}
