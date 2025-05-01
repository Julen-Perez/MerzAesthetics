import { LightningElement, api } from 'lwc';
import getAccountList from '@salesforce/apex/GetRecordId.getAccount'
import getLeadRefferalManagementList from '@salesforce/apex/GetRecordId.getLeadRefferalManagement'
import getWorkingRefferalList from '@salesforce/apex/GetRecordId.getWorkingRefferal'
import getReceivedDocumentList from '@salesforce/apex/GetRecordId.getReceivedDocument'
import getCareProgramsList from '@salesforce/apex/GetRecordId.getCarePrograms';
import getCareProgramEnrolleeList from '@salesforce/apex/GetRecordId.getCareProgramEnrollee';
import getShawnaCareProgramEnrolleeList from '@salesforce/apex/GetRecordId.getShawnaCareProgramEnrollee';
import getBenAccountList from '@salesforce/apex/GetRecordId.getBenAccount'

export default class InAppQuaternaryFeature extends LightningElement {

    @api appWelcomeText = "Explore Health Cloud Features for Pharma";
    @api appDescription = "";
    accountId = "";
    benaccountId = "";
    leadrefferalmanagementId = "";
    leadworkingrefferalId = "";
    receiveddocumentId = "";
    careprogramId = "";
    careprogramenrolleeId = "";
    shawnacareprogramId = "";

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

        getBenAccountList()
        .then(result => {
            if (result.length) {
                this.benaccountId = result[0].Id;
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

        getCareProgramsList()
            .then(result => {
                if (result.length) {
                    this.careprogramId = result[0].Id;
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

        getCareProgramEnrolleeList()
            .then(result => {
                if (result.length) {
                    this.careprogramenrolleeId = result[0].Id;
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

        getShawnaCareProgramEnrolleeList()
            .then(result => {
                if (result.length) {
                    this.shawnacareprogramId = result[0].Id;
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