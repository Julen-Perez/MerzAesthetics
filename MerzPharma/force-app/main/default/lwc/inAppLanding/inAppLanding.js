import { LightningElement, wire, api, track } from 'lwc';
import getNavigationItems from '@salesforce/apex/GetItems.getPageItems';

export default class InAppLanding extends LightningElement {
    @api welcome_text = "Welcome to Health Cloud Learning Trial Org"; 
    @api description = "Here's a collection of resources to help you get started.";
    
    pageName = 'LandingPage';
    
    @wire(getNavigationItems,{pageName:'$pageName'}) 
    landingItems;

    get pass_false() {
        return false;
    }

    get pass_true() {
        return true;
    }

}