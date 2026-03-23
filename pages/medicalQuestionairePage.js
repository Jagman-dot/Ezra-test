import { expect } from '@playwright/test';
import { TEST_CARDS, SCAN_PRICE} from '../support/testData';

class MeddicalQuestionairePage {

    constructor(page) {
        this.page = page;
        this.pageTitle = 'Booking - My Ezra | Ezra US';
        this.physicianImage = this.page.getByAltText('A physician with a clip board.');
        this.nextButton = this.page.getByRole('button', { name: 'Continue' }).and(this.page.locator('#next'));
        this.myselfOption = this.page.getByRole('button', { name: 'Myself' });
    
    }

    async validatePhysicianImage(){
        await expect(this.physicianImage).toBeVisible();
    }

    async clickNextButton(){
        await this.nextButton.click();
    }

    async clickMySelfOption(){
        await this.myselfOption.click();
    }

    





}

export { MeddicalQuestionairePage }