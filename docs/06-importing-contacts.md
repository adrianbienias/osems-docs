# Importing contacts

You can import contacts in bulk from CSV file.

CSV file can contain the following column headers:

```
email,listId,createdAt,confirmedAt,unsubscribedAt
```

`email` and `listId` are required, the rest are optional.

You can find `listId` in dashboard. When you edit a given list, its ID is available in URL

`https://<your-osems-app-domain>/lists/xxxxxxxx-yyyy-zzzz-vvvv-qqqqqqqqqqqq`

where `xxxxxxxx-yyyy-zzzz-vvvv-qqqqqqqqqqqq` is the `listId` of list being edited.
