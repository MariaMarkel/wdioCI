import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#normal_login_email') }
    get inputPassword () { return $('#normal_login_password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get usernameValidation () { return $('//div[@class="ant-col ant-form-item-control" and div//input[@id="normal_login_email"]]//div[@role="alert"]') }
    get passwordValidation () { return $('//div[@class="ant-col ant-form-item-control" and div//input[@id="normal_login_password"]]//div[@role="alert"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    setUsername (username) {
        this.inputUsername.setValue(username);
    }

    clearUsername () {
        this.clearInput(this.inputUsername);
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmit () {
        this.btnSubmit.click();
    }

    login (username, password) {
        this.setUsername(username);
        this.setPassword(password);
        this.clickSubmit();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return browser.url('/user/login');
    }
}

export default new LoginPage();