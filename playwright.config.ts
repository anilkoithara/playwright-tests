import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';


dotenv.config(); // Load variables from .env

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        headless: true, // set to false to see the browser
      },
    },
  ],
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});