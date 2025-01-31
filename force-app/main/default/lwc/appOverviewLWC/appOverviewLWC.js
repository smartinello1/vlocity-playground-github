import { LightningElement,track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import getAppOverview from '@salesforce/apex/LandingPageContentClass.getAppOverview'
export default class AppOverviewLWC extends LightningElement {

    @track appData={};
    @track dataLoaded
    @track appNameValue='';
    
   
    @wire(CurrentPageReference) 
    getStateParameters(currentPageReference) {
        if (currentPageReference) {
           this.appNameValue = currentPageReference.state?.c__appName;
           //console.log('inside getStateParameters in AppOverviewLWC class === ' + this.appNameValue);
            getAppOverview({appName : this.appNameValue}).then(data => {
            if(data===null|| data===undefined){
                this.dataLoaded = false;
            }
            else if(data){
                this.appData.IconName = data[0].Icon_Name__c;
                this.appData.IconSize = data[0].Icon_Size__c;
                this.appData.Overview = data[0].Description__c;
                this.appData.Heading = data[0].Heading__c;
                this.appData.VideoURL = data[0].Video_Link__c;
    
                //console.log('data==== ' + JSON.stringify(this.appData));
                this.dataLoaded = true;
            }
        }).catch(error => {
            //console.log(error);
			this.dataFetched = false;

		})

    }
   
    }
}