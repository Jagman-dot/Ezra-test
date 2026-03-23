import { expect } from '@playwright/test';
import { TEST_CARDS, SCAN_PRICE} from '../support/testData';

class BookingFlowPage {

    constructor(page) {
        this.page = page;
        this.pageTitle = 'Booking - My Ezra | Ezra US';
        this.mriScanCard = page.getByTestId('FB30-encounter-card');
        this.encounterCard = page.locator('.encounter-card.__active');
        this.mriScanWithSpineCard = page.getByTestId('FB60-encounter-card');
        this.mriScanWithSkeletalCard = page.getByTestId('FB60-encounter-card');
        this.continueButton = page.getByTestId('select-plan-submit-btn');
        this.locationCards = page.locator('.location-card');
        this.firstAvailable = page.locator('.vuecal__cell:not(.vuecal__cell--disabled)').first();
        this.firstTimeAvailable = page.locator('.appointments__individual-appointment').filter({ visible: true });
        this.submitButton = page.locator('[data-test="submit"]');
        this.stripeFrame = page.frameLocator('iframe[title="Secure payment input frame"] >> visible=true').first();
        this.previousCard = this.stripeFrame.getByTestId('payment-details-content-info');
        this.cardNumber = this.stripeFrame.locator('input[name="number"]');
        this.expiryInput = this.stripeFrame.locator('input[name="expiry"]');
        this.cvv = this.stripeFrame.locator('input[name="cvc"]');
        this.postalCode = this.stripeFrame.locator('input[name="postalCode"]');
        this.priceLocator = this.page.locator('p.b1 span.h4');
        this.confirmationMesssage = this.page.locator('.confirmation-msg__title');
        this.beginQuestionnaireButton = this.page.getByRole('button', { name: 'Begin Medical Questionnaire' });
    }

    async validateTitle(pageTitle= this.pageTitle) {
        await expect(this.page).toHaveTitle(pageTitle);
    }

    async clickMRIScanWithSkeletalCard() {
        await this.mriScanCard.click();
    }

    async validateCardActive() {
        await expect(this.encounterCard).toBeVisible();
    }

    async clickContinue() {
        await expect(this.continueButton).toBeEnabled();
        await this.continueButton.click();
    }

    async clickFirstLocation() {
        await this.locationCards.first().click();
    }

    async clickFirstAvailableDate(){
        await this.firstAvailable.click();
    }

    async clickFirstTimeAvailable() {
        await this.firstTimeAvailable.first().click();
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async striplePayment(){
        // checking to see if there is a previous card on file
        if(await this.previousCard.count() > 0){
            console.log('Card saved');
        } else {
            console.log('No card on file');
            await expect(this.cardNumber).toBeVisible();
            await this.cardNumber.fill(TEST_CARDS.SUCCESS_VISA.number);
            await this.expiryInput.fill(TEST_CARDS.SUCCESS_VISA.expiry);
            await this.cvv.fill(TEST_CARDS.SUCCESS_VISA.cvc);
            await this.postalCode.fill(TEST_CARDS.SUCCESS_VISA.zip);
        }
        await expect(this.priceLocator).toHaveText(SCAN_PRICE.mri);
    }

    async validateConfirmationPage(){
        await expect(this.confirmationMesssage).toContainText("You're almost done");
    }

    async clickBeginMedicalQuestionaire(){
        this.beginQuestionnaireButton.click();
    }
}

export { BookingFlowPage }