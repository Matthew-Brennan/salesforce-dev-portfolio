import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="slds-global-header slds-p-around_medium">
      <nav className="slds-grid slds-align_absolute-center">
        <div className="slds-grid slds-col slds-grid_align-spread">
          <div className="slds-grid">
            <Link to="/" className="slds-p-horizontal_small">Home</Link>
            <Link to="/contact" className="slds-p-horizontal_small">Contact</Link>
          </div>
          <div className="slds-grid slds-grid_vertical-align-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}