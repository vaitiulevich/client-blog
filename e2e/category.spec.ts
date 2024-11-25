import { test, expect } from '@playwright/test';

test.describe('CategoryPage Tag Selection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/en/category/2');
  });

  test('should update URL to include tag is selected', async ({ page }) => {
    await page.click('button:has-text("Life")');
    await page.waitForTimeout(500);

    const url = await page.url();
    expect(url).toContain('tags=6');
  });
  test('should update URL to include more then one tag are selected', async ({
    page,
  }) => {
    await page.click('button:has-text("Life")');
    await page.waitForTimeout(500);

    let url = await page.url();
    expect(url).toContain('tags=6');

    await page.click('button:has-text("Screen")');
    await page.waitForTimeout(500);

    url = await page.url();
    expect(url).toContain('tags=6%2C3');
  });
  test('should display suggestions for "Life" and select the tag', async ({
    page,
  }) => {
    await page.fill('input[placeholder="Search"]', 'Life');
    await page.waitForTimeout(200);

    const suggestions = await page.locator('ul');
    await expect(suggestions).toBeVisible();

    const lifeSuggestion = suggestions.locator('li:has-text("Life")');
    await expect(lifeSuggestion).toBeVisible();

    await lifeSuggestion.click();
    await page.waitForTimeout(500);

    const url = await page.url();

    expect(url).toContain('tags=6');
  });
});
