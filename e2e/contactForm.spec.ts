import { test, expect } from '@playwright/test';

test.describe('ContactForm component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/en/contacts');
  });

  test('should display the contact form', async ({ page }) => {
    const form = page.locator('.contact-form');
    await expect(form).toBeVisible();

    const nameInput = page.locator('input[placeholder="Full Name"]');
    await expect(nameInput).toBeVisible();

    const emailInput = page.locator('input[placeholder="Your Email"]');
    await expect(emailInput).toBeVisible();

    const relatedSelect = page.locator('.contact-form select');
    await expect(relatedSelect).toBeVisible();

    const messageTextArea = page.locator('textarea[placeholder="Message"]');
    await expect(messageTextArea).toBeVisible();

    const button = page.locator('button:has-text("Send Message")');
    await expect(button).toBeVisible();
  });

  test('should show error messages when submitting with empty fields', async ({
    page,
  }) => {
    await page.click('button:has-text("Send Message")');

    const errorMessage1 = page.locator(
      'span:has-text("Must be 2 or more characters long")'
    );
    await expect(errorMessage1).toBeVisible();

    const errorMessage2 = page.locator(
      'span:has-text("Invalid email address")'
    );
    await expect(errorMessage2).toBeVisible();
    const errorMessage3 = page.locator(
      'span:has-text("Selection is required")'
    );
    await expect(errorMessage3).toBeVisible();

    const errorMessage4 = page.locator('span:has-text("Message is required")');
    await expect(errorMessage4).toBeVisible();
  });

  test('should show success message on valid form submission', async ({
    page,
  }) => {
    await page.fill('input[placeholder="Full Name"]', 'Test test');
    await page.fill('input[placeholder="Your Email"]', 'test@example.com');
    await page.selectOption('.contact-form select', 'company');
    await page.fill('textarea[placeholder="Message"]', 'Hello!');

    await page.click('button:has-text("Send")');
  });
});
