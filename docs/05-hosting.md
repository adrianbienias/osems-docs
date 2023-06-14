# Hosting

You can deploy OSEMS on a regular VPS, but then you need to manage few server administration related things (e.g. hardening security) on your own. So that can be unnecessary overhead, especially for the beginning.

The other, and much simple choice, is to use a serverless hosting provider.

One of such platforms, which I use by myself, is [App Platform](https://www.digitalocean.com/products/app-platform?refcode=80e257abf861) from DigitalOcean.

Why is it good? You're getting out of the box a free subdomain for your app with SSL/TLS certificate, and easy to manage deployment process for as low as $5/month.

Aside from hosting the app, you also need a database. My suggestion for a serverless database is [PlanetScale](https://planetscale.com/). They offer a generous, free hobby plan with 5 GB storage.

This allows you to store millions of emails addresses for free!
