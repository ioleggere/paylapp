# Paylapp

A Node.js application built with TypeScript for handling payments.

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Zod](https://zod.dev/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Jest](https://jestjs.io/) — Unit testing
- [Nodemon](https://nodemon.io/) — Dev environment

## 📦 Installation

```bash
npm install
```

## ▶️ Running the Application

Create a `.env` file in the root directory based on the example below:

```
PORT=8080
```

Start the development server:

```bash
npm run dev
```

## 🐬 Running the Application with Docker

Run the command below to run directly:

```bash
docker compose up -d
```

Or build and run the image:

```bash
docker build -t paylapp .
```

```bash
docker run -p 3000:3000 paylapp
```

## ▶️ Usage

To create payments, use this route:
POST /api/payments/payment:

Body Example:
JSON:
{
  "id": 1,
  "value": 100.0,
  "paymentDue": "2025-05-15T00:00:00.000Z",
  "status": "paid",
  "paymentValue": 100.0,
  "paymentDate": "2025-05-01T00:00:00.000Z"
}

PS: In the payment description in the test, there were 2 values, as can be seen in the image:

![descriptiontest](./res/1.png)

Because of this, I thought about creating a variable called paymentValue, where it would be discounted from the amount (value), and, if it covered the payment amount, it would change the status to 'paid'. I will leave it as an issue for future implementation. For the original purpose of the challenge, adding this variable will not affect the original functionality.

To get all the payments, use this route:
GET /api/payments/

To get the payment by id, use this route:
GET /api/payments/{id} example:
to get payment with the id number 1:
GET /api/payments/1

To edit a payment, use this route:
PUT /api/payments/{id}

ID and Body Example:
PUT /api/payments/1
JSON:
{
  "value": 300.0,
  "status": "paid",
}


## 🧪 Running Tests

```bash
npm run test
```

## 📁 Project Structure

```
res/
src/
├── controllers/  # Request handlers
├── middleware/   # Handler for zod erros
├── models/       # Payment type Model
├── routes/       # Route definitions
├── schemas/      # Zod configuration for Payment Model
├── services/     # Business logic
├── app.ts        # Application entry point
tests/            # Jest Basic Tests
.env.example
jest.config.ts
package-lock.json
package.json
README.md
tsconfig.json
```