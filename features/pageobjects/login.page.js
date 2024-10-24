import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuIcon() {
        return $('~open menu');
    }

    get loginLabel() {
        return $('~menu item log in');
    }

    get usernameInputField() {
        return $('~Username input field');
    }

    get passwordInputField() {
        return $('~Password input field');
    }

    get loginButton() {
        return $('~Login button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async openLoginPage () {
        await this.menuIcon.click();
        await this.loginLabel.click();
    }

    async performLogin (username, password) {
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
