import { test, expect } from '@playwright/test';

test.describe('Header component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('has title', async ({ page }) => {
    await expect(page.locator('header h1')).toContainText('Modsen Client Blog');
  });

  test('should navigate to the correct links', async ({ page }) => {
    const navMenu = page.locator('header nav');

    const expectedItems = [
      { label: 'About Us', href: 'http://localhost:3000/en/about' },
      { label: 'Contact us', href: 'http://localhost:3000/en/contacts' },
    ];

    for (const item of expectedItems) {
      const link = navMenu.locator(`a:has-text("${item.label}")`);
      await link.click();
      await expect(page).toHaveURL(item.href);
    }
  });

  test('should open video modal when button is clicked and close it', async ({
    page,
  }) => {
    const videoButton = await page.getByRole('button', {
      name: 'Video about us',
    });
    await expect(videoButton).toBeVisible();

    await videoButton.click();

    const modal = page.locator('div[role="dialog"]'); // Убедитесь, что селектор соотвествует вашему модальному окну
    await expect(modal).toBeVisible();

    const videoIframe = modal.locator('iframe');
    await expect(videoIframe).toBeVisible();

    const closeButton = modal.locator('button:has-text("×")'); // Или используйте другой селектор для кнопки закрытия
    await closeButton.click();

    await expect(modal).not.toBeVisible();
  });
});

test.describe('PostsList component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should navigate to all blogs when the link is clicked', async ({
    page,
  }) => {
    const allBlogsLink = page.locator('a:has-text("View All")'); // Замените на фактический текст ссылки, если нужно
    await expect(allBlogsLink).toBeVisible();

    await allBlogsLink.click();

    await expect(page).toHaveURL('http://localhost:3000/en/blog/page/1'); // Замените на фактический URL, если он отличается
  });
});
