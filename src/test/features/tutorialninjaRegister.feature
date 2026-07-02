Feature: Register for TutorialsNinja website
@regression
Scenario: User should register successfully

Given the user is on the TutorialsNinja website
When the user clicks My Account
And the user clicks Register
And user enters first name "haritha"
And user enters last name "SR"
And user enters email "haritha31@gmail.com"
And user enters telephone "9876543210"
And user enters password "haritha"
And user enters confirm password "haritha"
And user selects the privacy policy
When the user clicks Continue button
Then user should see Your Account Has Been Created
When user clicks Continue after registration
Then user should see Logout option
@regression
Scenario: User should not register with an already registered email
  Given the user is on the TutorialsNinja website
  When the user clicks My Account
  And the user clicks Register
  And user enters first name "haritha"
  And user enters last name "SR"
  And user enters email "haritha08@gmail.com"
  And user enters telephone "9876543210"
  And user enters password "haritha"
  And user enters confirm password "haritha"
  And user selects the privacy policy
  When the user clicks Continue button
  Then user should see email already exists message