let messages = [];

exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);

    messages.push({
      username: body.username || "Discord",
      content: body.content || "",
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

  return {
    statusCode: 405,
    body: "Method Not Allowed"
  };
};
