import { buttons } from "./utils/buttons-info";
import { Button } from "./components/Button/Button";
import { CalcContainer } from "./components/CalcContainer/CalcContainer";
import { CalcHeader } from "./components/CalcHeader/CalcHeader";
import { TextToggleDescription } from "./components/TextToggleDescription/TextToggleDescription";
import { Title } from "./components/Title/Title";
import { Toggle } from "./components/Toggle/Toggle";
import { ToggleContainer } from "./components/ToggleContainer/ToggleContainer";
import { Input } from "./components/Input/Input";
import { ButtonsContainer } from "./components/ButtonsContainer/ButtonsContainer";
import { useState } from "react";

let inputValueDefault = "";

function App() {
  const themes = ["theme-default", "theme-white", "theme-gamer"];

  const [valueInput, setValueInput] = useState(inputValueDefault);
  const [themeToggle, setThemeToggle] = useState(themes[0]);

  const buttonNumberClicked = (key) => {
    const btnValue = buttons[key].value;
    inputValueDefault += btnValue;

    setValueInput(inputValueDefault);
  };

  const buttonSymbolClicked = (key) => {
    const btnValue = buttons[key].value;
    const lastChar = inputValueDefault.charAt(inputValueDefault.length - 1);

    const symbols = ["+", "-", ".", "/", "x", "="];
    const symbolValidation = symbols.includes(lastChar);

    if (!symbolValidation) {
      inputValueDefault += btnValue;
    }

    setValueInput(inputValueDefault);
  };

  const buttonEqualsClicked = () => {
    const mathOperation = eval(inputValueDefault);
    buttonResetClicked();
    inputValueDefault = mathOperation.toString();
    setValueInput(mathOperation);
  };

  const buttonResetClicked = () => {
    inputValueDefault = "";

    setValueInput(inputValueDefault);
  };

  const buttonDeletionClicked = () => {
    inputValueDefault = inputValueDefault.slice(0, -1);

    setValueInput(inputValueDefault);
  };

  const changeTheme = () => {
    console.log(themeToggle);
  };

  return (
    <>
      <CalcContainer theme={themeToggle}>
        <CalcHeader theme={themeToggle}>
          <Title text="calc" theme={themeToggle} />
          <ToggleContainer>
            <TextToggleDescription text="THEME" theme={themeToggle} />
            <Toggle changeTheme={changeTheme} theme={() => themeToggle()} />
          </ToggleContainer>
        </CalcHeader>

        <Input value={valueInput} setValueInput={setValueInput} />

        <ButtonsContainer>
          {buttons.map((button, index) => (
            <Button
              key={index}
              type={button.type}
              value={button.value}
              size={button.size}
              onTouch={() => {
                return (
                  // Cambiar por objeto
                  button.type === "number"
                    ? buttonNumberClicked(index)
                    : button.type === "symbol"
                    ? buttonSymbolClicked(index)
                    : button.type === "deletion"
                    ? buttonDeletionClicked(index)
                    : button.type === "reset"
                    ? buttonResetClicked(index)
                    : button.type === "equals"
                    ? buttonEqualsClicked(index)
                    : "kjkhfsd"
                );
              }}
            />
          ))}
        </ButtonsContainer>
      </CalcContainer>
    </>
  );
}

export default App;
