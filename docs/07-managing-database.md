# Managing database

Besides of using OSEMS dashboard, you can interact with the database more directly.

OSEMS uses [Prisma](https://www.prisma.io/), that comes with a handy _Studio_, which is a simple yet powerful GUI database browser.

To run it, use the following command in terminal:

```
npx prisma studio --schema=./prisma/schema.postgres.prisma
```

pointing to a schema used in a database of your choice.

## Railway

If you're using [Railway](https://railway.app/) for deploying the app, it offers a really handy dashboard for administrating databases.

Learn more in their documentation: [Database View | Railway Docs](https://docs.railway.app/databases/database-view#sql-interfaces).
