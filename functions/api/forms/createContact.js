const createContact = async (fieldsData) =>
{
  const dataObj = {
    ...fieldsData,
  };

  const req = '/api/form';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObj),
  };

  const response = await fetch(req, options).then((res) => res);

  if (!response.ok)
  {
    throw new Error('Form submitting error');
  }

  return response;
};

export default createContact;
