import { Page, expect } from '@playwright/test';

export async function verifyH1WithText(page: Page, expectedText: string) {
  await page.waitForLoadState('networkidle');
  const h1 = page.locator(`h1:has-text("${expectedText}")`);
  await expect(h1).toBeVisible();
  await expect(h1).toHaveText(expectedText);
}