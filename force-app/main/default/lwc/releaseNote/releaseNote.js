import { LightningElement, track, wire } from 'lwc';
import getReleaseContent from '@salesforce/apex/LandingPageContentClass.getReleaseContent';

export default class ReleaseNote extends LightningElement {

@track releaseData={};
@track dataLoaded=false;

@wire(getReleaseContent)
releaseContent({error, data}){
    if(data){

        if(data.length==0){
            this.dataLoaded=false;
        }
        else{
        this.releaseData.Heading = data[0].Heading__c;
        this.releaseData.IconName = data[0].Icon_Name__c;
        this.releaseData.IconSize = data[0].Icon_Size__c;
        this.releaseData.Desc = data[0].Description__c;
        this.dataLoaded = true;
        }

    }
    if(error){
        //console.log('Error getting release notes');
        dataLoaded=false;
    }
}

}