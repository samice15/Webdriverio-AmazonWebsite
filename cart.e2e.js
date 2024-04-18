import { browser, expect, $ } from '@wdio/globals';

describe('Cart Flow', () => {
  let devicePrice;

  before(async () => {
    await browser.url('/');
    const searchInput = await $('#twotabsearchtextbox');
    const searchButton = await $('input[type="submit"]');
    await searchInput.addValue('macbook');
    await searchButton.click();
  });

  it('Add to Cart', async () => {
    await $('.s-product-image-container').click();
    devicePrice = await $('#corePrice_desktop span[aria-hidden="true"]')
      .getText();
    await $('#add-to-cart-button').click();

        await browser.pause(5000);
    });
});