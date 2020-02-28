# React AWS Starter Kit

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

## What do I get?

You'll get below listed things; 

- A Complete React/Redux Environment with selectors and custom middleware.
- Integration with Material UI. 
- Integration with AWS using Amplify.
- Login flow.
- Reset password flow
- Forgot password flow.
- Session management.

## That's Cool, What do you need from my side?

Well, You'll need things listed below before proceeding with the setup.

1. AWS Cognito Userpool. 
2. AWS Cognito Identity Provider. 
3. AWS APIGATEWAY for API endpoint. 

## Okay, What next?

- Visit [dev config](./.env.dev). 
- Update all the required AWS config details as per comments.
- Remove the comments. 

You can proceed with the setup now! 

## Fair enough, How do I run this?

1. Install [yarn](https://yarnpkg.com/en/).
2. Clone the project.
3. `cd` to project root.
4. Install dependencies: `yarn`.
5. Start: `yarn start`.
6. Build: `yarn run build` (Look for `build` folder after process exits).

## What if I need to make some change request or a suggestion (Contribution Guide)

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

### Bug reports

A bug is a demonstrable problem that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

### Commit Messages

Ideally commit messages should be concise and written in present tense. If you could mention issue number in the message, that would be even better.

### Pull requests

Please create `feature`, `enhancement`, `bugfix` and `hotfix` branches as per the following format: `{feature/enhancement/bugfix/hotfix}/{ISSUE_NUMBER/STORY_NUMBER}-{SHORT_DESCRIPTION}`. 

For example, a `bugfix` should be addressed in a branch called `bugfix/1-test-issue`.

Feel free to add instructions as the project progresses.


## Wow. One last thing, How do I deploy this?

- Update `S3` bucket name in [package.json](./package.json).

- `yarn run deploy`


You're all set now. _`#TechHappily`_ 


:smiley:
=======
