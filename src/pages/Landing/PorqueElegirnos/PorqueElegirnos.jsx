import React from 'react'

import calcuPNG from '../../../../public/assets/Landing/Images/PorqueElegirnos/Calculadora.png'
import TruenoIconPNG from '../../../../public/assets/Landing/Images/PorqueElegirnos/TruenoIcon.png'
import LibroIconPNG from '../../../../public/assets/Landing/Images/PorqueElegirnos/LibroIcon.png'
function PorqueElegirnos() {
  return (
    <div>
      <section className="container-main">
        <div className="row">
          <div className="column-left">
            <div className="text-container">
              <h2>Transformando</h2>
              <h2>tus Finanzas</h2>

              <p>Gestionar tus finanzas nunca fue tan simple</p>
            </div>
          </div>

          <div className="column-right">
            <img className="hero-img-about" src={calcuPNG} alt=""/>
          </div>
        </div>
      </section>

      <section className="about-section1">
      <div className="why-title">
          <h2 className="h2-about">Un compañero en el que puedes confiar</h2>
          <p className="p-about">En Mangocash, te ayudamos a tener tus finanzas al día sin vueltas. Sabemos que llevar las cuentas puede ser un bajón, pero con nosotros es tan fácil como pelar un mango. Acá lo que importa es que vos sepas en qué se te va la plata, y nosotros te damos una mano para que llegues a fin de mes sin dramas.</p>
      </div>

      <div className="container-row-about">
        <div className="container-left-about">
          <img className="about-img" src={TruenoIconPNG} />
          <h3 className='h3-about'>Gestion eficiente</h3>
          <p className='p-v2-about'>Te ofrecemos analisis detallado y funciones intuitivas para una experiencia facil y precisa. Te ayudamos a tomar mejores decisiones financieras.</p>
        </div>
        <div className="container-right-about">
          <img className="about-img" src={LibroIconPNG} />
          <h3 className='h3-about'>Educación Financiera</h3>
          <p className='p-v2-about'>Tu educación nos importa. A medida que aprendes mas sobre el manejo de tu dinero, tendrás una mejor visión de tus finanzas y como optimizarlas. Nuestro blog te acompaña en cada paso del proceso.</p>
        </div>
      </div>
      </section>
    </div>
  );
}

export default PorqueElegirnos;