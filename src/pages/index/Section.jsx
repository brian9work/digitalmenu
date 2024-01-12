import React from 'react';
import BoxShadow from '../../components/BoxSHadow';

const Section = ({text, className, children }) => {
    return (
        <div className={`content ${className}`} id={className}>
            <section className='content-section'>
                <span></span>
                <h2>{text}</h2>
                <span></span>
            </section>
            <nav className={`${className}`}>
                {/* <BoxShadow> */}
                    {children}
                {/* </BoxShadow> */}
            </nav>
        </div>
    );
}

export default Section;
