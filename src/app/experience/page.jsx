import "../../../styles/experience.modules.css";
import "../../../styles/globals.css";

export default function experiencePage() {
  return (
    <div className="animate__animated animate__bounceInDown content">
      <div className="neonText">
        <h2 className="animate__animated animate__flash ">
          Experiencia Laboral
        </h2>
      </div>
      <div className="ghost">
        <div className="ghost_head">
          <div className="ghost_left_eye ghost_eye"> </div>
          <div className="ghost_smile"></div>
          <div className="ghost_right_eye ghost_eye"></div>
        </div>
        <div className="ghost_bottom">
          <div className="ghost_floaty" id="ghost_floaty_1"></div>
          <div className="ghost_floaty" id="ghost_floaty_2"></div>
          <div className="ghost_floaty" id="ghost_floaty_3"></div>
          <div className="ghost_floaty" id="ghost_floaty_4"></div>
          <div className="ghost_floaty" id="ghost_floaty_5"></div>
        </div>
        <div className="shadow"></div>
      </div>


    </div>
  );
}
