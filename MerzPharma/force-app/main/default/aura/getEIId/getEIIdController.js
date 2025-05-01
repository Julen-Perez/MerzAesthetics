({
	init : function(component, event, helper) {
         var workspaceAPI = component.find("workspace");
        workspaceAPI.getEnclosingTabId().then(function(tabId) {
            console.log('enclosing tab tabId' + tabId);
        console.log("Primary Tabs");
                console.log("Get Tab Info");
        workspaceAPI.getTabInfo({tabId: tabId}).then(function(response) {
            console.log("dadassd");
                    let obj = JSON.stringify(response);
                console.log(JSON.parse(obj));
            console.log("dadassd2131: " + response.parentTabId );
             component.set("v.ParentTabId", response.parentTabId);
                    workspaceAPI.getTabInfo({tabId: response.parentTabId }).then(function(res) {
            console.log("da32231");
                    let obj1 = JSON.stringify(res);
             component.set("v.EngagementId", res.recordId );
                console.log(JSON.parse(obj1));
                        console.log("dad132");
            });
            });
       })
        .catch(function(error) {
            console.log(error);
        });
		
		///
		//
		//
		//
		
		console.log("Getting data using new way");
        workspaceAPI.getAllTabInfo().then(function(response) {
            console.log(response);
            let obj = JSON.stringify(response);
            console.log(JSON.parse(obj));
        	console.log("Got data using new way");
       })
        .catch(function(error) {
            console.log(error);
        });

    }
})