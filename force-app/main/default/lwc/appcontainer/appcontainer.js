import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from "lightning/navigation";
import getAppsList from '@salesforce/apex/LandingPageContentClass.getAppsList'

export default class Appcontainer extends NavigationMixin(LightningElement)  {

@track appData
@track dataLoaded


@wire (getAppsList)
getAppsList({data,error}){
    if(data){
        console.log("data for app model-- " + JSON.stringify(data));
        this.appData = data;
        this.dataLoaded = true;
    }
    if(error){
        this.dataLoaded = false;
    }
}
  handleClick(event){

    console.log('inside handle on btn click');

    var appNameValue = event.target.dataset.id;

    console.log('inside handle on btn click for app = ' + appNameValue );

    this[NavigationMixin.Navigate]({
        type: 'standard__navItemPage',
        attributes: {
            apiName: 'ApplicationDetails',
        },
        state: {
            c__appName: appNameValue
      }
    });

  }

}