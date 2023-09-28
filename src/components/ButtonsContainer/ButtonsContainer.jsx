import './ButtonsContainer.css';

function ButtonsContainer({ children, theme }) {
    return (
        <div className={`buttons-container ${theme}`}>
            {children}
        </div>
    );  
}

export { ButtonsContainer };