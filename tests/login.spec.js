const { test, expect } = require( '@playwright/test' )
const { LoginPage } = require( '../pageObject/loginPage' )

test.describe( 'Login Test', () => { 

    test( 'Login valid data', async ( { page } ) => {
        await page.goto( 'https://www.saucedemo.com/' )
        await page.locator('id=user-name').fill('standard_user')
        await page.locator('id=password').fill('secret_sauce')
        await page.locator('id=login-button').click()
        const dropdw = page.locator(`xpath=//span[@class='select_container']`)
        await page.waitForTimeout(3000);
        await expect( dropdw ).toBeVisible()
        
    });
    
    test( 'login concept POM', async ( { page } ) => {
        const lp = new LoginPage( page )
        await lp.navigateToWeb()
        await lp.fillUsername( 'standard_user' )
        await lp.fillPassword( 'secret_sauce' )
        await lp.clickLogin()
        await lp.waitTime(4000)
        await lp.verifyLogin()
        
    } );
    
});