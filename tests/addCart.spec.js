const { test, expect } = require( '@playwright/test' )
const { LoginPage } = require( '../pageObject/loginPage' )
const { AddCartPage } = require( '../pageObject/addCartPage' )

test.beforeEach(async ({ page }) => {
    const lp = new LoginPage( page )
    await lp.navigateToWeb()
    await lp.fillUsername( 'standard_user' )
    await lp.fillPassword( 'secret_sauce' )
    await lp.clickLogin()
    
});

test.describe( 'Add Cart Test', () => { 
    
    test( 'login concept POM', async ( { page } ) => {
        const acp = new AddCartPage( page )
        await acp.clickAddCardProduct()
        await acp.navigateCartPage()
        await acp.waitTime(7000)
        await acp.verifiyProduct()
    } );
    
});