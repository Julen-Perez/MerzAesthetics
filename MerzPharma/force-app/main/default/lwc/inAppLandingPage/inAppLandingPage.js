import { LightningElement,api } from 'lwc';

export default class InAppLandingPage extends LightningElement {

@api appWelcomeText = "Welcome to Health Cloud Learning Trial Org";
@api appDescription = "Here's a collection of resources to help you get started.";

}