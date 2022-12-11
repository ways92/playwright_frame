const { expect } = require( '@playwright/test' )

class LoginPage {
    
    constructor( page ) {
            this.page = page
        }
        
    fieldUsername = 'id=user-name'
    fieldPassword = 'id=password'
    btnLogin = 'id=login-button'
    fieldDropdown = `xpath=//span[@class='select_container']`

    async navigateToWeb() {
        return this.page.goto( 'https://www.saucedemo.com/' )
    }

    async fillUsername( username ) {
        await this.page.waitForSelector('#user-name');
        return this.page.locator( 'id=user-name' ).fill( username, { timeout : 5000 })
    }

    async fillPassword( pass ) {
        return this.page.locator(this.fieldPassword).fill(pass)
    }

    async clickLogin() {
        return this.page.locator(this.btnLogin).click()
    }
    
    async verifyLogin() {
        const elDropdown = this.page.locator(this.fieldDropdown)
        return expect(elDropdown).toBeVisible({timeout : 5000})
    }
}

module.exports = { LoginPage }  