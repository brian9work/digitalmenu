import React from 'react';
import sushiMakiBack from '../../assets/sushiMaki/back.png';
import sushiMakiLogo from '../../assets/sushiMaki/logo.png';
import oyamelBack from '../../assets/oyamel/back.png';
import oyamelBack2 from '../../assets/oyamel/back2.jpg';
import oyamelLogo from '../../assets/oyamel/logo.jpg';
import menuOyamel1 from "../../assets/pictures/menuOyamel1.png";
import menuOyamel2 from "../../assets/pictures/menuOyamel2.png";
import menuOyamel3 from "../../assets/pictures/menuOyamel3.png";
import menuOyamel4 from "../../assets/pictures/menuOyamel4.png";
import qrElPortal from "../../assets/pictures/qrElPortal.png";
import qrElPortal2 from "../../assets/pictures/qrElPortal2.png";
import qrElPortal3 from "../../assets/pictures/qrElPortal3.png";
import qrSushiMaki from "../../assets/pictures/qrSushiMaki.png";
import qrSushiMakiHorizontal from "../../assets/pictures/qrSushiMakiHorizontal.png";

const Api = {
    services: [
        {text:"Conoce la ubicación de tus clientes",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth="2" d="M17.5,6.5 L23,9 L23,22 L16,19 L8,22 L1,19 L1,6 L6,8 M16,19 L16,12 M8,22 L8,12 M12,16.2727273 C12,16.2727273 6,11.5 6,7 C6,3.25 9,1 12,1 C15,1 18,3.25 18,7 C18,11.5 12,16.2727273 12,16.2727273 Z M13,7 C13,6.44766667 12.5523333,6 12,6 C11.4476667,6 11,6.44766667 11,7 C11,7.55233333 11.4476667,8 12,8 C12.5523333,8 13,7.55233333 13,7 Z"></path></svg>},
        {text:"Recibe sus órdenes  por WhatsApp",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path></svg>},
        {text:"Accede escaneando un código QR",icon:<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="5" x="3" y="3" rx="1"></rect><rect width="5" height="5" x="16" y="3" rx="1"></rect><rect width="5" height="5" x="3" y="16" rx="1"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>},
        {text:"Cualquier cambio en el menú se hará en segundos",icon:<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>},
        {text:"Facilidades de pago",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth="2" d="M16,16 C16,14.8954305 12.8659932,14 9,14 C5.13400675,14 2,14.8954305 2,16 C2,17.1045695 5.13400675,18 9,18 C12.8659932,18 16,17.1045695 16,16 Z M2,16 L2,20.9367547 C2,22.0762536 5.13400675,23 9,23 C12.8659932,23 16,22.0762537 16,20.9367548 L16,16 M9,5 C4.581722,5 1,5.8954305 1,7 C1,8.1045695 4.581722,9 9,9 M1,7 L1,12.0000002 C1,13.0128881 4.581722,14 9,14 M23,4 C23,2.8954305 19.9004329,2 16.0769231,2 C12.2534133,2 9.15384615,2.8954305 9.15384615,4 C9.15384615,5.1045695 12.2534133,6 16.0769231,6 C19.9004329,6 23,5.1045695 23,4 Z M16,16 C19.8235098,16 23.0000002,15.0128879 23.0000002,14 L23,4 M9.15384615,3.99999999 L9.15384615,14.1660042 M8.99999999,9.00000001 C8.99999999,10.0128879 12.2534135,11 16.0769233,11 C19.9004331,11 23.0000004,10.0128879 23.0000004,9.00000001"></path></svg>},
        {text:"Crea y personalisa tu menú",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M227.9,152.72l-39.7,14.44-35.74-14.3a12,12,0,0,0-8.92,0L108,167.08,72.46,152.86a12,12,0,0,0-8.56-.14l-44,16a12,12,0,0,0,8.2,22.56l8.12-2.95A44.06,44.06,0,0,0,80,228h96a44.05,44.05,0,0,0,44-44v-2.87l16.1-5.85a12,12,0,0,0-8.2-22.56ZM176,204H80a20,20,0,0,1-20-20v-4.32l7.8-2.84,35.74,14.3a12,12,0,0,0,8.92,0L148,176.92l35.54,14.22a12,12,0,0,0,8.56.14l2.89-1.06A20,20,0,0,1,176,204ZM12,128a12,12,0,0,1,12-12H232a12,12,0,0,1,0,24H24A12,12,0,0,1,12,128Zm36.2-24H207.8a20.36,20.36,0,0,0,16.38-8.29,19.59,19.59,0,0,0,2.88-17.65C216.12,43.88,175.39,20,128,20S39.89,43.87,28.94,78.05A19.56,19.56,0,0,0,31.82,95.7,20.32,20.32,0,0,0,48.2,104ZM128,44c33.7,0,63.61,14.85,74,36H54C64.4,58.85,94.31,44,128,44Z"></path></svg>}
    ],
    references:[
        {img:sushiMakiBack,cat:"Menú Online",link:"/sushi",des:"Sistema para ordenar sushi a domicilio",restaurant:{logo:sushiMakiLogo,name:"Sushi Maki",loc:"Calpulalpan, Tlaxcala"}},
        {img:oyamelBack,cat:"Menú Online",link:"/burguers",des:"Sistema para ordenar sushi a domicilio",restaurant:{logo:oyamelLogo,name:"Oyamel",loc:"Nanacamilpa, Tlaxcala"}},
        {img:oyamelBack2,cat:"Diseño de menú",link:"/burguers/menu",des:"Sistema para ordenar Hamburguesas",restaurant:{logo:oyamelLogo,name:"Oyamel",loc:"Nanacamilpa, Tlaxcala"}}
    ],
    pictures:[
        {img:menuOyamel1,desc:"Página 1 de un menú para un restaurante de hamburguesas a la parrilla/carbón",info:"activo"},
        {img:menuOyamel2,desc:"Página 2 de un menú para un restaurante de hamburguesas a la parrilla/carbón",info:"activo"},
        {img:menuOyamel3,desc:"Página 3 de un menú para un restaurante de hamburguesas a la parrilla/carbón",info:"activo"},
        {img:menuOyamel4,desc:"Página 4 de un menú para un restaurante de hamburguesas a la parrilla/carbón",info:"activo"},
        {img:qrElPortal,desc:"Diseño preliminar de un QR para escanearse de un menú digital",info:"Inactivo"},
        {img:qrElPortal2,desc:"Diseño preliminar de un QR para escanearse de un menú digital",info:"Inactivo"},
        {img:qrElPortal3,desc:"Diseño preliminar de un QR para escanearse de un menú digital",info:"Inactivo"},
        {img:qrSushiMaki,desc:"Diseño preliminar de un QR para escanearse de un menú digital",info:"activo"},
        {img:qrSushiMakiHorizontal,desc:"Diseño preliminar de un QR para escanearse de un menú digital de manera horizontal",info:"activo"},
    ],
    questions:[
        {question:"¿Cuánto tiempo lleva implementar estos servicios en mi restaurante?",response:"El tiempo dependerá de la información que me proporcione, además de la disposición que el cliente tenga"},
        {question:"¿Cuáles son los costos asociados con sus servicios?",response:"Los costos pueden ser muy variados, dependiendo de lo que usted guste que se agregue en su menú, ya sea servicio a domicilio, ubicación por GPS o solo que se muestre su menú, puede ir desde los $250.00 MXN mensuales."},
        {question:"¿En cuánto tiempo se actualiza mi información en el caso de que quiera cambiar mi menú?",response:"El tiempo dependerá del tamaño de la modificación pero podría tardar desde un par de minutos"},
        {question:"¿Puedo personalizar el diseño de mi página web y menú digital?",response:"Puede personalizar todo lo que usted guste, además de tomar asesorías con el equipo de desarrollo para que usted este de acuerdo con el diseño, hasta que usted no este de acuerdo no se empezara a cobrar la mensualidad"},
    ]
}

export default Api;
