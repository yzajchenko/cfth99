import Input from "../Input/";
import Textarea from "../Textarea/";
import Checkbox from "../Checkbox/";
import "./styles.css";
const FormPageLayout = ({
  handleChange,
  optionValue,
  handleSubmit,
  formValue,
}) => {
  const { input, textarea, checkbox } = formValue;
  return (
    <>
      <form className="option" onSubmit={(event) => handleSubmit(event)}>
        <label>
          <p>Input:</p>
          <input
            type="number"
            min={0}
            name="input"
            value={optionValue.input}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          <p>Textarea:</p>
          <input
            type="number"
            min={0}
            name="textarea"
            value={optionValue.textarea}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          <p>Checkbox:</p>
          <input
            type="number"
            min={0}
            name="checkbox"
            value={optionValue.checkbox}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <input className="btn" type="submit" value="Build" />
      </form>
      <form className="form">
        <Input input={input} />
        <Textarea textarea={textarea} />
        <Checkbox checkbox={checkbox} />
      </form>
    </>
  );
};

export default FormPageLayout;
