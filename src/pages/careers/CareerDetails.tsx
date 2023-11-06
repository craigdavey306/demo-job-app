import { useLoaderData } from 'react-router-dom';
import { Job } from './Careers';

const CareerDetails = () => {
  const career = useLoaderData() as Job;

  return (
    <div className="career-details">
      <h2>Job Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed
          quasi rerum molestiae beatae veniam, neque sequi aliquid architecto
          ratione, suscipit explicabo nemo laborum sint similique deserunt
          ducimus repellendus omnis?
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;
