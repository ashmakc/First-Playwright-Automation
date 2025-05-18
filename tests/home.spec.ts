import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage';

test('Open and verify if homepage and login page loads properly',async({page})=>{
    const home=new HomePage(page);
    await home.gotohomepage();


    await home.islogoVisible();
    await home.clickSignup();
    const currentURL=await home.getCurrentURL();
    console.log(currentURL)

})

