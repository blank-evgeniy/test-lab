import { useState } from "react";
import Button from "../../shared/Button/Button";
import TextInput from "../../shared/TextInput/TextInput";
import "./FormSection.css";

const FormSection = () => {
  const [checkCorrect, setCheckCorrect] = useState(false);

  const [nameCorrect, setNameCorrect] = useState(false);
  const [name, setName] = useState("");

  const [telephoneCorrect, setTelephoneCorrect] = useState(false);
  const [telephone, setTelephone] = useState("");

  const nameValidation = (value: string) => {
    const isCorrect = value.length > 4;

    setNameCorrect(isCorrect);
    setTelephone(value);
    return isCorrect;
  };

  const telephoneValidation = (value: string) => {
    const reg = /^\+?[1-9][0-9]{7,14}$/;
    const isCorrect = reg.test(value);

    setTelephoneCorrect(isCorrect);
    setTelephone(value);
    return isCorrect;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name,
      telephone,
    };

    try {
      const response = await fetch("https://example.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Сеть ответила с ошибкой: " + response.status);
      }

      const data = await response.json();
      console.log("Успех:", data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const formCorrect = checkCorrect && nameCorrect && telephoneCorrect;

  return (
    <section className="form-section">
      <h2 className="form-section__title">Отправь форму</h2>

      <form className="form-section__form" onSubmit={handleSubmit}>
        <TextInput
          helpertext="Введите не менее 5 символов"
          hint="Имя"
          placeholder="Имя"
          validation={nameValidation}
        />
        <TextInput
          helpertext="Введите номер телефона"
          hint="Телефон"
          placeholder="Телефон"
          validation={telephoneValidation}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-section__checkbox"
            type="checkbox"
            id="agree"
            name="agree"
            defaultChecked={false}
            onChange={() => setCheckCorrect((prev) => !prev)}
          />
          <label className="form-section__checkbox-label" htmlFor="agree">
            Согласен, отказываюсь
          </label>
        </div>
        <Button
          disabled={!formCorrect}
          className="form-section__submit"
          type="submit"
        >
          Отправить
        </Button>
      </form>
    </section>
  );
};

export default FormSection;
