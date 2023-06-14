# Cron jobs

By scheduling a newsletter or autoresponder, a program (called cron), has to check periodically whether the date/time of scheduled messages has passed.

Without that, emails wouldn't be sent automatically, waiting for you to trigger sending manually.

OSEMS uses a built-in Node.js cron job scheduler, so you don't need to worry about setting that manually at all. Though, you can change the frequency if you want by editing [`src/libs/cron.ts`](https://github.com/adrianbienias/osems/blob/main/src/libs/cron.ts) file.

## Serverless hosting limitations

It's important to point out that some serverless hosting providers (e.g. Vercel), don't allow you to run cron jobs with frequency that OSEMS required.

It's an important factor to be aware of when choosing hosting provider (DigitalOcean App Platform handles cron jobs with no issues).

In addition, hosting an app as serverless functions gives you a timeout limitations.

Sending large newsletters can take even hours to complete (sending with a threshold of 10 emails per sec gives you 36 000 outbound emails capacity per hour).

So keep in mind that a serverless function timeout may not allow it to run that long.
