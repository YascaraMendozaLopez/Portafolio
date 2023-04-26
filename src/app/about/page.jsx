import '../../../styles/about.modules.css'
import '../../../styles/globals.css'
import Link from 'next/link'
export default function AboutPage() {
    return (
        <div className='animate__animated animate__bounceInDown content'>
            <div className='neonText'>
                <h2 className='animate__animated animate__flash '>Acerca de mi
                </h2>
            </div>
            <div className='about'>
                <div className='infon info'>
                    <p id='p1'>¡Hola! Soy Yáscara Mendoza,y soy una</p>
                    <p id='p2'>persona apasionada por desarrollar
                    </p>
                    <p id='p3'>soluciones creativas y eficientes para
                    </p>
                    <p id='p4'>problemas complejos. Actualmente estoy
                    </p>
                    <p id='p5'>estudiando la carrera de Ingeniería en
                    </p>
                    <p id='p6'>Sistemas, y me encuentro en una constante
                    </p>
                    <p id='p7'>búsqueda de nuevas habilidades y
                    </p>
                    <p id='p8'>conocimientos para poder aplicarlos en
                    </p>
                    <p id='p9'>el mundo de la tecnología.</p>
                    <p id='p10'>
                        Estoy emocionada por lo que el futuro
                    </p>
                    <p id='p11'>me depara, y estoy segura de que,
                    </p>
                    <p id='p12'>gracias a mi formación en Sistemas,</p>
                    <p id='p13'>estaré lista para enfrentar cualquier reto</p>
                    <p id='p14'>que se presente en mi carrera profesional.
                        <span>|</span>
                    </p>
                </div>
                <div className="infon infoR">
                    
                    <div className="info2">
                        <Link className='W  animate__animated animate__heartBeat'
                            href={'https://wa.me/qr/https://github.com/YascaraMendozaLopez?tab=repositories'}><i className="fab fa-github"/></Link>
                        <Link className='G animate__animated animate__heartBeat'
                            href={'https://wa.me/qr/KJ4SK2VBMJDCL1'}><i className="fab fa-whatsapp"/></Link>
                        <Link className='C '
                            href={'https://mail.google.com/mail/?view=cm&fs=1&to=marianedmendozalopez@gmail.com'}><i className="fas fa-envelope"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
