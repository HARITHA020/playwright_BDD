Feature: Use Authentication in tutorialsninja
Background:
Given User navigate to the nopWebsite
And User click Myaccount link
And User click the login link

@smoke
Scenario:Login should be successful with valid 
And User enter the email as "haritha11@gmail.com"
And User enter the password1 as "haritha"
When User click login button
Then User should see Myaccount

@smoke
Scenario:Login should be fail with invalid credentials
And User enter the email as "haritha11@gmail.com"
And User enter the password1 as "hari"
When User click login button
Then User should see the unsuccess error message