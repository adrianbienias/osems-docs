# Technical details

OSEMS is build on top of [Next.js](https://nextjs.org/) framework.

It uses [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Node.js](https://nodejs.dev/en/).

For database operations it uses [Prisma](https://www.prisma.io/) ORM that allows you to connect with:

- PostgreSQL
- MySQL
- SQLite
- MongoDB
- CockroachDB
- Microsoft SQL Server

For visual styling, [Tailwind CSS](https://tailwindcss.com/) has been used.

Automated tests have been written in [Vitest](https://vitest.dev/) (similar tool to [Jest](https://jestjs.io/)).

Cron jobs are handled via [node-cron](https://github.com/node-cron/node-cron).

On the frontend side, data is fetch by [SWR](https://swr.vercel.app/) to cache request and handle polling.

Emails are sent with [Nodemailer](https://nodemailer.com/about/).

For auth [JWT](https://jwt.io/) is used with simple custom magic link mechanism.
