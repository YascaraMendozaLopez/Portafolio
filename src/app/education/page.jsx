import "../../../styles/education.modules.css";
import "../../../styles/globals.css";
    
export default function educationPage() {    
    return (
        <div className="animate__animated animate__bounceInDown content">
            <div className="neonText">
                <h2 className="animate__animated animate__flash ">Educación</h2>
            </div>

            <div className="cursos">

                <div className="wrapper">
                    <div className="center-line">
                        <a href="#" className="scroll-icon" title="Ir arriba"><i className="fas fa-caret-up"/></a>
                    </div>
                    <div className="row row-1 animate__fadeInTopLeft">
                        <section>
                            <i className=" icon fas fa-solid fa-graduation-cap"/>

                            <div className="details">
                                <span className="title">BACHILLER EN HUMANIDADES</span>
                            </div>
                            <p>Culminé mis estudios como técnico humanistico en el colegio Santa Rosa "B".</p>
                            <div className="bottom">
                                <i>2014 - 2019</i>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2 animate__fadeInTopRight ">
                        <section>
                            <i className=" icon fas fa-solid fa-school"/>
                            <div className="details">
                                <span className="title">INGENIERIA EN SISTEMAS</span>
                           </div>
                            <p>Curso el septimo semestre en la carrera de Ingenieria en Sistemas en la Universidad Autónoma Tomás Frías en Potosí-Bolivia</p>
                            <div className="bottom">
                               <i>2020 -Act.</i>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1 animate__fadeInTopLeft">
                        <section>
                            <i className="icon fas fa-solid fa-laptop-code "/>
                            <div className="details">
                                <span className="title">CURSO LINUX DESDE CERO</span>
                                
                            </div>
                            <p>Cuento con el certificado otorgado por la Facultad Autodidacta, del curso Linux desde cero.</p>
                            <div className="bottom">
                                <i>20 agoto 2022</i>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2 animate__fadeInTopRight" >
                        <section>
                            <i className="icon fas fa-solid fa-terminal "/>
                            <div className="details">
                                <span className="title">FUNDAMENTOS DE GNU/LINUX CON SISTEMA GEEK</span>
                                
                            </div>
                            <p>Certificado otorgado por la culminación y aprobación de dicho curso en la facultad Autodidacta</p>
                            <div className="bottom">
                                <i>20 agosto 2022</i>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1 animate__fadeInTopLeft" >
                        <section>
                            <i className="icon fas fa-solid fa-user-secret "/>
                            <div className="details">
                                <span className="title">CCNAv7: INTRODUCCION A REDES</span>
                                
                            </div>
                            <p>Certificado otorgado por concluir en curso CCNAv7 en la Academia CISCO</p>
                            <div className="bottom">
                                <i>29 de octubre 2022</i>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2 animate__fadeInTopRight " >
                        <section>
                            <i className="icon far fa-edit"/>
                            <div className="details">
                                <span className="title">RECONOCIMIENTO CCNAv7: INTRODUCCION A REDES</span>
                                
                            </div>
                            <p>Carta de mérito otorgada por lograr el 75% o más en el examen finaldel curso CCNAv7 en la academia CISCO reconociendo la excelencia alcanzada</p>
                            <div className="bottom">
                                <i>29 octubre 2022</i>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1 animate__fadeInTopLeft" >
                        <section>
                            <i className="icon fas fa-file-code"/>
                            <div className="details">
                                <span className="title">LA INTELIGENCIA ARTIFICIAL</span>
                                <span>4 de Abril - 2013</span>
                            </div>
                            <p>Certificado otorgado por la participación en la conferencia magistral sobre la inteligencia artificil.</p>
                            <div className="bottom">
                                <i>20 de noviembre de 2022</i>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
