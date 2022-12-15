const { test, expect } = require( '@playwright/test' )
const { LoginPage } = require( '../pageObject/loginPage' )
const dataLogin = require( '../fixture/dataLogin.json' )

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
    
    test( 'Login concept POM', async ( { page } ) => {
        const lp = new LoginPage( page )
        await lp.navigateToWeb()
        await lp.fillUsername( 'standard_user' )
        await lp.fillPassword( 'secret_sauce' )
        await lp.clickLogin()
        await lp.waitTime(4000)
        await lp.verifyLogin('Sauce Labs Backpack')
        
    });
    
    test( 'Login with empty username', async ( { page } ) => {
        const lp = new LoginPage( page )
        await lp.navigateToWeb()
        await lp.fillUsername()
        await lp.fillPassword( 'secret_sauce' )
        await lp.clickLogin()
        await lp.waitTime(2000)
        await lp.verifyLogin('Epic sadface: Username is required')
    });
    
    test( 'Login with empty password', async ( { page } ) => {
        const lp = new LoginPage( page )
        await lp.navigateToWeb()
        await lp.fillUsername( 'standard_user' )
        await lp.fillPassword()
        await lp.clickLogin()
        await lp.waitTime(2000)
        await lp.verifyLogin('Epic sadface: Password is required')
    });
    
    test( 'Login with empty username and password', async ( { page } ) => {
        const lp = new LoginPage( page )
        await lp.navigateToWeb()
        await lp.fillUsername()
        await lp.fillPassword()
        await lp.clickLogin()
        await lp.waitTime(2000)
        await lp.verifyLogin('Epic sadface: Username is required')
    });
    
    test( 'Login with wrong username', async ( { page } ) => {
        const lp = new LoginPage( page )
        await lp.navigateToWeb()
        await lp.fillUsername('12345678')
        await lp.fillPassword('secret_sauce')
        await lp.clickLogin()
        await lp.waitTime(2000)
        await lp.verifyLogin('Username and password do not match any user in this service')
    });
    
    test( 'Login with wrong password', async ( { page } ) => {
        const lp = new LoginPage( page )
        await lp.navigateToWeb()
        await lp.fillUsername('standard_user')
        await lp.fillPassword('qwerty')
        await lp.clickLogin()
        await lp.waitTime(2000)
        await lp.verifyLogin('Username and password do not match any user in this service')
    });
    
    dataLogin.forEach(data => {
        test( `Login DDT with ${data.case}`, async ( { page } ) => {
            const lp = new LoginPage( page )
            await lp.navigateToWeb()
            await lp.fillUsername(data.username)
            await lp.fillPassword(data.password)
            await lp.clickLogin()
            await lp.waitTime(2000)
            await lp.verifyLogin(data.verification)
        });
        
    });
    
});