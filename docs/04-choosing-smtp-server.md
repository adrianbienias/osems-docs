# Choosing SMTP server

OSEMS works as BYO SMTP service (_Bring Your Own_).

You use SMTP server of your choice in order to send email messages via OSEMS.

In my opinion, the king here is [Amazon SES](https://aws.amazon.com/ses/) that allows you to send emails for a flat price $0.10 per 1000 emails.

Amazon SES allows you to use whatever domain you control as a sender of your emails.

Of course, you can use whatever SMTP server suits you, but from my research there's no better SMTP service in terms of price/reliability.

You can also start with some free SMTP servers. But have in mind that typical email services (like e.g. Gmail), have a quite low daily limits for outbound emails ([around 500](https://support.google.com/mail/answer/22839?hl=en#zippy=%2Cyou-have-reached-a-limit-for-sending-mail)) or if you're a [Google Workspace](https://support.google.com/a/answer/166852?hl=en#zippy=%2Cconvert-to-a-paid-account) user, that limit can go up to 2000 (for 24-hour period).

In order to use Gmail SMTP, you may need to create [App Password](https://support.google.com/accounts/answer/185833) for your Google Mail to later use it as SMTP password (probably you'll also need to enable 2-Step Verification for your Google account to enable setting App Password).

More info:

- [Send an email from your alias in Gmail - Google Domains Help](https://support.google.com/domains/answer/9437157)
- [Send email from a printer, scanner, or app - Google Workspace Admin Help](https://support.google.com/a/answer/176600)

Example Gmail SMTP settings:

```
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-name@gmail.com
EMAIL_SERVER_PASSWORD=google-generated-app-password
NEXT_PUBLIC_EMAIL_FROM=Your Name <your-name@gmail.com>
```
