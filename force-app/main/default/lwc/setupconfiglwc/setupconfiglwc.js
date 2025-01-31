import { LightningElement,track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import getSetup from '@salesforce/apex/LandingPageContentClass.getSetup';
import getPopUpModalData from '@salesforce/apex/LandingPageContentClass.getPopUpModalData';

export default class Setupconfiglwc extends LightningElement {

    @track appData
    @track dataLoaded=false;
    @track isShowModal=false
    @track dataModal={};
    @track appName;
   
    @wire(CurrentPageReference) 
    getStateParameters(currentPageReference) {
        if (currentPageReference) {
           this.appNameValue = currentPageReference.state?.c__appName;
           //console.log('inside connectedCallback for Setupconfiglwc for application == ' + this.appNameValue);
           this.dataLoaded = false;
           getSetup({appName : this.appNameValue}).then(res => {
            //console.log('asdassdasdasd' + JSON.stringify(res));
                if(res.length==0){
                    this.dataLoaded = false;
                    this.appName = 'Follow these steps to implement and experience <strong>' + this.appNameValue +'</strong>';
                }
                else if(res.length>0){
                    this.appData = res;
        
                    //console.log('data==== getSetup ==' + JSON.stringify(this.appData));
                    this.dataLoaded = true;
                    this.appName = 'Follow these steps to implement and experience <strong>' + this.appNameValue +'</strong>';
                }
            }).catch(error => {
                //console.log('eroror==== getSetup =='+error);
                this.dataLoaded = false;
                this.appName = 'Follow these steps to implement and experience <strong>' + this.appNameValue +'</strong>';

            })
        }
     }
   
    handleClick(event){
        var btnValue = event.target.dataset.id;
        //console.log('inside click for popup ' + this.appNameValue+'-'+btnValue );
        getPopUpModalData({appName:this.appNameValue+' - '+btnValue}).then(res => {
            //console.log('asdassdasdasd' + JSON.stringify(res));
            if(res.length==0){
                this.isShowModal = false
            }
            else if(res.length>0){
                this.dataModal = res[0];
    
                //console.log('data==== getDataModal ==' + JSON.stringify(this.dataModal));
                this.isShowModal = true;
            }
        }).catch(error => {
            //console.log('eroror==== getDataModal =='+error);
            this.isShowModal = false;

        })
    }

    hideModalBox(){
        this.isShowModal = false;
    }

}