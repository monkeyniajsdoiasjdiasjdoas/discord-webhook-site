let messages = [];

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const data = JSON.parse(event.body);

    messages.push({
      user: data.user,
      content: data.content,
      time: new Date().toISOString()
    });

    return {
      statusCode: 200,
      body: "OK"
    };
  }

  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(messages)
    };
  }

  return { statusCode: 405 };
};
