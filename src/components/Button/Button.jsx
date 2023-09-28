import './Button.css'

function Button({ type, value, size, onTouch, theme }) {
    return(
        <button className={`
                btns-container--btn__${size}
                ${type}
                ${theme}
            `}
            onClick={onTouch}
        >
            {value}
        </button>
    )
}

export { Button };