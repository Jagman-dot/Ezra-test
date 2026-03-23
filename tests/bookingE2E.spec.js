import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import {BookingFlowPage} from '../pages/BookingFlowPage';


test('User is able book MRI Scan ', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const bookingFlowPage = new BookingFlowPage(page);

  await page.goto(loginPage.url, { waitUntil: 'load' });
  await loginPage.validateTitle(loginPage.pageTitle);
  await loginPage.loginToApplication(process.env.USERNAME, process.env.PASSWORD);

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
  await bookingFlowPage.clickBeginMedicalQuestionaire()

  
});

// test('User login on App', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await page.goto(loginPage.url, { waitUntil: 'load' });
//   await loginPage.validateTitle(loginPage.pageTitle);
//   await loginPage.loginToApplication("Jagman.dhaliwal@gmail.com", "Jagman89800!");
// });

