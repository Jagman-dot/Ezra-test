import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import {BookingFlowPage} from '../pages/BookingFlowPage';
import { MeddicalQuestionairePage } from '../pages/medicalQuestionairePage'; 



test('User is able book MRI Scan ', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const bookingFlowPage = new BookingFlowPage(page);
  const medicalQuestionairePage = new MeddicalQuestionairePage(page);

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

  await medicalQuestionairePage.validatePhysicianImage();
  await medicalQuestionairePage.clickNextButton();
  await medicalQuestionairePage.clickMySelfOption();
  await medicalQuestionairePage.clickNextButton();
  // ... continue with rest 
});



