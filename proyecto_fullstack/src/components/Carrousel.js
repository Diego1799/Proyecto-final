import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://valorantitemstore.com/wp-content/uploads/2020/10/GN_Wasteland_Bundle_Featured.png',
    altText: 'Pack Wasteland',
    caption: 'Valorant Skins',
    header: 'Pack Wasteland',
    key: '1',
    
  },
  {
    src: 'https://valorantitemstore.com/wp-content/uploads/2020/10/GN_SoulStealer_Bundle_Featured.png',
    altText: 'Pack Reaver',
    caption: 'Valorant Skins',
    header: 'Pack Reaver',
    key: '2'
  },
  {
    src: 'https://valorantitemstore.com/wp-content/uploads/2020/11/GN_Rainbow_Bundle_Featured-1.png',
    altText: 'Pack Sensation',
    caption: 'Valorant Skins',
    header: 'Pack Sensation',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
  