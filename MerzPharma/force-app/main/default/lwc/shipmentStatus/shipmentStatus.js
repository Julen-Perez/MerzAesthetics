import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getShipmentStatus from '@salesforce/apex/ShipmentStatusController.getShipmentStatus';

const FIELDS = ['Shipment.TrackingNumber'];

export default class ShipmentStatus extends LightningElement {
    @api recordId;
    @track status = '';
    @track error = '';
    @track loading = false;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        if (data) {
            this.fetchStatus();
        } else if (error) {
            this.error = 'Error loading record';
        }
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

    get acceptedClass() {
        return 'progress-step' + (this.progressStep >= 1 ? ' active' : '');
    }
    get shippedClass() {
        return 'progress-step' + (this.progressStep >= 2 ? ' active' : '');
    }
    get deliveredClass() {
        return 'progress-step' + (this.progressStep >= 3 ? ' active' : '');
    }

    get timingStatus() {
        console.log('ShipmentStatus timingStatus', this.status);
        console.log('ShipmentStatus timingStatus this.status.includes', this.status.includes('On Time'));
        if (this.status.includes('On Time')) return 'On Time';
        if (this.status.includes('Delayed')) return 'Delayed';
        return 'Unknown';
    }
    get timingClass() {
        if (this.timingStatus === 'On Time') return 'timing-badge timing-success';
        if (this.timingStatus === 'Delayed') return 'timing-badge timing-error';
        return 'timing-badge';
    }
    get timingIcon() {
        if (this.timingStatus === 'On Time') return 'utility:success';
        if (this.timingStatus === 'Delayed') return 'utility:error';
        return 'utility:info';
    }
    get progressStep() {
        // Example status: "Shipped- On Time"
        console.log('ShipmentStatus progressStep', this.status);
        console.log('ShipmentStatus progressStep this.status.startsWith', this.status.startsWith('Shipped'));
        if (this.status.includes('Delivered')) return 3;
        if (this.status.includes('Shipped')) return 2;
        if (this.status.includes('Accepted')) return 1;
        return 0;
    }

    async fetchStatus() {
        this.status = '';
        this.error = '';
        this.loading = true;
        console.log('ShipmentStatus fetchStatus', this.recordId);
        if (!this.recordId) {
            console.log('ShipmentStatus fetchStatus no recordId');
            this.error = 'No recordId provided.';
            this.loading = false;
            return;
        }
        try {
            console.log('ShipmentStatus fetchStatus try');
            const result = await getShipmentStatus({ recordId: this.recordId });
            this.status = result;
            } catch (err) {
            console.log('ShipmentStatus fetchStatus catch', err);
            this.error = err.body && err.body.message ? err.body.message : err.message;
        }
        this.loading = false;
    }
} 