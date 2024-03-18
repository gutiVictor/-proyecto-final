import React from "react";
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
 import Logo from '../../../public/LOGO-FUNVAL.png'; // Asegúrate de tener la ruta correcta para tu logo
 

const Home = () => {
  return (
    <div className="container px-4 py-8 mx-auto">

      {/*imagen LOGO-FUNVAL  centrada */}

      <div className="flex justify-center">
        <img src={Logo} alt="Logo de la Fundación FUNVAL" className="w-32 h-16 mr-4" />
      </div>

      {/* GIF animado de fuegos artificiales */}
      <div className="flex justify-center">
        <img src="https://www.gifsanimados.org/data/media/492/fuegos-artificiales-imagen-animada-0092.gif" alt="GIF animado de fuegos artificiales" />
      </div>


      <div className="mb-4 text-3xl font-bold text-center">Querida Fundación FUNVAL</div>
      <div className="mb-4 text-lg">
        <p>
          <span className="font-bold">En este emocionante viaje de aprendizaje y crecimiento en el campo del desarrollo de software</span>, quiero expresar mi más sincero agradecimiento por su inquebrantable apoyo y dedicación, por su generosidad y compromiso. Ustedes han sido la piedra angular de mi progreso, permitiendome abrazar este desafiante pero gratificante camino hacia la  tecnológica.
        </p>
        <br></br>
        <p>
          <span className="font-bold">A nuestros estimados maestros, Harold Carazas, Jorge Sosa, Diego Huarsaya e Isaias Zuñiga</span>, les extiendo mi más profunda gratitud por su guía experta y pasión por la enseñanza,ustedes han iluminado mi camino y el de los demás compañeros, dotándonos de los conocimientos y habilidades esenciales para enfrentar los desafíos del desarrollo Fullstack con confianza y determinación; Su dedicación incansable ha sido una inspiración para nosotros, y estamos eternamente agradecidos por el tiempo y la energía que han invertido en nuestro crecimiento personal y profesional.
        </p>

        <br></br>
        <p>
          <span className="font-bold">A través del invaluable apoyo y mentoría</span>, he tenido el privilegio de explorar y dominar una amplia gama de tecnologías, desde HTML,CSS, JavaScript, React, PHP y los marcos de trabajo de Tailwind y Laravel. Donde cada lección impartida y cada desafío superado, ha sido una oportunidad para crecer y evolucionar.
        </p>

        <br></br>
        <p>
          <span className="font-bold">En este momento de reflexión y gratitud</span>, me comprometo a honrar el legado, aplicando los conocimientos adquiridos para hacer una diferencia significativa en el mundo del desarrollo de software. Seguiré trabajando con diligencia y dedicación, siempre recordando los fundamentos sólidos que me han brindado y buscaré continuamente formas de mejorar y crecer.
        </p>
        <br></br>
        <p>
          <span className="font-bold">Una vez más, gracias por todo lo que han hecho por mi, por mi hogar y mis comapñeros .</span> Su influencia perdurará en cada línea de código que escriba y en cada proyecto que emprenda. Estoy eternamente agradecido y espero seguir inspirándome en este emocionante viaje hacia el dominio tecnológico.
        </p>
        <p>
          <span className="font-bold">Con gratitud y respeto sinceros,</span>
        </p>
        <br></br><br></br>
        <p>
          <span className="font-bold text-center"><strong> Victor Raul Gutierrez Sanabria </strong> y Familia.</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
