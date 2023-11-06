import { useRouteError } from 'react-router-dom';

const CareerError = () => {
  const error = useRouteError() as Error;

  return (
    <div className="career-error">
      <h2>Error</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default CareerError;
