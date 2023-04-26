import '../../../styles/skills.modules.css'
import '../../../styles/globals.css'



export default function skillsPage() {


    return (

        <div className='animate__animated animate__bounceInDown content'>
            <div className='neonText'>
                <h2 className='animate__animated animate__flash '>
                    Habilidades
                </h2>
            </div>
            <div className="skills">
                <div className="contain">
                    <div className="circular-progress p1">
                        <span className="progress-value">85%</span>
                    </div>

                    <div className="text"> 
                        <span>HTML & CSS</span>
                        <span>Escucha Activa</span>
                    </div>
                </div>
                <div className="contain">
                    <div className="circular-progress p2">
                        <span className="progress-value">45%</span>
                    </div>

                    <div className="text"> 
                        <span>REACT</span>
                        <span>Adaptación</span>
                    </div>
                </div>
                <div className="contain">
                    <div className="circular-progress p3">
                        <span className="progress-value">70%</span>
                    </div>

                    <div className="text"> 
                        <span>JAVA</span>
                        <span>Resolución de problemas</span>
                    </div>
                </div>

                <div className="contain">
                    <div className="circular-progress p4">
                        <span className="progress-value">80%</span>
                    </div>

                    <div className="text"> 
                        <span>FIGMA</span>
                        <span>Creatividad</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
