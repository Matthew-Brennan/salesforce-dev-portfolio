import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <header className="slds-global-header slds-p-around_medium">
      <nav className="slds-grid slds-align_absolute-center">
        <Link to="/" className="slds-p-horizontal_small">Home</Link>
        <Link to="/contact" className="slds-p-horizontal_small">Contact</Link>
        <button 
          onClick={toggleTheme}
          className="slds-button slds-button_icon slds-m-left_auto"
          aria-label="Toggle theme"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </nav>
    </header>
  );
}