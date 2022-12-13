class BasePage {

    constructor( page ) {
            this.page = page
    }

    async navigateToWeb() {
        return this.page.goto( 'https://www.saucedemo.com/' )
    }
    
    async waitTime( time ) {
        return this.page.waitForTimeout(time)
    }
}

module.exports = {BasePage }