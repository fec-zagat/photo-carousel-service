import React from 'react';
import { render } from 'react-dom';
import PhotoCarousel from './components/PhotoCarousel';
import PhotoGrid from './components/photogrid/PhotoGrid';
import Slider from './components/PopUpSlider/Slider';

render(<PhotoCarousel />, document.getElementById('root'));
// render(<PhotoGrid />, document.getElementById('photo-grid'));
// render(<Slider />, document.getElementById('photo-slider'));
