export const careersLoader = async () => {
  const response = await fetch('http://localhost:4000/careers');

  if (!response.ok) {
    throw Error('Could not contact the server');
  }

  return await response.json();
};
