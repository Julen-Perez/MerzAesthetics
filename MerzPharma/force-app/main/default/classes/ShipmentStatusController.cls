public with sharing class ShipmentStatusController {
    // Uncomment this to use the Merz_IntegrationSettings__c object
    //private static Merz_IntegrationSettings__c settingsInstance;
    //public static final String SHIPMENT_INTEGRATION_NAME = 'ShipmentConsultation';


    @AuraEnabled(cacheable=true)
    public static String getShipmentStatus(Id recordId) {
        String trackingNumber;

        try {
            trackingNumber = [SELECT TrackingNumber FROM Shipment WHERE Id = :recordId LIMIT 1].TrackingNumber;
        } catch (Exception e) {
            throw new AuraHandledException('Could not find shipment or tracking number.');
        }
        if (String.isBlank(trackingNumber)) {
            throw new AuraHandledException('Tracking number is missing, please make sure to fill in the tracking number.');
        }
        // Uncomment this to use the Merz_IntegrationSettings__c object
        //settingsInstance = Merz_IntegrationSettings__c.getValues(SHIPMENT_INTEGRATION_NAME);
        //String endpointurl = settingsInstance.Merz_Endpoint__c+'?trackingNumber='+EncodingUtil.urlEncode(trackingNumber, 'UTF-8');

        String endpointurl = 'https://merzcommunities--tina.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber='+EncodingUtil.urlEncode(trackingNumber, 'UTF-8');
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint( endpointurl);
        req.setMethod('GET');
        req.setHeader('Content-Type', 'application/xml');
        HttpResponse res = http.send(req);
        if (res.getStatusCode() != 200) {
            throw new AuraHandledException('Failed to fetch shipment status.');
        }
        //Use this line to get the actual status from the mock endpoint
        String status = res.getBody();

        //Use this line to check delayed and delivered status
        //String status= 'Delivered- Delayed';
        System.debug('ShipmentStatusController getShipmentStatus status: ' + status);
        return status;
    }
} 