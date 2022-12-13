const { expect } = require( '@playwright/test' )
const { BasePage } = require('./basePage')

class AddCartPage extends BasePage{
        
    btnCartProduct = 'id=add-to-cart-sauce-labs-bike-light'
    iconCart = `xpath=//span[@class='shopping_cart_badge']`
    idProduct = 'id=item_0_title_link'

    async clickAddCardProduct() {
        return this.page.click(this.btnCartProduct)
    }

    async navigateCartPage() {
        return this.page.click(this.iconCart)
    }

    async verifiyProduct() {
        const Fieldproduct = this.page.locator( this.idProduct )
        return expect(Fieldproduct).toBeVisible()
    }

}

module.exports = { AddCartPage }  