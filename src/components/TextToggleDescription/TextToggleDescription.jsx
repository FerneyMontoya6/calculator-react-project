import './TextToggleDescription.css';

function TextToggleDescription({ text, theme }) {
    return (
        <p className={`text-toggle-description ${theme}`}>
            {text}
        </p>
    );
}

export { TextToggleDescription };