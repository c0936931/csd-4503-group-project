const { test, expect } = require('@playwright/test');

test('index page loads', async ({ page }) => {
  await page.goto('/html/index.html');

  // Header image exists
  await expect(page.getByRole('img', { name: /team scrum stormers/i })).toBeVisible();

  // Navigation links
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Episodes' })).toBeVisible();

  // Check main text
  await expect(page.getByText('Welcome to the Scrum Stormers Podcast')).toBeVisible();

  // Footer
  await expect(page.getByText(/copyright/i)).toBeVisible();
});
