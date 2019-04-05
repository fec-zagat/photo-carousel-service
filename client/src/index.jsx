import React from 'react';
import { render } from 'react-dom';
import PhotoCarousel from './components/PhotoCarousel';
import PhotoGrid from './components/photogrid/PhotoGrid';

render(<PhotoCarousel />, document.getElementById('root'));
render(<PhotoGrid />, document.getElementById('photo-grid'));
