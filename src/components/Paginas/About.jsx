import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>Acerca de</h2>
      <div className="about-content">
        <div className="about-text">
          <p>¡Hola! Mi nombre es Veter Tattoo, tengo 33 años y soy un apasionado del arte desde que era un niño. Desde muy pequeño descubrí mi amor por el dibujo y la creatividad, y a lo largo de los años he perfeccionado mi técnica y habilidades.</p>
          <p>Hace más de 6 años que me sumergí en el mundo del tatuaje, convirtiendo mi pasión en mi profesión. Durante este tiempo, he tenido el privilegio de participar en numerosos concursos y eventos relacionados con el tatuaje, lo que me ha permitido seguir creciendo y aprendiendo cada día.</p>
          <p>En mi estudio, me esfuerzo por ofrecer un servicio personalizado y de alta calidad a cada uno de mis clientes. Mi objetivo es crear obras de arte únicas y significativas que reflejen la personalidad y los deseos de cada persona que confía en mí para plasmar sus ideas en la piel.</p>
          <p>Estoy emocionado de compartir mi pasión y mi arte contigo. ¡Gracias por visitar mi página y por considerar confiar en mí para tu próximo tatuaje o dibujo!</p>
        </div>
        <div className="about-image">
          <img src="/img/Tatuador-Foto.jpeg" alt="Imagen del tatuador" />
        </div>
      </div>
    </div>
  );
};

export default About;
