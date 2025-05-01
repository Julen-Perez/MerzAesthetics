({
	initEntities : function(component, event, helper) {
		var actionPatientInformation=component.get("c.getAccount");
        actionPatientInformation.setCallback(this,function(data){
          var id=data.getReturnValue();
                 if (id == "") {
                component.set("v.no_record_patient_information", "true");
            } 
            else{
          component.set("v.PatientInformation",id); 
            var fieldValue = component.get("v.PatientInformation");
            console.log('Patient Information selected is : '+JSON.stringify(fieldValue));
            }
        });
      $A.enqueueAction(actionPatientInformation);
		var actionCarePrograms=component.get("c.getCarePrograms");
        actionCarePrograms.setCallback(this,function(data){
          var id=data.getReturnValue();
                if (id == "") {
                component.set("v.no_record_care_programs", "true");
            } 
            else{
          component.set("v.CarePrograms",id); 
            var fieldValue = component.get("v.CarePrograms");
            console.log('Care Programs selected is : '+JSON.stringify(fieldValue));
            }
        });
      $A.enqueueAction(actionCarePrograms);
        
        	var actionAccount=component.get("c.getBenAccount");
        actionAccount.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.Account",id);
           var fieldValue = component.get("v.Account");
            console.log('Account selected is : '+JSON.stringify(fieldValue));
            
        });
      $A.enqueueAction(actionAccount);
        
        
          var actionMedicationManagement=component.get("c.getAccount");
        actionMedicationManagement.setCallback(this,function(data){
          var id=data.getReturnValue();
               if (id == "") {
                component.set("v.no_record_medication_management", "true");
            } 
            else{
          component.set("v.MedicationManagement",id); 
            var fieldValue = component.get("v.MedicationManagement");
            console.log('Medication Management selected is : '+JSON.stringify(fieldValue));
            }
        });
          $A.enqueueAction(actionMedicationManagement);
           var actionSearchProvidersAndBookAppointments=component.get("c.getMakanaAccount");
        actionSearchProvidersAndBookAppointments.setCallback(this,function(data){
          var id=data.getReturnValue();
         component.set("v.SearchProvidersAndBookAppointments",id); 
            var fieldValue = component.get("v.SearchProvidersAndBookAppointments");
            console.log('Provider And Appointment selected is : '+JSON.stringify(fieldValue));
        });
          $A.enqueueAction(actionSearchProvidersAndBookAppointments);
        
          	var actionContact=component.get("c.getContacts");
        actionContact.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.Contact",id);
           var fieldValue = component.get("v.Contact");
            console.log('Contact selected is : '+JSON.stringify(fieldValue));
        });
      $A.enqueueAction(actionContact);
        
         	var actionMakanaAccount=component.get("c.getMakanaAccount");
        actionMakanaAccount.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.MakanaAccount",id);
           var fieldValue = component.get("v.MakanaAccount");
            console.log('Makana account selected is : '+JSON.stringify(fieldValue));
        });
      $A.enqueueAction(actionMakanaAccount);
        
          var actionReferralManagement=component.get("c.getLeadRefferalManagement");
        actionReferralManagement.setCallback(this,function(data){
          var id=data.getReturnValue();
                  if (id == "") {
                component.set("v.no_record_referal_management", "true");
            } 
            else{
          component.set("v.ReferralManagement",id); 
            var fieldValue = component.get("v.ReferralManagement");
            console.log('Referral Management selected is : '+JSON.stringify(fieldValue));
            }
        });
          $A.enqueueAction(actionReferralManagement);
        
         	var actionWorkingListView=component.get("c.getWorkingRefferal");
        actionWorkingListView.setCallback(this,function(data){
          var id=data.getReturnValue();
          component.set("v.WorkingRefferals",id);
           var fieldValue = component.get("v.WorkingRefferals");
            console.log('WorkingRefferals selected is : '+JSON.stringify(fieldValue));
        });
        $A.enqueueAction(actionWorkingListView);
        
         var actionIntelligentDocumentAutomation=component.get("c.getReceivedDocument");
        actionIntelligentDocumentAutomation.setCallback(this,function(data){
          var id=data.getReturnValue();
               if (id == "") {
                component.set("v.no_record_ida", "true");
            } 
            else{
          component.set("v.IntelligentDocumentAutomation",id); 
            var fieldValue = component.get("v.IntelligentDocumentAutomation");
            console.log('Intelligent Document Automation selected is : '+JSON.stringify(fieldValue));
            }
        });
          $A.enqueueAction(actionIntelligentDocumentAutomation);
        
          var actionProviderNetworkManagement=component.get("c.getFortisAccount");
        actionProviderNetworkManagement.setCallback(this,function(data){
          var id=data.getReturnValue();
               if (id == "") {
                component.set("v.no_record_pnm", "true");
            } 
            else{
          component.set("v.ProviderNetworkManagement",id); 
            var fieldValue = component.get("v.ProviderNetworkManagement");
            console.log('Provider Network Management selected is : '+JSON.stringify(fieldValue));
            }
        });
          $A.enqueueAction(actionProviderNetworkManagement);
        
        var actionUnifiedHealthScoring=component.get("c.getAccount");
        actionUnifiedHealthScoring.setCallback(this,function(data){
          var id=data.getReturnValue();
               if (id == "") {
                component.set("v.no_record_uhs", "true");
            } 
            else{
          component.set("v.UnifiedHealthScoring",id); 
            var fieldValue = component.get("v.UnifiedHealthScoring");
            console.log('Unified Health scoring selected is : '+JSON.stringify(fieldValue));
            }
        });
          $A.enqueueAction(actionUnifiedHealthScoring);
    
    
    }
    



  
})