Feature: User Authendication tests

Background: 

Given User navigates to the application
And user click on the login link
@login
Scenario: Login should be sucess

And User enter the username as "arunk"
And User enter the password as "Admin143$"
When User click on the login button
Then Login should be sucess
@login
Scenario: Login should not be success
Given User enter the username as "arunk"
Given User enter the password as ""
When User click on the login button
Then Login should fail