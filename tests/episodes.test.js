const { test, expect } = require('@playwright/test');

test('episodes page loads', async ({ page }) => {
  await page.goto('/html/episodes.html');

  // Navigation
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Episodes' })).toBeVisible();

  // Main header
  await expect(page.getByRole('heading', { name: 'Podcast Episodes' })).toBeVisible();

  // Text prompt (avoids strict mode issues)
  await expect(page.getByText('Select an episode to view:')).toBeVisible();

  // Dropdown and video player
  await expect(page.locator('#episodeSelect')).toBeVisible();
  await expect(page.locator('#episodePlayer')).toBeVisible();

  // Footer
  await expect(page.getByText(/copyright/i)).toBeVisible();
});
