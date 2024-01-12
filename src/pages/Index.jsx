import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Header from './index/Header';
import '../styles/index.css'
import Section from './index/Section';
import BoxShadow from '../components/BoxSHadow';
import Api from './index/Api';
import Footer from './index/Footer';

const Index = () => {
    return (
        <div className=''>
            <Header />
            <Section text={"Accede a mas clientes"} className={"info"}>
                <p className='content-section-text'>Nos enorgullece ofrecer soluciones digitales innovadoras para llevar la experiencia gastronómica de tu restaurante al siguiente nivel. Nos especializamos en la creación de menús digitales, páginas web personalizadas y sistemas de pedidos online que transformarán por completo la forma en que tu negocio interactúa con los clientes.</p>
            </Section>
            <Section text={"Servicios"} className={"services"}>
                {Api.services.map((servicio, index) => {
                    return (
                        <BoxShadow key={index}>
                            <span>
                                {servicio.icon}
                            </span>
                            <p>{servicio.text}</p>
                        </BoxShadow>
                    )
                })}
            </Section>
            <Section text={"Referencias"} className={"references"}>
                {Api.references.map((refe, index) => {
                    return (
                        <BoxShadow key={index}>
                            <Link to={refe.link}>
                                <img src={refe.img} alt='jeje'/>
                                <div>
                                    <b>{refe.cat}</b>
                                    <h3>{refe.des}</h3>
                                </div>
                                <section>
                                    <img src={refe.restaurant.logo} alt='jeje'/>
                                    <div>
                                        <h2>{refe.restaurant.name}</h2>
                                        <h3>{refe.restaurant.loc}</h3>
                                    </div>
                                </section>
                            </Link>
                        </BoxShadow>
                    )
                })}
            </Section>
            <Section text={"Galeria"} className={"pictures"}>
                {Api.pictures.map((pic, index) => {
                    return (
                        <div key={index}>
                            <img src={pic.img} alt={pic} />
                            <section>
                                <h3>{pic.desc}</h3>
                                <p>{pic.info}</p>
                            </section>
                        </div>
                    )
                })}
            </Section>
            <Section text={"Preguntas Frecuentes"} className={"questions"}>
                {Api.questions.map((ques,index) => {
                    // scrollHeight
                    const [scrollHeight,setScrollHeight] = useState("4rem");
                    return(
                        <div key={index} style={{height:scrollHeight}} >
                            <div onClick={e =>{
                                    console.log("click")
                                    console.log(e.target.parentElement.scrollHeight)
                                    console.log(e.target)
                                    console.log(e.target.parentElement)
                                    setScrollHeight(scrollHeight === "4rem" ? e.target.parentElement.scrollHeight + "px" : "4rem")
                                }}
                            >
                                <h3>{ques.question}</h3>
                                <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></span>
                            </div>
                            <p>{ques.response}</p>
                        </div>
                    )
                })}
            </Section>
            <Footer />
        </div>
    );
}

export default Index;
