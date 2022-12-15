const { expect } = require( '@playwright/test' )
const { BasePage } = require('./basePage')
class LoginPage extends BasePage{
    
    fieldUsername = 'id=user-name'
    fieldPassword = 'id=password'
    btnLogin = 'id=login-button'
    fieldDropdown = `xpath=//span[@class='select_container']`

    async fillUsername( username ) {
        return this.page.fill( this.fieldUsername, username )
    }

    async fillPassword( pass ) {
        return this.page.fill( this.fieldPassword, pass )
    }

    async clickLogin() {
        return this.page.locator( this.btnLogin ).click()
    }
    
    async verifyLogin() {
        const elDropdown = this.page.locator( this.fieldDropdown )
        return expect( elDropdown ).toBeVisible( { timeout: 5000 } )
    }
}

module.exports = { LoginPage }  