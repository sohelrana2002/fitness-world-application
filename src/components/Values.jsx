import ValuesImage from "../assets/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "./Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img src={ValuesImage} alt="Values Image" />
          </div>
        </div>
        <div className="values_right">
          <SectionHead icons={<GiCutDiamond />} title="Values" />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem voluptatum dignissimos voluptates ea vitae! Cumque.
          </p>

          <div className="values_wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values_value" key={id}>
                  <div className="program_image">
                    <img className="code_image" src={icon} alt="values Code Image" />
                  </div>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
