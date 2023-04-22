import { test, expect } from '@playwright/test';

const { pageDetailsPage } = require('./page-details.test');


//Go to www.saucedemo.com
//Enter username
//Enter password
//Click on Login button
//<div class="inventory_item_name">Test.allTheThings() T-Shirt (Red)</div>
//Click on Add to Cart
//Click on Hamburger button
//Click on Logout

test('test', async ({ page }) => {

//Importing : await page.goto('https://www.saucedemo.com/');
    const pageDetails = new pageDetailsPage(page);

await pageDetails.goto();

await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.locator('//*[@id="login-button"]').click();
await page.locator('//*[@id="item_3_title_link"]').click();
    //Worked: await page.locator('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    await page.getByText('Test.allTheThings() T-Shirt (Red)').click();
    await page.getByRole('button', {name: 'Add to Cart'}).click();
    //await page.pause();
    await page.locator('//*[@id="shopping_cart_container"]/a').click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await expect(page.locator('//*[@id="item_3_title_link"]/div')).toBeVisible();

   await page.getByRole('button',{name:'Continue Shopping'}).click();
    //Worked:await page.locator('//*[@id="continue-shopping"]').click();
})