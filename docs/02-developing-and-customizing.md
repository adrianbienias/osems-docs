# Developing and customizing

In development environment, authorization for admin dashboard is turned off.

You can turn it on for development purposes by editing [`src/middleware.ts`](https://github.com/adrianbienias/osems/blob/main/src/middleware.ts#L78) file.

## Public pages

Pages inside `/src/pages/public` are publicly available.

You can put there your own React components that will be served as standalone pages.

Also, you can edit existing example pages:

- `confirmation-required.tsx`
- `subscribed-successfully.tsx`
- `unsubscribed.tsx`

They are used as a default pages for certain user actions (as long as you point to them in _List details_ in dashboard).
