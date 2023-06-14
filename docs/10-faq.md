# FAQ

## Does OSEMS handle plain text emails along with HTML?

Yes. Plain text versions are automatically generated based on HTML templates, using [node-html-to-text](https://github.com/html-to-text/node-html-to-text) library.

Even if sending plain text may sound optional, it's encouraged to send it along HTML in order to satisfy spam filters.

> "Spam filters like to see a plain text alternative. HTML-only emails are a red flag for spam filters."
>
> \- [Learn Why Plain Text Emails Still Work and How to Use Them - Litmus](https://www.litmus.com/blog/best-practices-for-plain-text-emails-a-look-at-why-theyre-important/)
