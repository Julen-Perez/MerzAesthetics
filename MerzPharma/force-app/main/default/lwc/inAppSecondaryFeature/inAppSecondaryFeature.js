import { LightningElement, api } from 'lwc';
import getAccountList from '@salesforce/apex/GetRecordId.getAccount'
import getMakanaAccountList from '@salesforce/apex/GetRecordId.getMakanaAccount'
import getContactsList from '@salesforce/apex/GetRecordId.getContacts'
import getReceivedDocumentList from '@salesforce/apex/GetRecordId.getReceivedDocument'
import getFortisAccountList from '@salesforce/apex/GetRecordId.getFortisAccount'
import getLeadList from '@salesforce/apex/GetRecordId.getLead'
import getCredentialAccountList from '@salesforce/apex/GetRecordId.getCredentialAccount'
import getContractList from '@salesforce/apex/GetRecordId.getContract'

export default class InAppSecondaryFeature extends LightningElement {

  @api appWelcomeText = "Explore Health Cloud Features for Payers";
  @api appDescription = "";
  accountId = "";
  makanaaccountId = "";
  contactId = "";
  receiveddocumentId = "";
  fortisaccountId = "";
  providerleadId = "";
  credentialaccountId = "";
  contractId = "";

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

    getCredentialAccountList()
      .then(result => {
        if (result.length) {
          this.credentialaccountId = result[0].Id;
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

    getLeadList()
      .then(result => {
        if (result.length) {
          this.providerleadId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
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

    getContractList()
      .then(result => {
        if (result.length) {
          this.contractId = result[0].Id;
        }
      })
      .catch(error => {
        console.error(error.message)
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