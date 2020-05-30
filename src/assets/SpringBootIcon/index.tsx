import React from 'react';

interface Props {
  size?: number;
}

const SpringBootIcon: React.FC<Props> = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    style={{ fill: '#6db33f' }}
    viewBox="0 0 97.1 97">
    <defs></defs>
    <title>spring-icon</title>
    <g id="Layer_2" data-name="Layer 2"><g id="logos">
      <path d="M88.4,5.6a42.32,42.32,0,0,1-5.2,9.1A48.46,48.46,0,1,0,15.5,84l1.8,1.6A48.41,48.41,0,0,0,96.8,52C98.2,39.8,94.5,24.2,88.4,5.6ZM22.5,84.4a4.12,4.12,0,1,1-.6-5.8A4.21,4.21,0,0,1,22.5,84.4ZM88.1,69.9C76.2,85.8,50.6,80.4,34.3,81.2c0,0-2.9.2-5.8.6,0,0,1.1-.5,2.5-1,11.5-4,16.9-4.8,23.9-8.4C68,65.7,81.1,51,83.7,35.8c-5,14.6-20.2,27.2-34,32.3C40.2,71.6,23.1,75,23.1,75l-.7-.4c-11.6-5.7-12-30.9,9.2-39,9.3-3.6,18.1-1.6,28.2-4,10.7-2.5,23.1-10.5,28.1-21C93.5,27.5,100.3,53.7,88.1,69.9Z" /></g></g>
  </svg>
);

export default SpringBootIcon;