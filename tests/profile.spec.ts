import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';

const userName =  process.env.USER_NAME!;
const password =  process.env.PASSWORD!;

test.describe('Profile Page', () => {
  test('Authorised user should be able to view the profile details ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);
    await loginPage.goto();
    await loginPage.login(userName, password);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Account' }).click();
    await page.getByRole('link', { name: 'Profile settings' }).click();
    await expect(page.locator('dc-breadcrumbs')).toContainText("Profile settings"); 
   await profilePage.assertOnProfilePage()
    await profilePage.verifyAllH1Texts(['Profile settings', 'Account', 'Personal details','Communication preferences','Change password', 'Document upload']);
  });

});