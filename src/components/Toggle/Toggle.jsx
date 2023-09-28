import './Toggle.css';

function Toggle({ theme, changeTheme }) {
    return (
        <div className={`toggle ${theme}`}>
            <ul className={`toggle--numers-of-themes-container ${theme}`}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

            <div className={`toggle--circle-container ${theme}`} onClick={changeTheme}>
                <div className={`toggle--circle-container__circle ${theme}`}></div>
            </div>
        </div>
    );
}

export { Toggle };