@isTest
public class ShipmentStatusController_Test {
    // Mock for a successful HTTP callout (returns status 200 and a valid response)
    class MockHttpResponseGenerator implements HttpCalloutMock {
        public HTTPResponse respond(HTTPRequest req) {
            HttpResponse res = new HttpResponse();
            res.setHeader('Content-Type', 'application/xml');
            res.setBody('<response>Shipped- On Time</response>');
            res.setStatusCode(200);
            return res;
        }
    }

    // Mock for a failed HTTP callout (returns status 500)
    class MockHttpErrorResponseGenerator implements HttpCalloutMock {
        public HTTPResponse respond(HTTPRequest req) {
            HttpResponse res = new HttpResponse();
            res.setHeader('Content-Type', 'application/xml');
            res.setBody('Error');
            res.setStatusCode(500);
            return res;
        }
    }

    /**
     * Test setup: create two Shipment records, one with a tracking number and one without.
     * These are used in the test methods below.
     */
    @testSetup
    static void setupShipments() {
        Shipment s1 = new Shipment(ShipToName = 'Test Shipment', TrackingNumber = '12345');
        Shipment s2 = new Shipment(ShipToName = 'No Tracking');
        insert new List<Shipment>{s1, s2};
    }

    /**
     * Test the happy path: Shipment with a tracking number, HTTP callout returns 200 and valid response.
     */
    @isTest
    static void testGetShipmentStatus_Success() {
        Shipment shipment = [SELECT Id FROM Shipment WHERE ShipToName = 'Test Shipment' LIMIT 1];
        Test.startTest();
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        String status = ShipmentStatusController.getShipmentStatus(shipment.Id);
        System.assertEquals('<response>Shipped- On Time</response>', status);
        Test.stopTest();
    }

    /**
     * Test the error path: Shipment without a tracking number should throw an AuraHandledException.
     */
    @isTest
    static void testGetShipmentStatus_MissingTrackingNumber() {
        Shipment shipment = [SELECT Id FROM Shipment WHERE ShipToName = 'No Tracking' LIMIT 1];
        Test.startTest();
        try {
            ShipmentStatusController.getShipmentStatus(shipment.Id);
            System.assert(false, 'Expected exception for missing tracking number');
        } catch (AuraHandledException e) {
            System.debug('ShipmentStatusController_Test testGetShipmentStatus_MissingTrackingNumber catch ' + e.getMessage());
            System.assert(e.getMessage().contains('Script-thrown exception'));
        }
        Test.stopTest();
    }

    /**
     * Test the error path: HTTP callout returns a non-200 status code, should throw an AuraHandledException.
     */
    @isTest
    static void testGetShipmentStatus_HttpError() {
        Shipment shipment = [SELECT Id FROM Shipment WHERE ShipToName = 'Test Shipment' LIMIT 1];
        Test.startTest();
        Test.setMock(HttpCalloutMock.class, new MockHttpErrorResponseGenerator());
        try {
            ShipmentStatusController.getShipmentStatus(shipment.Id);
            System.assert(false, 'Expected exception for HTTP error');
        } catch (AuraHandledException e) {
            System.debug('ShipmentStatusController_Test testGetShipmentStatus_HttpError catch ' + e.getMessage());
            System.assert(e.getMessage().contains('Script-thrown exception'));
        }
        Test.stopTest();
    }
} 