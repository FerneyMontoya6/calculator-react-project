import './CalcContainer.css';

function CalcContainer({ children, theme }) {
    return (
        <main className={`calc-container ${theme}`}>
            { children }
        </main>
    );
}

export { CalcContainer };