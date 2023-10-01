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

function App() {
  const themes = ["theme-default", "theme-white", "theme-gamer"];

  const [valueInput, setValueInput] = useState("");
  const [themeToggle, setThemeToggle] = useState(themes[0]);

  const bodyThemes = {
    "theme-default": "hsl(222, 26%, 31%)",
    "theme-white": "hsl(0, 0%, 90%)",
    "theme-gamer": "hsl(268, 75%, 9%)",
  };
  document.querySelector("body").style.backgroundColor =
    bodyThemes[themeToggle];

  return (
    <>
      <CalcContainer theme={themeToggle}>
        <CalcHeader>
          <Title text="calc" />
          <ToggleContainer>
            <TextToggleDescription text="THEME" />
            <Toggle themeToggle={themeToggle} setThemeToggle={setThemeToggle} />
          </ToggleContainer>
        </CalcHeader>

        <Input value={valueInput} setValueInput={setValueInput} />

        <ButtonsContainer>
          {buttons.map((button, index) => (
            <Button
              key={index}
              index={index}
              type={button.type}
              value={button.value}
              size={button.size}
              valueInput={valueInput}
              setValueInput={setValueInput}
            />
          ))}
        </ButtonsContainer>
      </CalcContainer>
    </>
  );
}

export default App;
