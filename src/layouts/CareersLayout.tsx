import { Outlet } from 'react-router-dom';

const CareerLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum alias
        consequuntur mollitia quae. Alias, soluta consectetur dicta laborum,
        ipsam minus odit quas eligendi aut iste, accusamus repellendus officia
        illum veniam.
      </p>

      <Outlet />
    </div>
  );
};

export default CareerLayout;
