import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from './basePage';

export class ProfilePage extends BasePage {
    // Add specific locators for dashboard
    private welcomeMessage = 'h1'; // Customize selector
    private userProfileName = '#user-profile-name'; // Example selector

    constructor(page: Page) {
        super(page);
    }

    async assertOnProfilePage() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveURL(/.*\/profile/);
    }

    async verifyUserProfileName(expectedName: string) {
        const name = await this.page.locator(this.userProfileName).textContent();
        expect(name?.trim()).toBe(expectedName);
    }
}
