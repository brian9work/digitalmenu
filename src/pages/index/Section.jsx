import React from 'react';
import BoxShadow from '../../components/BoxSHadow';

const Section = ({text, varClassName, children }) => {
    return (
        <div className={`content ${varClassName}`} id={varClassName}>
            <section className='content-section'>
                <span></span>
                <h2>{text}</h2>
                <span></span>
            </section>
            <nav className={`${varClassName}`}>
                {/* <BoxShadow> */}
                    {children}
                {/* </BoxShadow> */}
            </nav>
        </div>
    );
}

export default Section;
