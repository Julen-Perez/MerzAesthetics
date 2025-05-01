({
	initEntities : function(component, event, helper) {
		var actionPatientInformation=component.get("c.getAccount");
        actionPatientInformation.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.PatientInformation",id); 
            var fieldValue = component.get("v.PatientInformation");
            console.log('Patient Information selected is : '+JSON.stringify(fieldValue));
        });
      $A.enqueueAction(actionPatientInformation);
		var actionCarePrograms=component.get("c.getAccount");
        actionCarePrograms.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.CarePrograms",id); 
            var fieldValue = component.get("v.CarePrograms");
            console.log('Care Programs selected is : '+JSON.stringify(fieldValue));
        });
      $A.enqueueAction(actionCarePrograms);
          var actionMedicationManagement=component.get("c.getAccount");
        actionMedicationManagement.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.MedicationManagement",id); 
            var fieldValue = component.get("v.MedicationManagement");
            console.log('Medication Management selected is : '+JSON.stringify(fieldValue));
        });
          $A.enqueueAction(actionMedicationManagement);
           var actionSearchProvidersAndBookAppointments=component.get("c.getCarePrograms");
        actionSearchProvidersAndBookAppointments.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.SearchProvidersAndBookAppointments",id); 
            var fieldValue = component.get("v.CarePrograms");
            console.log('Provider And Appointment selected is : '+JSON.stringify(fieldValue));
        });
          $A.enqueueAction(actionSearchProvidersAndBookAppointments);
        
          var actionReferralManagement=component.get("c.getAccount");
        actionReferralManagement.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.ReferralManagement",id); 
            var fieldValue = component.get("v.ReferralManagement");
            console.log('Referral Management selected is : '+JSON.stringify(fieldValue));
        });
          $A.enqueueAction(actionReferralManagement);
        
         var actionIntelligentDocumentAutomation=component.get("c.getAccount");
        actionIntelligentDocumentAutomation.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.IntelligentDocumentAutomation",id); 
            var fieldValue = component.get("v.IntelligentDocumentAutomation");
            console.log('Intelligent Document Automation selected is : '+JSON.stringify(fieldValue));
        });
          $A.enqueueAction(actionIntelligentDocumentAutomation);
        
          var actionProviderNetworkManagement=component.get("c.getAccount");
        actionProviderNetworkManagement.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.ProviderNetworkManagement",id); 
            var fieldValue = component.get("v.ProviderNetworkManagement");
            console.log('Provider Network Management selected is : '+JSON.stringify(fieldValue));
        });
          $A.enqueueAction(actionProviderNetworkManagement);
        
        
        
	}
    



  
})