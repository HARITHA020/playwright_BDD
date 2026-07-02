import { Given, Then, When } from "@cucumber/cucumber";
import {expect } from "@playwright/test";
import { CustomWorld } from "../../hooks/world";
Given("user on the nopCommerceWebsite page", async function (this:CustomWorld) {
    await this.page.goto("https://demo.nopcommerce.com/");
});

When("User click the Register link", async function (this:CustomWorld) {
    await this.page.locator(".ico-register").click();
});

When("user click the gender option", async function (this:CustomWorld) {
    await this.page.locator("#gender-female").check();
});

When("user enter the first name {string}", async function (this:CustomWorld,firstname:string) {
    await this.page.locator("#FirstName").fill(firstname)
});

When("user enter the last name {string}", async function (this:CustomWorld,lastname:string) {
    await this.page.locator("#LastName").fill(lastname)
});

When("user enter the email {string}", async function (this:CustomWorld,email:string) {
    await this.page.locator("#Email").fill(email)
});

When("user enter the password {string}", async function (this:CustomWorld,password:string) {
    await this.page.locator("#Password").fill(password);
});

When("user enter the confrim password {string}", async function (this:CustomWorld,confrim:string) {
    await this.page.locator("#ConfirmPassword").fill(confrim);
});

When("user click the register button", async function (this:CustomWorld) {
    await this.page.locator("#register-button").click();
});

Then("user should see the success message", async function (this:CustomWorld) {
    await expect(this.page.locator("//div[@class='result']")).toHaveText('Your registration completed');
});

When("user click the continue button", async function (this:CustomWorld) {
    await this.page.locator(".button-1.register-continue-button").click();
});

Then("user should see myaccount link", async function (this:CustomWorld) {
    await expect(this.page.locator(".ico-account")).toBeVisible();
});
