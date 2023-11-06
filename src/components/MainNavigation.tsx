import { NavLink } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <h1>Job Router</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="careers">Careers</NavLink>
      </nav>
      <BreadCrumbs />
    </header>
  );
};

export default MainNavigation;
