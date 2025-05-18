import { Page } from "@playwright/test";

export default class Homepage{
    constructor(public page:Page){}
    
async gotohomepage(){
    await this.page.goto("https://automationexercise.com/")
}
async islogoVisible(){
await this.page.locator("img[src='/static/images/home/logo.png']").isVisible();
}
async clickSignup(){
await this.page.locator("a[href='/login']").click()
}
async getCurrentURL(){
return this.page.url();
}
}