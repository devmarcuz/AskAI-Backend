# AskAI - Backend

This is the backend server for the AskAI project, which provides an API for the frontend to communicate with OpenAI's GPT-3 API.

# Environment Variables

The following environment variables need to be set before starting the server:

- `OPENAI_API_KEY` - Your OpenAI API key. You can find it in your OpenAI dashboard.
- `PORT` - The port number on which the server will listen. The default value is `5000`.

You can set these variables in a `.env` file in the root directory of the project.

```makefile
OPENAI_API_KEY=<your_api_key_here>
PORT=5000
```

## Starting the Server

To start the server, run the following command:

```sql
npm start
```

This will start the server on the port specified in the `PORT` environment variable.

## API Routes

The following API routes are available:

## POST /api/question

This route generates a response from OpenAI's GPT-3 API based on the user's message.

Request Body

```json
{
  "message": "<user_message_here>"
}
```

Response Body

```json
{
  "response": "<generated_response_here>"
}
```

## Technologies Used

- Node.js
- Express
- Axios
- Dotenv
