import {browser, expect, $ } from '@wdio/globals';

describe('Amazon Home Page', () => {
    it('Access url, verify url and title',async () => {
        await browser.url('/');
        await expect(browser).toHaveUrlContaining('amazon');
        await expect(browser).toHaveTitleContaining('Amazon.com');
    });
    
    it('Search Content and Verify Text', async () => {
        /*
        const searchInput = await $('#twotabsearchtextbox');
        const searchButton = await $('input[type="submit"]');
        const expectedSearchText = await $('.a-color-state.a-text-bold');
    
        await searchInput.addValue('macbook');
        await searchButton.click();
        await expect(expectedSearchText).toHaveTextContaining('macbook');
        */
        // Another Method
        await $('#twotabsearchtextbox').addValue('macbook');
        await $('input[type="submit').click();
        await expect ($('.a-color-state.a-text-bold')).toHaveTextContaining('macbook');

    });

}); 