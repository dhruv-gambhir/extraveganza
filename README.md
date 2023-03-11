# SC2006-Project

Team : Anyhow Anything Anywhere

## TODO

### Backend Changelog

- When signing up, **only username and password is needed**, other information are optional to be filled in by user in manage account page
- Login
  - When user log in, if username or password is incorrect, then user will not be logged in
  - If log in successful, login popup will vanish
- Signup
  - Sign up only need username and password
  - Duplicate username will prevent user from signing up

### To change

- Change database save format [Done, removed firstname, lastname, location and email] 
  - first name last name not necessary
  - only save necessary info
  
- Authentication using username and password [Done, pls check]
  - As of now code is using username, in place of email  
  - **Change auth to use only username and password** 

[x] Sign up - If duplicate user, display error message [Done - see models/Users.js/line 11]

### Misc

- Test login username and password
  - username: Ahhh, helpme
  - password: asdf, aa
