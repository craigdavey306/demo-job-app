import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
        minima dolorem maiores. Adipisci expedita sit illum quae quia sunt
        maiores ut impedit harum. Corporis ipsam recusandae illum, saepe
        mollitia quaerat.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
