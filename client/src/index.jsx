import React from 'react';
import { render } from 'react-dom';
import PhotoCarousel from './components/PhotoCarousel';
import Slider from './components/PopUpSlider/Slider';

render(<PhotoCarousel />, document.getElementById('root'));
render(<Slider />, document.getElementById('slider-testing'));
