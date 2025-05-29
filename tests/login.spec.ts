import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { verifyH1WithText } from '../helper/headerUtils'

const userName = process.env.USER_NAME!;
const password = process.env.PASSWORD!;

test.describe('Login Page', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page)
    await loginPage.goto();
    await loginPage.login(userName, password);
    await dashboardPage.assertOnDashboardPage();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalidUser', 'wrongPassword');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('The email/username or password provided is incorrect');
  });

  test('Login and logout flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page)
    await loginPage.goto();
    await loginPage.login(userName, password);
    await dashboardPage.assertOnDashboardPage();
    await dashboardPage.logout();
    await verifyH1WithText(page, 'Downing Bonds: Providing investors access to carefully selected borrowers');
  });
});
