import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getShipmentStatus from '@salesforce/apex/ShipmentStatusController.getShipmentStatus';

const FIELDS = ['Shipment.TrackingNumber'];

export default class ShipmentStatus extends LightningElement {
    @api recordId;
    @track status = '';
    @track error = '';

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        this.fetchStatus();
    }

    constructor() {
        super();
        console.log('ShipmentStatus constructor');
    }

    connectedCallback() {
    }

    renderedCallback() {
        console.log('ShipmentStatus renderedCallback');
    }

    errorCallback(error, stack) {
        console.error('ShipmentStatus errorCallback', error, stack);
        this.error = error && error.message ? error.message : 'Unknown error';
    }

    async fetchStatus() {
        this.status = '';
        this.error = '';
        console.log('ShipmentStatus fetchStatus', this.recordId);
        if (!this.recordId) {
            console.log('ShipmentStatus fetchStatus no recordId');
            this.error = 'No recordId provided.';
            return;
        }
        try {
            console.log('ShipmentStatus fetchStatus try');
            const result = await getShipmentStatus({ recordId: this.recordId });
            this.status = result;
            console.log('ShipmentStatus fetchStatus status', this.status);
        } catch (err) {
            console.log('ShipmentStatus fetchStatus catch', err);
            this.error = err.body && err.body.message ? err.body.message : err.message;
        }
    }
} 