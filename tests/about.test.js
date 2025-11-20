const {
	test,
	expect
} = require('@playwright/test');

test('about page loads', async ({
	page
}) => {
	await page.goto('/html/about.html');

	// Header image
	await expect(page.getByRole('img', {
		name: /team scrum stormers/i
	})).toBeVisible();

	// Navigation
	await expect(page.getByRole('link', {
		name: 'Home'
	})).toBeVisible();
	await expect(page.getByRole('link', {
		name: 'About'
	})).toBeVisible();
	await expect(page.getByRole('link', {
		name: 'Episodes'
	})).toBeVisible();

	// Main content
	await expect(page.getByRole('heading', {
		name: 'About the Podcast'
	})).toBeVisible();

	await expect(page.getByText(/game is a 2d collection/i)).toBeVisible();

	// Footer
	await expect(page.getByText(/copyright/i)).toBeVisible();
});