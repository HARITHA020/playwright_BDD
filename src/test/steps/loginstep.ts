import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
//import { pageFixture } from "../../hooks/pageFixture";
import { CustomWorld } from "../../hooks/world";
Given("User navigates to the application",{timeout:30000}, async function (this:CustomWorld) {
    
    //await  pageFixture.page.goto("https://bookcart.azurewebsites.net/");
    await  this.page.goto("https://bookcart.azurewebsites.net/");
});

Given("user click on the login link", async function (this:CustomWorld) {
    await this.page.locator("//span[normalize-space(text())='Login']").click();
});

Given("User enter the username as {string}", async function (this:CustomWorld,username:string) {
    await this.page.locator("//input[@id='mat-input-0']").fill(username);
});

Given("User enter the password as {string}", async function (this:CustomWorld,password:string) {
   await this.page.locator("//input[@id='mat-input-1']").fill(password); 
});

When("User click on the login button", async function (this:CustomWorld) {
   await this.page.locator("//button[@class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']").click();
});

Then("Login should be sucess", async function (this:CustomWorld) {
    const expectedUsername=" arunk";
    await expect(this.page.locator("a[class='mat-mdc-menu-trigger mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base ng-star-inserted'] span[class='mdc-button__label'] span")).toHaveText(expectedUsername);
});

Then("Login should fail", async function (this:CustomWorld) {
    await expect(this.page.getByText("Password is required")).toBeVisible();
});