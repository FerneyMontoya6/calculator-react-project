import './Title.css';

function Title({ text, theme }) {
    return (
        <h1 className={`calc-title ${theme}`}>
            {text}
        </h1>
    );
}

export { Title };