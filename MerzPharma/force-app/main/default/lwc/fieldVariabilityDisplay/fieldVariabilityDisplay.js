import { LightningElement, api, track, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class FieldVariabilityDisplay extends LightningElement {

    @api recordId;
    @track showRecordEditForms = false;
    @track objectNameFieldNameList = [];

    connectedCallback() {
        this.mainFunction(this.recordId);
    }
    
    mainFunction(fieldList) {
        if (fieldList) {
            const jsonData = JSON.parse(fieldList);

            jsonData.Fields.forEach(field => {
                const { ObjectName, FieldName, Required } = field;
                this.objectNameFieldNameList.push({ObjectName, FieldName, Required});
            });

            this.showRecordEditForms = true;
        }
    }
    
    guid() {
        return Math.floor(Math.random() * 9999999);
    }
}