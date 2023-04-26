import '../../../styles/proyect.modules.css'
import '../../../styles/globals.css'
import Link from 'next/link'

export default function proyectPage() {
    return (
        <div className='animate__animated animate__bounceInDown content'>
            <div className='neonText'>
                <h2 className='animate__animated animate__flash '>Proyectos
                </h2>
            </div>
            <div class="containe">
               
                <div className="card1">
                    <h3><Link href="https://gitlab.com/yascara_mendoza/proyecto_2021.git">HALCYON</Link></h3>
                    <p>FrondEnd de una página donde se puede encontrar, música, audiolibros y audios de otros.</p>
                    <div className="img"></div>
                </div>
                <div className="card2">
                    
                    <h3><Link  href="https://gitlab.com/yascara_mendoza/proyecto_2021.git">FIGMA E-COMER</Link></h3>
                    <p>Diseño UI para un proyecto E-COMERCE, se carateriza por ser responsive, y tener una continuidad en los fondos</p>
                </div>

            </div>

        </div>
    )
}
