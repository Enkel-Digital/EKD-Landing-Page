# Firebase Cloud Functions for the EKD website
Firebase cloud function folder for all the functions.  
The functions for EKD and its step by step workings are listed below:

---
## Modules
### DB module
The DB module exports an object that contains wrapper functions over specific database actions, which when used across different cloud functions, enforces a standard way of using the Database, and reduce repeated implementation efforts.

---
## "Contact Me" form function
Since firebase "spark" plan is free and does not allow external API calls, we cannot use sendgrid API via firebase cloud functions.
- Thus to mitigate this issue, the send grid API will be called within the web page itself.
- And then the site will make a call to the cloud function to store the details.

### Execution Flow:
- User clicks the submit button
- Function runs in browser to call Sendgrid API to send the details over email to EKD team, and wait for completion (Currently testing the use of SendGrid to send the email)
    - Send the rest of the contents of the contact me form to the "contact@enkeldigital.com" email address
    - Send user an acknowledgement message and let him/her know that we will respond asap.
- Show success once SendGrid API returns a success code.
- Web App makes a HTTP POST request to trigger the "Contact Us" Cloud function
- Email and other data is stored into the Database

---
## "Subscribe" newsletter function
### Execution Flow:
- HTTP POST request triggers this CF
- Store the email into the Database
- Send a email about this to "notifications@enkeldigital.com"
    - Test using SendGrid to send the email
- Send the user a personalized message thanking him/her for subscribing.
    - Test using SendGrid to send the email