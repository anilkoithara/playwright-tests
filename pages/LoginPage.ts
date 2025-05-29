import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage{
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

   constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[type="email"]'); 
    this.passwordInput = page.locator('input[type="password"]'); 
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.errorMessage = page.locator('.text-div-error');
  }

  async goto() {
    await this.page.goto('/account/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.textContent();
  }
}