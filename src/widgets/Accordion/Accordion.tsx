import { useState } from "react";

import OpenIcon from "../../img/questions/open.svg";
import CloseIcon from "../../img/questions/close.svg";

import "./Accordion.css";

export interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [collapsedId, setCollapsedId] = useState(-1);

  const handleCollapse = (id: number) => {
    setCollapsedId((prev) => (prev === id ? -1 : id));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isCollapsed = index === collapsedId;

        return (
          <div className={"accordion__item"} key={index}>
            <div className="line" />

            <div
              onClick={() => handleCollapse(index)}
              className="accordion__head"
            >
              <p className="accordion__title">{item.title}</p>
              {isCollapsed ? (
                <CloseIcon className="accordion__btn" />
              ) : (
                <OpenIcon className="accordion__btn" />
              )}
            </div>

            {isCollapsed && (
              <p className="accordion__content">{item.content}</p>
            )}

            <div className="line" />
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
