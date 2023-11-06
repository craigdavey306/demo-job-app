import { useLoaderData, Link } from 'react-router-dom';

export interface Job {
  id: number;
  title: string;
  salary: number;
  location: string;
}

const Careers = () => {
  const careers = useLoaderData() as Job[];

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;
