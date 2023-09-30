import "./Toggle.css";

const themes = ["theme-default", "theme-white", "theme-gamer"];

const changeTheme = (themeToggle, setThemeToggle) => {
  if (themeToggle === themes[0]) {
    setThemeToggle(themes[1]);
  } else if (themeToggle === themes[1]) {
    setThemeToggle(themes[2]);
  } else if (themeToggle === themes[2]) {
    setThemeToggle(themes[0]);
  }
};

function Toggle({ themeToggle, setThemeToggle }) {
  return (
    <div className={`toggle`}>
      <ul className={`toggle--numers-of-themes-container`}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

      <div
        className={`toggle--circle-container`}
        onClick={() => changeTheme(themeToggle, setThemeToggle)}
      >
        <div
          className={`toggle--circle-container__circle ${themeToggle}`}
        ></div>
      </div>
    </div>
  );
}

export { Toggle };
