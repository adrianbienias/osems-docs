# Intro

Hi 👋, I'm [Adrian Bienias](https://bienias.dev), developer behind this software.

## Motivation

During my career, I was using a lot of different email marketing solutions, but none of them suited my needs in terms of fair pricing.

Monthly billings by the size of the list sounded unfair to me (storing emails in databases isn't that expensive). Plans that billed for emails sent, were also overpriced.

That's why I brought this software to life.

## Pricing comparison (10 000 contacts example)

| Email service          | Monthly send limit | Monthly cost                   |
| ---------------------- | ------------------ | ------------------------------ |
| Mailchimp              | 100 000            | $100                           |
| AWeber                 | Unlimited          | $79.99                         |
| GetResponse            | Unlimited          | $79                            |
| **OSEMS** + Amazon SES | Unlimited          | $5 + $1 per 10 000 emails sent |

OSEMS is free of charge. $5 is the estimated cost of hosting the app.

For this app, personally I use and recommend [Railway](https://railway.app/).

You can find a guide on how to easily deploy this app in [Going to production](./03-going-to-production.mdx).

## What this software does?

You can create lists, embed customized signup forms on your websites, send newsletters to your subscribers, and schedule autoresponders.

OSEMS is free, but you need to host it somewhere and use SMTP server of your choice.

For SMTP the best option (in my opinion) is [Amazon SES](https://aws.amazon.com/ses/). They offer sending emails for as low as $0.10 per 1000 outbound emails (you pay only for what you send).

## Bugs and features

If you find that something doesn't work in this software properly, just [report a bug](https://github.com/adrianbienias/osems/issues).

If you would like to see some feature implemented in OSEMS, feel free to [submit a feature request](https://github.com/adrianbienias/osems/issues).

If you discover a typo or some misinformation in these docs, use _Edit this page_ feature.
