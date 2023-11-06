import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>The page you were looking for does not exist.</p>
      </main>
    </>
  );
};

export default ErrorPage;
