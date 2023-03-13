import React, { useState } from 'react'
import './ImageCarousel.css'
import Underwater from 'G:/React Applications/snapswipe/src/images/Underwater.jpg';
import Sunset from 'G:/React Applications/snapswipe/src/images/Sunset.jpg';
import City from 'G:/React Applications/snapswipe/src/images/City.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ImageCarousel() {

    const images = [Underwater, Sunset, City]

    const [currentImage, setImage] = useState(0)

    const leftArrowHandler = () => {
        const previousImage = currentImage - 1
        if (currentImage == 0) {
            return false;
        }
        setImage(previousImage)
    }

    const rightArrowHandler = () => {
        const nextImage = currentImage + 1;
        if (nextImage == images.length) {
            return false;
        }
        setImage(nextImage);
    };

    return (
        <div className="imageCarousel">
            <div className="images">
                <img src={images[currentImage]} />

                <div className="left">
                    <div className="backArrow">
                        <ArrowBackIosIcon onClick={leftArrowHandler} />
                    </div>
                </div>

                <div className="right">
                    <div className="forwardArrow">
                        <ArrowForwardIosIcon onClick={rightArrowHandler} />
                    </div>

                </div>
            </div>
        </div>
    )
}
