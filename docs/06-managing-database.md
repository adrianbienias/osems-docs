# Managing database

Besides of using OSEMS dashboard, you can interact with the database more directly.

OSEMS uses [Prisma](https://www.prisma.io/), that comes with a handy _Studio_, which is a simple yet powerful GUI database browser.

To run it, use the following command in terminal:

```
npx prisma studio
```

If you want to interact with a production database, and its Prisma's schema differs (because uses e.g. MySQL instead of SQLite, like in [OSEMS' PlanetScale branch](https://github.com/adrianbienias/osems/blob/planetscale/prisma/mysql.schema.prisma)) simply provide a flag pointing to that schema:

```
npx prisma studio --schema=./prisma/mysql.schema.prisma
```

Prisma Studio will connect then with a production database.
