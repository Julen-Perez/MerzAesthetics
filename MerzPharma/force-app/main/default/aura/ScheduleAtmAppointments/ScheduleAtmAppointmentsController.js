({
    doInit : function(component, event, helper) {
        var action = component.get("c.getEnrolleeWorkSteps");
        var navService = component.find("navService");
        var assessmentTaskId = component.get("v.pageReference").state.c__assessmentTaskId;
        var visitId = component.get("v.pageReference").state.c__visitId;
        action.setParams({
            stepId: visitId
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var enrolleeId = response.getReturnValue();
                var pageRef = {
                    type: 'standard__navItemPage',
                    attributes: {
                        apiName: 'standard-ScheduleAppointments'               
                    },
                    state: {
                        c__contextId: enrolleeId
                    }
                };
                navService.navigate(pageRef);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
        
        var action1 = component.get("c.updateRecordField");
        action1.setParams({
            "recordId": assessmentTaskId,
            "fieldName": "Status",
            "fieldValue": "Completed"
        });
        action1.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                console.log("Record field updated successfully.");
            } else {
                console.error(response.getError());
            }
        });
        $A.enqueueAction(action1);
    }
})