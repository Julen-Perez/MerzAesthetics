({
	init : function(component, event, helper) {
		var workspaceAPI = component.find("workspace");
        var id =component.get("v.DetailId");
         var workspaceAPI = component.find("workspace");
        workspaceAPI.getEnclosingTabId().then(function(tabId) {
            console.log('tabId' + tabId);
            workspaceAPI.openSubtab({
                parentTabId: tabId,
                url: '/lightning/r/Account/'+id+'/view',
                focus: true
            });
       })
        .catch(function(error) {
            console.log(error);
        });
    }
})