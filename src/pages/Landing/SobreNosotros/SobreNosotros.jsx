import { Link } from "react-router-dom";
import React from "react";
import "./SobreNosotros.css";

import FinanzasPersonalesPNG from '../../../../public/assets/Landing/Images/SobreNosotros/FinanzasPersonales.png'
import VisionPNG from '../../../../public/assets/Landing/Images/SobreNosotros/Vision.png'
import MisionPNG from '../../../../public/assets/Landing/Images/SobreNosotros/Mision.png'
import FlagPNG from '../../../../public/assets/Landing/Images/SobreNosotros/Flag.png'
import TransparenciaPNG from '../../../../public/assets/Landing/Images/SobreNosotros/Transparencia.png'
import AccesoPNG from '../../../../public/assets/Landing/Images/SobreNosotros/Acceso.png'
import GraduacionPNG from '../../../../public/assets/Landing/Images/SobreNosotros/Graduacion.png'
import LinkedInPNG from '../../../../public/assets/Landing/Images/SobreNosotros/LinkedIn.png'

const people = [
  {
    name: "Juan Gabriel Mollo",
    role: "Desarrollador Full Stack",
    imageUrl:
      "./public/assets/Landing/Images/SobreNosotros/FotosPerfil/Gabriel_Mollo.jpg",
    linkedin: "https://www.linkedin.com/in/juangabrielmollo/",
  },
  {
    name: "Santiago Friedrich",
    role: "Desarrollador Full Stack",
    imageUrl:
      "./public/assets/Landing/Images/SobreNosotros/FotosPerfil/Santiago_Friedrich.jpeg",
    linkedin: "https://www.linkedin.com/in/santiago-claros-friedrich/",
  },
];

function About() {
  return (
    <div>
      <section class="container-main">
        <div class="row">
          <div class="column-left">
            <div class="text-container">
              <h2>Mas que una app</h2>
              <h2>tu aliado financiero</h2>

              <p>
                Sabemos que cada mango cuenta. Por eso, te damos el control de
                tus finanzas de manera simple, transparente y siempre a tu lado
                para que vivas tranquilo.
              </p>
            </div>
          </div>

          <div class="column-right">
            <img
              class="hero-img-about"
              src={FinanzasPersonalesPNG}
              alt="finanzas-personales"
            />
          </div>
        </div>
      </section>

      <section className="about-section2">
        <div className="container-row-about">
          <div className="container-left-about">
            <img
              class="hero-img-about"
              src={VisionPNG}
              alt=""
            />
          </div>
          <div className="container-right-about justify-content-center">
            <h3 className="h3-about h3-enfasis">Nuestra Vision</h3>
            <p className="p-v2-about">
              Ser la plataforma lider en gestión financiera, reconocida por
              nuestra facilidad de uso, capacidad educativa y compromiso con el
              bienestar financiero de nuestros usuarios.
            </p>
          </div>
        </div>
        <div className="container-row-about">
          <div className="container-left-about justify-content-center">
            <h3 className="h3-about h3-enfasis">Nuestra Mision</h3>
            <p className="p-v2-about">
              Empoderar a las personas para que tomen el control de sus finanzas
              mediante una plataforma accesible y sencilla que promueva la
              educación financiera y el manejo responsable del dinero.
            </p>
          </div>
          <div className="container-right-about">
            <img
              class="hero-img-about"
              src={MisionPNG}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="about-section3">
        <div className="container-row-about background-gris">
          <h3 className="h3-about h3-enfasis">Nuestros Valores</h3>
          <div className="container-row-about marginCards row-gap-30px">
            <div className="about-card">
              <img
                class="about-img"
                src={FlagPNG}
              />
              <h3 className="h3-about">Innovacion</h3>
              <p className="p-v2-about">
                Estamos siempre a la vanguardia para ofrecerte herramientas
                modernas y soluciones.
              </p>
            </div>
            <div className="about-card">
              <img
                class="about-img"
                src={TransparenciaPNG}
              />
              <h3 className="h3-about">Transparencia</h3>
              <p className="p-v2-about">
                Creemos en la importancia de ofrecer información clara y honesta
                para que puedas tomar mejores decisiones
              </p>
            </div>
            <div className="about-card">
              <img
                class="about-img"
                src={AccesoPNG}
              />
              <h3 className="h3-about">Accesibilidad</h3>
              <p className="p-v2-about">
                Nuestra app está diseñada para que todos, sin importar su edad o
                conocimiento, puedan usarla
              </p>
            </div>
            <div className="about-card">
              <img
                class="about-img"
                src={GraduacionPNG}
              />
              <h3 className="h3-about">Educacion</h3>
              <p className="p-v2-about">
                Queremos que aprendas a gestionar mejor tu dinero cada dia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section4">
        <div className="bg-white py-24 sm:py-32">
          <div className="container">
            <div className="text-container">
              <h2 className="title">Conoce al Equipo</h2>
              <p className="description">
                Nuestro equipo de profesionales <br /> enfocado en darte las
                mejores soluciones.
              </p>
            </div>
            <ul className="team-list">
              {people.map((person) => (
                <li key={person.name} className="team-member">
                  <div className="member-details">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="profile-image"
                    />
                    <div>
                      <h3 className="member-name">{person.name}</h3>
                      <p className="member-role">{person.role}</p>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={LinkedInPNG}
                          alt="LinkedIn"
                          className="linkedin-icon"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
