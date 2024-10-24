import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';



Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.openLoginPage();
});

When(/^I login with <username> and <password>$/, async () => {
	await LoginPage.performLogin(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.errorMessage).toBeExisting();
    //await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

