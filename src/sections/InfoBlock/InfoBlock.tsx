import InfoBlockData from "../../data/InfoBlockData";
import "./InfoBlock.css";

const InfoBlock = () => {
  return (
    <div className="container_gray">
      <section className="info-block">
        {InfoBlockData.map((item, index) => (
          <div className="info-block__section" key={index}>
            <p className="info-block__section-title">{item.title}</p>
            <p className="info-block__section-content">{item.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default InfoBlock;
