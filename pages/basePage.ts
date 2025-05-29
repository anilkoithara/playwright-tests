import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

   async goto(url: string) {
    await this.page.goto(url);
  }

  async verifyAllH1Texts(expectedTexts?: string[]) {
    const h1Elements = this.page.locator('h1');
    const count = await h1Elements.count();

    for (let i = 0; i < count; i++) {
      const actualText = (await h1Elements.nth(i).textContent())?.trim();

      expect(actualText).not.toBeNull();
      expect(actualText?.length).toBeGreaterThan(0);

      if (expectedTexts && expectedTexts[i]) {
        expect(actualText).toBe(expectedTexts[i]);
      }
    }
  }

}