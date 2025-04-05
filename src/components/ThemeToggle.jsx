import { useTheme } from '../context/ThemeContext';
import '../style/ThemeToggle.css';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="slds-grid slds-grid_align-center theme-toggle-container">
      <label className="theme-switch">
        <input 
          type="checkbox" 
          checked={darkMode}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <span className="theme-slider slds-m-horizontal_x-small">
          <span className={`theme-icon ${darkMode ? 'moon' : 'sun'}`}>
            {darkMode ? '🌙' : '☀️'}
          </span>
        </span>
      </label>
    </div>
  );
}