import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { BookingFlowPage } from '../pages/BookingFlowPage';
import { MeddicalQuestionairePage } from '../pages/medicalQuestionairePage';
import { beforeEach } from 'node:test';
import { LOGIN_INFO } from '../support/testData';

test.describe('Booking Scans', () => {
  let loginPage;
  let dashboardPage;
  let bookingFlowPage;
  let medicalQuestionairePage;


  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    bookingFlowPage = new BookingFlowPage(page);
    medicalQuestionairePage = new MeddicalQuestionairePage(page);
    await page.goto(loginPage.url, { waitUntil: 'load' });
    await loginPage.validateTitle(loginPage.pageTitle);
    await loginPage.loginToApplication(LOGIN_INFO.email, LOGIN_INFO.password);
  })

  test('User is able book MRI Scan ', async ({ page }) => {

    await dashboardPage.validateTitle(dashboardPage.pageTitle);
    await dashboardPage.clickBookAppointButton();

    await bookingFlowPage.validateTitle();
    await bookingFlowPage.mriScanCard.click();
    await bookingFlowPage.validateCardActive();
    await bookingFlowPage.clickContinue();
    await bookingFlowPage.clickFirstLocation();
    await bookingFlowPage.clickFirstAvailableDate();
    await bookingFlowPage.clickFirstTimeAvailable();
    await bookingFlowPage.clickSubmitButton();
    await bookingFlowPage.striplePayment();
    await bookingFlowPage.clickSubmitButton();
    await bookingFlowPage.validateConfirmationPage();
  
  });
})