import { ActionFunctionArgs, redirect } from 'react-router-dom';

export const contactAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();

  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  };

  // send post request here

  if (!submission.message || submission.message.toString().length < 10) {
    return { error: 'Message must be at least 10 characters long.' };
  }

  return redirect('/');
};
