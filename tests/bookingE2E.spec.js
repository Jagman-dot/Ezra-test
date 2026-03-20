import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { log } from 'node:console';



test('User is able book MRI Scan ', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(loginPage.url, { waitUntil: 'load' });
  await loginPage.validateTitle(loginPage.pageTitle);
  await loginPage.loginToApplication("Jagman.dhaliwal@gmail.com", "Jagman89800!");
  

});

// test('User login on App', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await page.goto(loginPage.url, { waitUntil: 'load' });
//   await loginPage.validateTitle(loginPage.pageTitle);
//   await loginPage.loginToApplication("Jagman.dhaliwal@gmail.com", "Jagman89800!");
// });

