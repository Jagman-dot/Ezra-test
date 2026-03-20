import { expect } from '@playwright/test';

class DashboardPage {

    constructor(page) {
        this.pageTitle = 'Login - My Ezra | Ezra US';
        this.bookAppointButton = page.getByTestId('book-scan-btn');

    }

    async validateTitle(pageTitle) {

        await expect(this.page).toHaveTitle(pageTitle);
    }


    

}

export { DashboardPage }