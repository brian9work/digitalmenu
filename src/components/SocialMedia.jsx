import React from 'react';

const SocialMedia = ({data}) => {
    console.log(data);
    return (
        <div className='socialMedia'>
            {data.map((d,index)=>{
                return (
                    <a  style={{color:d.color}}
                        key={index} 
                        href={d.link} 
                        target='_blank'
                    >
                        {d.icon}
                    </a>
                    // <h1 key={index}>{d.name}</h1>
                )
            })}
            {/* <h1>SocialMedia</h1>
            <h1>SocialMedia</h1>
            <h1>SocialMedia</h1> */}
        </div>
    );
}

export default SocialMedia;
