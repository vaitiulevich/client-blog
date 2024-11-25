import { test, expect } from '@playwright/test';

test.describe('SubscribeForm component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display the subscription form', async ({ page }) => {
    const form = page.locator('form');
    await expect(form).toBeVisible();

    const input = page.locator('input[placeholder="Enter Your Email"]');
    await expect(input).toBeVisible();

    const button = page.locator('button:has-text("Subscribe")');
    await expect(button).toBeVisible();
  });

  test('should show success message on valid email submission', async ({
    page,
  }) => {
    const validEmail = 'test@example.com';

    await page.fill('input[placeholder="Enter Your Email"]', validEmail);
    await page.click('button:has-text("Subscribe")');

    const successPopup = page.locator('.popup');
    await expect(successPopup).toBeVisible();
    await expect(successPopup).toHaveText('Subscription successful!');
  });

  test('should show error message when submitting with empty email', async ({
    page,
  }) => {
    await page.click('button:has-text("Subscribe")');

    const errorMessage = page.locator('.text-red-500');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid email');
  });
});
