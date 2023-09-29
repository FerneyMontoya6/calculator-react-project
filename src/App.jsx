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
              index={index}
              type={button.type}
              value={button.value}
              size={button.size}
              valueInput={valueInput}
              setValueInput={setValueInput}
              theme={themeToggle}
            />
          ))}
        </ButtonsContainer>
      </CalcContainer>
    </>
  );
}

export default App;
