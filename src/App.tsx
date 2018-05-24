import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent} from '@syncfusion/ej2-react-popups'
import * as React from 'react';
import './App.css';


class App extends React.Component {
  public dialogInstance: DialogComponent;
  public dialogInstance1: DialogComponent;
  public state: {[key: string]: boolean};
  public path = {
    removeUrl: 'http://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
    saveUrl: 'http://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
  }
  public buttons: any = [{
        // Accessing button component properties by buttonModel property
    buttonModel: {
        // Enables the primary button
      content: 'OK',
      cssClass: 'e-flat',
      isPrimary: true,
        
    },
    // Click the footer buttons to hide the Dialog
    'click': () => {
        this.dialogInstance1.hide();
    }
}];
  constructor(props:any) {
    super(props);
    this.state = {
      createUpload: false,
      inputLinkClicked: false
    }
  }

  public AddSecondComp() {
    this.setState({
      inputLinkClicked: true
    })
    if(this.dialogInstance1 !=null) {
      this.dialogInstance1.show();
    }
  }
  public handleClick() {
    this.dialogInstance.show();   
  }
  public AddUploader() {
    this.setState({
      createUpload: true
    })
  }
  public render() {
    return (
      <div className="App">
    <button className='e-control e-btn' id='targetButton' role='button' onClick={this.handleClick=this.handleClick.bind(this)} >Open Dialog</button>
    <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.AddSecondComp=this.AddSecondComp.bind(this)} >Dialog Dynamic</button>
    <button className='e-control e-btn' id='uploader' role='button' onClick={this.AddUploader=this.AddUploader.bind(this)} >Uploader Dynamic</button>
    
     <DialogComponent visible={false}  width='250px' locale='fr-BE' content='This is a Dialog with content' 
    target='#container'  ref={dialog => this.dialogInstance = dialog!}/>
      {
        this.state.inputLinkClicked? <DialogComponent showCloseIcon={true} buttons={this.buttons} header={'dynamic rendering'}  width='250px' locale='fr-BE' content='This Dialog Created Dynamically!' 
        target='#container'  ref={dialog1 => this.dialogInstance1 = dialog1!}><UploaderComponent autoUpload={false} asyncSettings={this.path} /></DialogComponent> : ''
      }
       {
        this.state.createUpload? <UploaderComponent autoUpload={false} asyncSettings={this.path} />: ''
      }
      </div>
    );
  }
  }
export default App;
