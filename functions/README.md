# Firebase Cloud Functions for the EKD website
Firebase cloud function folder for all the functions.  
The functions for EKD and its step by step workings are listed below:


## "Contact Me" form function
- HTTP POST request triggers this CF
- Store the email into the Database
- Send the rest of the contents of the contact me form to the "contact@enkeldigital.com" email address
    - Test using SendGrid to send the email
- Send user an acknowledgement message and let him/her know that we will respond asap.
    - Test using SendGrid to send the email


## "Subscribe" newsletter function
- HTTP POST request triggers this CF
- Store the email into the Database
- Send a email about this to "notifications@enkeldigital.com"
    - Test using SendGrid to send the email
- Send the user a personalized message thanking him/her for subscribing.
    - Test using SendGrid to send the email|