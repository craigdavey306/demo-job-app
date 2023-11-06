import { ActionFunctionArgs, ParamParseKey, Params } from 'react-router-dom';

const Paths = {
  id: 'careers/:id',
};

interface CareerDetailLoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.id>>;
}

export const careerDetailsLoader = async ({
  params,
}: CareerDetailLoaderArgs) => {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/careers/${id}`);

  if (!response.ok) {
    throw Error('Could not find the career');
  }

  return response.json();
};
