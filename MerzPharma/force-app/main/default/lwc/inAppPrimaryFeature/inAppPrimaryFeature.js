import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccountList from '@salesforce/apex/GetRecordId.getAccount'
import getMakanaAccountList from '@salesforce/apex/GetRecordId.getMakanaAccount'
import getContactsList from '@salesforce/apex/GetRecordId.getContacts'
import getLeadRefferalManagementList from '@salesforce/apex/GetRecordId.getLeadRefferalManagement'
import getWorkingRefferalList from '@salesforce/apex/GetRecordId.getWorkingRefferal'
import getReceivedDocumentList from '@salesforce/apex/GetRecordId.getReceivedDocument'
import getFortisAccountList from '@salesforce/apex/GetRecordId.getFortisAccount'

export default class InAppPrimaryFeature extends LightningElement {

  @api appWelcomeText = "Explore Health Cloud Features for Providers";
  accountId = "";
  makanaaccountId = "";
  contactId = "";
  leadrefferalmanagementId = "";
  leadworkingrefferalId = "";
  receiveddocumentId = "";
  fortisaccountId = "";

  connectedCallback() {

    getAccountList()
      .then(result => {
        if (result.length) {
          this.accountId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
        const evt = new ShowToastEvent({
          title: 'Error retrieving data from DB',
          message: error.message,
          variant: 'error',
          mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      });

    getLeadRefferalManagementList()
      .then(result => {
        if (result.length) {
          this.leadrefferalmanagementId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
        const evt = new ShowToastEvent({
          title: 'Error retrieving data from DB',
          message: error.message,
          variant: 'error',
          mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      });

    getReceivedDocumentList()
      .then(result => {
        if (result.length) {
          this.receiveddocumentId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
        const evt = new ShowToastEvent({
          title: 'Error retrieving data from DB',
          message: error.message,
          variant: 'error',
          mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      });

    getContactsList()
      .then(result => {
        if (result.length) {
          this.contactId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
        const evt = new ShowToastEvent({
          title: 'Error retrieving data from DB',
          message: error.message,
          variant: 'error',
          mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      });

    getWorkingRefferalList()
      .then(result => {
        if (result.length) {
          this.leadworkingrefferalId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
        const evt = new ShowToastEvent({
          title: 'Error retrieving data from DB',
          message: error.message,
          variant: 'error',
          mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      });

    getMakanaAccountList()
      .then(result => {
        if (result.length) {
          this.makanaaccountId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
        const evt = new ShowToastEvent({
          title: 'Error retrieving data from DB',
          message: error.message,
          variant: 'error',
          mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      });

    getFortisAccountList()
      .then(result => {
        if (result.length) {
          this.fortisaccountId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
        const evt = new ShowToastEvent({
          title: 'Error retrieving data from DB',
          message: error.message,
          variant: 'error',
          mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      });

  }

  get pass_true() {
    return true;
  }

  get pass_false() {
    return false;
  }
}