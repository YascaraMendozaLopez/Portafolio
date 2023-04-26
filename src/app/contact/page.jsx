import '../../../styles/contact.modules.css'
import '../../../styles/globals.css'
import Link from 'next/link'

export default function contactPage() {
    return (
        <div className='animate__animated animate__bounceInDown content'>
            <div className='neonText'>
                <h2 className='animate__animated animate__flash '>Contactame !
                </h2>
            </div>
            <div className="info2">
                <Link className='W  animate__animated animate__heartBeat'
                    href={'https://wa.me/qr/https://github.com/YascaraMendozaLopez?tab=repositories'}><i className="fab fa-github"/></Link>
                <Link className='G animate__animated animate__heartBeat'
                    href={'https://wa.me/qr/KJ4SK2VBMJDCL1'}><i className="fab fa-whatsapp"/></Link>
                <Link className='C '
                    href={'https://mail.google.com/mail/?view=cm&fs=1&to=marianedmendozalopez@gmail.com'}><i className="fas fa-envelope"/></Link>
            </div>

        </div>
    )
}
