# API responses on signup

By default, `SIGNUP_FORM_ACTION` in `.env` file is set to `redirect`.

That means, after submitting the signup form, there will be an automatic redirection to a standalone page, either the one defined by you as `Signup redirect URL` in the list settings, or if some errors occur, to an internal OSEMS error page, placed in `src/pages/public/signup-form-error.tsx`.

You can change this default behavior by changing `SIGNUP_FORM_ACTION` to `api`.

Then, all signup form submits will receive a response from the API (in JSON format).

API mode is desired if you want to handle signup form submits on your own.

It's useful if you want to handle validation errors on the client side as well as redirect after successful submit programmatically.
