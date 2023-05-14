import React from 'react';
import Slider from 'react-slick';
import photo1 from '../../assets/images/photo1.jpg'
import photo2 from '../../assets/images/photo2new.webp'
import photo3 from '../../assets/images/photo3.jpg'
import '../underCover/css/underCoverMedia.css'

const Carousel = () => {
  const settings = {
    dots: true, // Exibe os pontos de navegação
    infinite: true, // Permite rolagem infinita
    speed: 500, // Velocidade da animação
    slidesToShow: 1, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides para rolar por vez
    centerMode: true, // Centraliza o slide ativo
    centerPadding: '50px', // Espaçamento entre os slides
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Quantidade de slides visíveis em dispositivos ainda menores
        },
      },
    ],
  };

  return (
    <div >
      <Slider {...settings} >
        <div >
          <img id='photo1' src={photo1} alt="Slide 1" />
        </div>
        <div  >
          <img  id='photo2' src={photo2} alt="Slide 2" />
        </div>
        <div  >
          <img id='photo3'  src={photo3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
