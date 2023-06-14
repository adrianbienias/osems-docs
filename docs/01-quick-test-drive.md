# Quick test drive

To quickly test OSEMS, just clone [the repo](https://github.com/adrianbienias/osems) and test it in your dev environment.

1. Rename `.env.example` to `.env`
2. Generate SMTP credentials for testing purpose at https://ethereal.email/create
3. Set those credentials in `.env` file in `EMAIL_SERVER_*` variables
4. Run `npm install` and `npm run dev`
5. Open [http://localhost:3000/lists/add](http://localhost:3000/lists/add) and add a new list (you can leave form defaults)
6. Scroll down to _Unstyled preview_ of signup form and use it to add a new contact to your list
7. Check out Ethereal inbox at https://ethereal.email/messages where confirmation email should appear
8. Click the link in confirmation email to confirm the signup to the list
9. Create a new newsletter at [http://localhost:3000/newsletters/add](http://localhost:3000/newsletters/add)
   - Choose _List to send to_
   - Schedule (send) the newsletter
10. Again, check out Ethereal inbox at https://ethereal.email/messages where newsletter message should appear

**That's all. You made it!** 🎉

Click the star button on [GitHub repo](https://github.com/adrianbienias/osems) to show your awesomeness. 🤩
