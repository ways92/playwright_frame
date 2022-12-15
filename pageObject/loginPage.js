const { expect } = require( '@playwright/test' )
const { BasePage } = require('./basePage')
class LoginPage extends BasePage{
    
    fieldUsername = 'id=user-name'
    fieldPassword = 'id=password'
    btnLogin = 'id=login-button'
    fieldLogo = `xpath=//div[@class='app_logo']`
    fieldErrorMessage = `//div[@class='error-message-container error']`

    async fillUsername( username='' ) {
        return this.page.fill( this.fieldUsername, username )
    }

    async fillPassword( pass='' ) {
        return this.page.fill( this.fieldPassword, pass )
    }

    async clickLogin() {
        return this.page.locator( this.btnLogin ).click()
    }
    
    // async verifyErrorLogin(message) {
    //     const fieldError = this.page.locator( this.fieldErrorMessage )
    //     return expect(fieldError).toContainText(message)
    // }

    async verifyLogin(message='') {
        if ( message === 'Sauce Labs Backpack' ) {
            const elDropdown = this.page.locator( this.fieldLogo )
            return expect( elDropdown ).toBeVisible( { timeout: 5000 } )

        } else if ( message === 'Epic sadface: Username is required' || 'Epic sadface: Password is required') {
            const fieldError = this.page.locator( this.fieldErrorMessage )
            return expect( fieldError ).toContainText( message )
            
        } else {
            console.log( `PROPERTY VERIFICATION NULL, CAN'T HANDLE ERROR` );
            this.page.console.log(`PROPERTY VERIFICATION NULL, CAN'T HANDLE ERROR`);
        }
    }
}

module.exports = { LoginPage }  