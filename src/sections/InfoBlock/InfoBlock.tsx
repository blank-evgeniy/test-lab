import InfoBlockData from "../../data/InfoBlockData";
import "./InfoBlock.css";

const InfoBlock = () => {
  return (
    <section className="container">
      <div className="info-block">
        {InfoBlockData.map((item, index) => (
          <div className="info-block__section" key={index}>
            <p className="info-block__section-title">{item.title}</p>
            <p className="info-block__section-content">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoBlock;
