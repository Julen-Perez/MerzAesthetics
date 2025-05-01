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
		var actionSalesAgreement=component.get("c.getSalesAgreement");
        actionSalesAgreement.setCallback(this,function(data){
          var id=data.getReturnValue();
                if (id == "") {
                component.set("v.no_record_sales_agreement", "true");
            } 
            else{
          component.set("v.SalesAgreement",id); 
            var fieldValue = component.get("v.SalesAgreement");
            console.log('Sales Agreement selected is : '+JSON.stringify(fieldValue));
            }
        });
      $A.enqueueAction(actionSalesAgreement);
        
        	var actionForecastDeviceSales=component.get("c.getForecastDeviceSales");
        actionForecastDeviceSales.setCallback(this,function(data){
          var id=data.getReturnValue();
                 if (id == "") {
                component.set("v.no_record_forecasts_device_sales", "true");
            } 
            else{
          component.set("v.ForecastDeviceSales",id);
           var fieldValue = component.get("v.ForecastDeviceSales");
            console.log('Forecast Device Sales selected is : '+JSON.stringify(fieldValue));
            }
            
        });
      $A.enqueueAction(actionForecastDeviceSales);
        
          var actionIntelligentSales=component.get("c.getAccount");
        actionIntelligentSales.setCallback(this,function(data){
          var id=data.getReturnValue();
         component.set("v.IntelligentSales",id); 
            var fieldValue = component.get("v.IntelligentSales");
            console.log('Intelligent Sales selected is : '+JSON.stringify(fieldValue));
         
        });
        $A.enqueueAction(actionIntelligentSales); 

		/*Advanced Account Forecast*/        
        var actionAdvAccountForecast=component.get("c.getAdvAccountForecast");
        actionAdvAccountForecast.setCallback(this,function(data){
          var id=data.getReturnValue();
                 if (id == "") {
                component.set("v.no_record_Advanced_Account_forecast", "true");
            } 
            else{
          component.set("v.AdvAccountForecast",id);
           var fieldValue = component.get("v.AdvAccountForecast");
            console.log('Advanced Account Forecast selected is : '+JSON.stringify(fieldValue));
            }
            
        });
      $A.enqueueAction(actionAdvAccountForecast);
        
         
        
	}
    



  
})