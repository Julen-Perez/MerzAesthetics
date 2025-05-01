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
        
        /* ATM Charles*/
        var actionCareProgramEnrollee=component.get("c.getCareProgramEnrollee");
        actionCareProgramEnrollee.setCallback(this,function(data){
          var id=data.getReturnValue();
                if (id == "") {
                component.set("v.no_record_care_programs_Enrollee", "true");
            } 
            else{
          component.set("v.CareProgramEnrollee",id); 
            var fieldValue = component.get("v.CareProgramEnrollee");
            console.log('Care Program Enrollee  selected is : '+JSON.stringify(fieldValue));
            }
        });
      $A.enqueueAction(actionCareProgramEnrollee); 
        
        /* ATM Shawna*/
        var actionShawnaCareProgramEnrollee=component.get("c.getShawnaCareProgramEnrollee");
        actionShawnaCareProgramEnrollee.setCallback(this,function(data){
          var id=data.getReturnValue();
                if (id == "") {
                component.set("v.no_record_care_programs_Enrollee", "true");
            } 
            else{
          component.set("v.ShawnaCareProgramEnrollee",id); 
            var fieldValue = component.get("v.ShawnaCareProgramEnrollee");
            console.log('Shawna CareProgram Enrollee selected is : '+JSON.stringify(fieldValue));
            }
        });
      $A.enqueueAction(actionShawnaCareProgramEnrollee); 
        
        /* IDA */
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
        
        
	}
    



  
})