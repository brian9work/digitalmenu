import React, {useState} from 'react';
import img from '../../assets/background1.jpg'

const Header = () => {
    const [menu,setMenu] = useState(false)
    return (
        <header className={menu ? "activemenu" : ""}>
            <section>
                <img src={img} alt='Imagen de fondo Menu digital' />
                <div className="fondo">
                    <section>
                        <div>
                            <h2>Menu Digital</h2>
                            <p>Nosotros nos encargamos de facilitar te tu trabajo y comunicar te con tus clientes</p>
                            <a href='https://api.whatsapp.com/send?phone=527491086498&text=Hola+vi+tu+pagina+en+internet.' target='_blank'>Contactar</a>
                        </div>
                    </section>
                </div>
            </section>
            <nav>
                <div>
                    <h1><a href="https://brian9work.github.io/digitalmenu/" target='_blank'>Menu Digital</a></h1>
                    <div>
                        <main>
                            <a onClick={e =>{setMenu(false)}} href="https://brian9work.github.io/" target='_blank'>Portafolio</a>
                            <a onClick={e =>{setMenu(false)}} href="#services">Servicios</a>
                            <a onClick={e =>{setMenu(false)}} href="#references">Referencias</a>
                            <a onClick={e =>{setMenu(false)}} href="#questions">Preguntas</a>
                        </main>
                        <a href='https://api.whatsapp.com/send?phone=527491086498&text=Hola+vi+tu+pagina+en+internet.' target='_blank'>Contactar</a>
                    </div>
                    <span className="menu"
                        onClick={e => {
                            setMenu(!menu)
                        }}
                    >
                        <label className="hamburger">
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
