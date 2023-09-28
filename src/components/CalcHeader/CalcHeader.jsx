import './CalcHeader.css';

function CalcHeader({ children, theme }) {
    return (
        <header className={`header-calc ${theme}`}>
            {children}
        </header>
    );
}

export { CalcHeader };