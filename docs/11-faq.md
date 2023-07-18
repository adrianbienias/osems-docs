# FAQ

## Does OSEMS handle plain text emails along with HTML?

Yes. Plain text versions are automatically generated based on HTML templates, using [node-html-to-text](https://github.com/html-to-text/node-html-to-text) library.

Even if sending plain text may sound optional, it's encouraged to send it along HTML in order to satisfy spam filters.

> "Spam filters like to see a plain text alternative. HTML-only emails are a red flag for spam filters."
>
> \- [Learn Why Plain Text Emails Still Work and How to Use Them - Litmus](https://www.litmus.com/blog/best-practices-for-plain-text-emails-a-look-at-why-theyre-important/)

## What frameworks/libraries/packages OSEMS uses?

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

On the frontend side, data is fetched by [SWR](https://swr.vercel.app/) to cache request and handle polling.

Emails are sent with [Nodemailer](https://nodemailer.com/about/).

For auth [JWT](https://jwt.io/) is used with simple custom magic link mechanism.
