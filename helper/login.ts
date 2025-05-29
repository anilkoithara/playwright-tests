// helpers/login.ts
import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function login(page: Page, userName: string, password: string) {
   const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userName, password); 
    await page.waitForSelector('dc-breadcrumbs'); // post-login check
}
