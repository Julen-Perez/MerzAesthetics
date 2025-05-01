# Merz Pharma Shipment Status Integration

## Overview
This project includes a Lightning Web Component (LWC) and supporting Apex logic to display real-time shipment status for `Shipment` records in Salesforce. The status is fetched from an external API and visualized with a progress bar and timing badge.

## Notes
- All required metadata for this solution is included in `manifest/MerzShipmentTracking`.
- No profiles or roles were created as part of this package.
- A Custom Setting was created to handle endpoints, Ensure such custom setting is populated in case you want to make use of it instead of having a hardcoded endpoint.
- The component supports multiple shipment statuses including "Accepted", "Shipped", and "Delivered", with timing indicators for "On Time" and "Delayed" conditions.

## Features
- **LWC (`shipmentStatus`)**: Shows shipment progress (Accepted → Shipped → Delivered) and timing (On Time, Pending, Delayed) with color-coded badges and icons.
- **Apex Controller (`ShipmentStatusController`)**: Calls an external API using the shipment's tracking number and returns the status.
- **Test Coverage**: Comprehensive test class with HTTP callout mocks and error handling.
- **Custom Setting**: Uses a custom setting (`Merz_IntegrationSettings__c`) with the name `ShipmentConsultation` to store the endpoint URL for the shipment status API.
- **RemoteSiteSetting**: Configured as `Merz_Shipment_Tracking` to allow callouts to the external shipment tracking API endpoint.
- **FlexiPage**: Includes a custom `Shipment_Record_Page` where the shipment status component is pre-configured for immediate use.

## Setup Instructions
Deploy the manifest/MerzShipmentTracking/package.xml package on the destination org.

1. **Custom Setting** (optional)
   - After deploying the package add a record with:
     - **Name**: `ShipmentConsultation`
     - **Merz_Endpoint__c**: The endpoint URL for the shipment status API (e.g., `https://merzcommunities--tina.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus`).

2. **Apex Controller**
   - `ShipmentStatusController` queries the `TrackingNumber` from the `Shipment` record, retrieves the endpoint from the custom setting, and makes an HTTP callout to fetch the status.
   - Handles errors for missing tracking numbers and failed API calls.

3. **LWC Usage**
   - The LWC `shipmentStatus` has been placed on the standard Shipment_Record_Page  `Shipment` record page.
   - The component will automatically fetch and display the shipment status, updating in real time as the record changes.

4. **Testing**
   - The test class (`ShipmentStatusControllerTest`) uses `@testSetup` for data creation and mocks HTTP callouts for both success and error scenarios.




- **Status Response Example**: `<response>Shipped- On Time</response>` other examples can be tried by modifying the "response" on the apex class.


