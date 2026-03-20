import { expect } from '@playwright/test';

class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailField = page.locator('#email');
        this.passwordField = page.locator("#password");
        this.submitButton = page.locator('button.submit-btn').filter({ hasText: 'Submit' });
        this.pageTitle = 'Login - My Ezra | Ezra US';
        this.url = "https://myezra-staging.ezra.com/sign-in";
        this.bookAppointButton = page.getByTestId('book-scan-btn');

    }

    async validateTitle(pageTitle) {

        await expect(this.page).toHaveTitle(pageTitle);
    }


    async loginToApplication(userName, password) {
        await this.emailField.waitFor({ state: 'visible' });
        await this.emailField.fill(userName);
        await this.passwordField.fill(password);
        await this.submitButton.click();
        await this.page.waitForTimeout(5000);
    }

    

}

export { LoginPage }