import { LightningElement, api } from 'lwc';
import getAccountList from '@salesforce/apex/GetRecordId.getAccount'
import getSalesAgreementList from '@salesforce/apex/GetRecordId.getSalesAgreement'
import getForecastDeviceSalesList from '@salesforce/apex/GetRecordId.getForecastDeviceSales'
import getAdvAccountForecastList from '@salesforce/apex/GetRecordId.getAdvAccountForecast'

export default class InAppTertiaryFeature extends LightningElement {

  @api appWelcomeText = "Explore Health Cloud Features for Medtech";
  @api appDescription = "";
  accountId = "";
  salesagreementId = "";
  forecastdeviceId = "";
  advaccountforecastId = "";

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

    getSalesAgreementList()
      .then(result => {
        if (result.length) {
          this.salesagreementId = result[0].Id;
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

    getForecastDeviceSalesList()
      .then(result => {
        if (result.length) {
          this.forecastdeviceId = result[0].Id;
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

    getAdvAccountForecastList()
      .then(result => {
        if (result.length) {
          this.advaccountforecastId = result[0].Id;
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