import './ToggleContainer.css';

function ToggleContainer({ children, theme }) {
    return (
        <div className={`toggle-container ${theme}`}>
            {children}
        </div>
    );
}

export { ToggleContainer };