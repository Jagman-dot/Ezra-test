import { expect } from '@playwright/test';

class DashboardPage {

    constructor(page) {
        this.page = page;
        this.pageTitle = 'Home - My Ezra | Ezra US';
        const appointmentsSection = page.locator('.my-appointments'); 
        this.bookAppointButton = appointmentsSection.getByTestId('book-scan-btn');
        this.acceptCookiesButton = page.getByRole('button', { name: 'Accept' });
    }

    async validateTitle(pageTitle) {
        await expect(this.page).toHaveTitle(pageTitle);
    }

    async clickBookAppointButton() {
        
        if (await this.acceptCookiesButton.isVisible()) {
            await this.acceptCookiesButton.click();
        }

        await this.bookAppointButton.click();
    }
}

export { DashboardPage }