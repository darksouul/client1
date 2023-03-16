exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  // Your code to process the form data goes here
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submission successful' })
  };
};
