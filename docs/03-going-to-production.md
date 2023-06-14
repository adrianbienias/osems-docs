# Going to production

Everything is about to set a proper environment variables. An example of `.env` files is provided in repo.

For production environment, make sure that `APP_ENV=production` is set.

In development environment, authorization for admin dashboard is turned off by default. In production environment it's automatically activated.

You can turn it on for testing in development environment by editing [`src/middleware.ts`](https://github.com/adrianbienias/osems/blob/main/src/middleware.ts#L78) file.

If you're using DigitalOcean App Platform, remove [`APP_URL`](https://github.com/adrianbienias/osems/blob/main/.env.example#L6) variable from `.env`.

Set `INITIAL_ADMIN_EMAIL`. It's used to authorize access to the dashboard. Make sure to provide a valid one, otherwise you won't be able to log in to admin panel.

Also, you need to set `EMAIL_SERVER_*` variables, providing credentials of SMTP server, that you're going to use to handle sending your emails.

## PlanetScale branch

If you decide to use PlanetScale as your database, OSEMS has [a branch](https://github.com/adrianbienias/osems/tree/planetscale) already prepared for that purpose.
