# Simple Echo Server

A simple echoing server that supports a GET request and a POST request.

## Quick start

Install dependencies:
```sh
npm install
```

Run the server:
```sh
npm start
```

## API
**GET /:text**

Returns the text sent in the URL

eg:

**http://localhost:3000/hello**

Will return

*You said hello*

**POST /echo**
**Body: **
```json
{
    "text": "Text to echo"
}
```