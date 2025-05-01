import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
 
export default class InAppPrimaryFeatureChild extends NavigationMixin(LightningElement) {
    
        @api heading = "";
        @api linkInNewTab = false;
        @api linkReference = "";
        @api linkReferenceProvider = "";
        @api linkReferenceOpportunity = "";
        @api linkReferenceAccount = "";
        @api linkReferenceProviderContact = "";
        @api app = "";
        @api page = "";
        @api objectName = "";
        @api objectNameProvider = "";
        @api objectProviderId = "";
        @api objectNameAccount = "";
        @api objectAccountId = "";
        @api objectNameProviderContact = "";
        @api objectProviderContactId = "";
        @api objectNameOpportunity = "";
        @api filterNameOpportunity = "";
        @api objectId = "";
        @api filterName = "";
        @api pageReference = [];
        @api image = "standard:all";
        @api secondaryTextPresent = false;
        @api secondaryText = "";
        @api secondaryNewLineTextPresent = false;
        @api secondaryCarePlanText = "";
        @api secondaryCareGapText = "";
        @api secondaryHouseholdText = "";
        @api secondaryAssessmentText = "";
        @api secondaryBenefitsText = "";
        @api secondarySocialText = "";
        @api secondaryDeviceText = "";
        @api secondaryVerificationText = "";
        @api secondaryTimelineText = "";
        @api secondaryMmTextPresent = false;
        @api secondaryMmText = "";
        @api secondaryMrText = "";
        @api secondaryIdaTextPresent= false;
        @api secondaryIdaText = "";
        @api secondaryVisitsTextPresent = false;
        @api secondaryVisitsText = "";
        @api noRecord = false;
        @api appText = "";
        @api providerText = "";
        @api providerLink = "";
        @api linkTextPresent = false;
        @api linkText = "";
        @api startText = "* Click ";
        @api startTextWithoutStar = "Click ";
        @api here = "here";
        @api endTextPresent = false;
        @api endText = "";
        @api contactLinkPresent = false;
        @api contactTextPresent = false;
        @api contactText = "";
        @api accountLinkPresent = false;
        @api accountTextPresent = false;
        @api accountText = "";
        @api refferalText = "";
        @api refferalStartText = "";
        @api refferalTextPresent = false;
        @api stepsText = "Steps to Follow";
    
        handleClick(event) {
    
            if (this.linkReference == "standard__namedPage") {
                this.pageReference = {
                    type: "standard__app",
                    attributes: {
                        appTarget: this.app,
                        pageRef: {
                            type: "standard__namedPage",
                            attributes: {
                                pageName: this.page
                            }
                        }
                    }
                }
            }  
            else if (this.linkReference == "standard__navItemPage") {
                this.pageReference = {
                    type: "standard__app",
                    attributes: {
                        appTarget: this.app,
                        pageRef: {
                            type: "standard__navItemPage",
                            attributes: {
                                apiName: this.page
                            }
                        }
                    }
                }
            
            } else if (this.linkReference == "standard__recordPage") {
                this.pageReference = {
                    type: "standard__app",
                    attributes: {
                        appTarget: this.app,
                        pageRef: {
                            type: 'standard__recordPage',
                            attributes: {
                                objectApiName: this.objectName,
                                actionName: 'view',
                                recordId: this.objectId
                            }
                        }
                    }
                }
            } else if (this.linkReference == "standard__objectPage") {
                this.pageReference = {
                    type: "standard__app",
                    attributes: {
                        appTarget: this.app,
                        pageRef: {
                            type: 'standard__objectPage',
                            attributes: {
                                objectApiName: this.objectName,
                                actionName: 'list'
                            },
                            state: {
                                filterName: this.filterName
                            }
                        }
                    }
                }
            } else if (this.linkReference == "standard__recordRelationshipPage") {
                this.pageReference = {
                    type: "standard__app",
                    attributes: {
                        appTarget: this.app,
                        pageRef: {
                            type: 'standard__recordRelationshipPage',
                            attributes: {
                                objectApiName: this.objectName,
                                actionName: 'view',
                                recordId: this.objectId,
                                relationshipApiName: this.relatedEntity
                            }
                        }
                    }
                }
            } else if (this.linkReference == "standard__webPage") {
                this.pageReference = {
                    type: 'standard__webPage',
                    attributes: {
                        url: this.url
                    }
                }
            }
            if (this.linkInNewTab) {
                this[NavigationMixin.GenerateUrl](this.pageReference)
                .then(generated_url => {
                    const windowContextNameUUID = crypto.randomUUID();
                    window.open('',windowContextNameUUID);
                    window.open(generated_url, windowContextNameUUID);} );
            } else {
                this[NavigationMixin.Navigate](this.pageReference);
            }
    
        }
        handleClickForAccount(event){
              if (this.linkReferenceAccount == "standard__recordPage") {
                    this.pageReference = {
                        type: "standard__app",
                        attributes: {
                            appTarget: this.app,
                            pageRef: {
                                type: 'standard__recordPage',
                                attributes: {
                                    objectApiName: this.objectNameAccount,
                                    actionName: 'view',
                                    recordId: this.objectAccountId
                                }
                                
                            }
                        }
                    }
                }
                if (this.linkInNewTab) {
                    this[NavigationMixin.GenerateUrl](this.pageReference)
                    .then(generated_url => {
                        const windowContextNameUUID = crypto.randomUUID();
                        window.open('',windowContextNameUUID);
                        window.open(generated_url, windowContextNameUUID);} );
                } else {
                    this[NavigationMixin.Navigate](this.pageReference);
                }
        }
        handleClickForProviderAccount(event){
            if (this.linkReferenceProvider == "standard__recordPage") {
                  this.pageReference = {
                      type: "standard__app",
                      attributes: {
                          appTarget: this.app,
                          pageRef: {
                              type: 'standard__recordPage',
                              attributes: {
                                  objectApiName: this.objectNameProvider,
                                  actionName: 'view',
                                  recordId: this.objectProviderId
                              }
                              
                          }
                      }
                  }
              }
              if (this.linkInNewTab) {
                this[NavigationMixin.GenerateUrl](this.pageReference)
                .then(generated_url => {
                    const windowContextNameUUID = crypto.randomUUID();
                    window.open('',windowContextNameUUID);
                    window.open(generated_url, windowContextNameUUID);} );
            } else {
                this[NavigationMixin.Navigate](this.pageReference);
            }
      }
      handleClickForProviderContact(event){
        if (this.linkReferenceProviderContact == "standard__recordPage") {
              this.pageReference = {
                  type: "standard__app",
                  attributes: {
                      appTarget: this.app,
                      pageRef: {
                          type: 'standard__recordPage',
                          attributes: {
                              objectApiName: this.objectNameProviderContact,
                              actionName: 'view',
                              recordId: this.objectProviderContactId
                          }
                          
                      }
                  }
              }
          }
          if (this.linkInNewTab) {
            this[NavigationMixin.GenerateUrl](this.pageReference)
            .then(generated_url => {
                const windowContextNameUUID = crypto.randomUUID();
                window.open('',windowContextNameUUID);
                window.open(generated_url, windowContextNameUUID);} );
        } else {
            this[NavigationMixin.Navigate](this.pageReference);
        }
  }
  handleClickForOpportunity(event){
       if (this.linkReferenceOpportunity == "standard__objectPage") {
                this.pageReference = {
                    type: "standard__app",
                    attributes: {
                        appTarget: this.app,
                        pageRef: {
                            type: 'standard__objectPage',
                            attributes: {
                                objectApiName: this.objectNameOpportunity,
                                actionName: 'list'
                            },
                            state: {
                                filterName: this.filterNameOpportunity
                            }
                        }
                    }
                }
            }
      if (this.linkInNewTab) {
          this[NavigationMixin.GenerateUrl](this.pageReference)
          .then(generated_url => {
            const windowContextNameUUID = crypto.randomUUID();
            window.open('',windowContextNameUUID);
            window.open(generated_url, windowContextNameUUID);} );
      } else {
          this[NavigationMixin.Navigate](this.pageReference);
      }
}

        get pass_true() {
            return true;
        }
    
        get pass_false() {
            return false;
        }
            
    }