import { useState } from "react";
import classNames from "classnames";

import OkIcon from "../../img/form/ok.svg";
import CanselIcon from "../../img/form/cancel.svg";

import "./TextInput.css";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint: string;
  helpertext: string;
  validation?: (value: string) => boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  children,
  hint,
  helpertext,
  validation,
  ...otherProps
}) => {
  const [focused, setFocused] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = validation ? validation(event.target.value) : true;

    setIsOk(isValid);
    setIsCancel(!isValid);
  };

  return (
    <div
      className={classNames("input-container", {
        focused: focused,
        "is-ok": isOk,
        "is-cancel": isCancel,
      })}
    >
      {focused && <p className="input-hint">{hint}</p>}
      <input
        className="input"
        type="text"
        {...otherProps}
        onChange={(event) => handleChange(event)}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
      {isCancel && <p className="input-helpertext">{helpertext}</p>}
      {isCancel && <CanselIcon className="input-cancel" />}
      {isOk && <OkIcon className="input-ok" />}
    </div>
  );
};

export default TextInput;
