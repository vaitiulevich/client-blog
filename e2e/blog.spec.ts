import { test, expect } from '@playwright/test';

test.describe('Blog pagination', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/en/blog/page/1');
  });

  test('should navigate to the next page when next button is clicked', async ({
    page,
  }) => {
    const nextButton = page.locator('a:has-text("Next >")');
    await expect(nextButton).toBeVisible();

    await nextButton.click();

    await expect(page).toHaveURL('http://localhost:3000/en/blog/page/2');
  });

  test('should navigate to the previous page when previous button is clicked', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/en/blog/page/2');

    const prevButton = page.locator('a:has-text("< Prev")');
    await expect(prevButton).toBeVisible();

    await prevButton.click();

    await expect(page).toHaveURL('http://localhost:3000/en/blog/page/1');
  });

  test('should not navigate to previous page when on first page', async ({
    page,
  }) => {
    const prevButton = page.locator('a:has-text("< Prev")');
    await expect(prevButton).toHaveClass(/opacity-50/);
  });
});
