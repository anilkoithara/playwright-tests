import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from './basePage';
import { verifyH1WithText } from '../helper/headerUtils'

export class DashboardPage extends BasePage {
    readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
    }

    async logout() {
        await this.logoutLink.click();
    }

    async assertOnDashboardPage() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.page).toHaveURL(/.*\/dashboard/);
        await verifyH1WithText(this.page, 'Downing bonds');
    }
}
