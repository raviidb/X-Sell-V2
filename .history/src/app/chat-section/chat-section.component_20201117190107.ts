import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
})
export class ChatSectionComponent implements OnInit {

  title = 'X-sell-V2';
  isYes:boolean;
  isContinueWithUserName:boolean;
  isSelectedLoanRange:boolean;
  initialPersonalInfo:boolean = true;
  intialPersonalForm:boolean;
  isFiledPersonalFormStatus:boolean;
  initialPersonalForm:boolean;
  empInitialInfo:boolean = true;
  empInitialForm:boolean;
  empInfoStatus:boolean;
  afterVerifedOTP:boolean;
  afterFilledPersonalInfo:boolean;
  afterIsSalariedSelected:boolean;
  afterFilledEmpInfo:boolean;
  comAddressInitialInfo:boolean;
  comAddressInitialForm:boolean;
  comAddressIntialStatus:boolean;
  afterFilledCommunicationInfo:boolean;
  requiredMsg:string;
  value = 50000;
  salaryValue = 20000;
  maxValue:any;
  empType = [
    {value:'Salaried', viewValue:'Salaried'},
    {value:'Self_Employed_Professional', viewValue:'Self Employed Professional'},
    {value:'Self_Employed_Non_Professional', viewValue:'Self Employed Non Professional'}
  ];
  periodType = [
    {value:'Monthly', viewValue:'Monthly'},
    {value:'Annual', viewValue:'Annual'},
  ];
  residenceType = [
    {value:'Owned', viewValue:'Owned'},
    {value:'Rented', viewValue:'Rented'},
  ]
  options: Options = {
    showTicks: true,
    stepsArray: [
      { value: 50000, legend: "50k" },
      { value: 100000, legend: "" },
      { value: 200000, legend: "" },
      { value: 300000, legend: "" },
      { value: 400000, legend: "" },
      { value: 500000, legend: "5L" }
    ]
  };
  options1: Options = {
    showTicks: true,
    stepsArray: [
      { value: 20000, legend: "20k" },
      { value: 30000, legend: "" },
      { value: 40000, legend: "" },
      { value: 50000, legend: "" },
      { value: 60000, legend: "" },
      { value: 70000, legend: "" },
      { value: 80000, legend: "" },
      { value: 90000, legend: "" },,
      { value: 100000, legend: "100k" }
    ]
  };


  // Form Field Value
  userName:any;

  // OTP Config
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
    'border-bottom': '1px solid #b7b5b5',
    'outline': 'none',
    'border-top': 'none',
    'border-left': 'none',
    'border-right': 'none',
    'margin-bottom': '10px',
    'height': '24px'
    }
  };
  
  ngOnInit(){

  }
  onOtpChange(otp){
    if(otp.length == 4){
      this.afterVerifedOTP = true;
    }
  }
  onYes(){
    this.isYes = true;
  }
  onContinue(){
    if(this.userName == '' || this.userName == undefined){
      this.requiredMsg = 'This is required.';
    }else{
      this.isContinueWithUserName = true;
      this.requiredMsg = '';
    }
  }
  onPersonalInfoFillDetails(){
    this.initialPersonalForm = true;
    this.initialPersonalInfo = false;
    this.isFiledPersonalFormStatus = false;
  }
  onSubmitPersonalInformation(){
    this.initialPersonalInfo = false;
    this.intialPersonalForm = false;
    this.initialPersonalForm = false;
    this.isFiledPersonalFormStatus = true;
    this.afterFilledPersonalInfo = true;
  }
  onFillEmpInfo(){
    this.empInitialForm = true;
    this.empInitialInfo = false;
  }
  onSubmitEmpInfo(){
    this.empInitialForm = false;
    this.empInitialInfo = false;
    this.empInfoStatus = true;
    this.afterFilledEmpInfo = true;
    this.comAddressInitialInfo = true;
  }
  isSalaried(){
    this.afterIsSalariedSelected = true;
  }
  onFillComAddressInfo(){
    this.comAddressInitialForm = true;
    this.comAddressInitialInfo = false;
  }
  onSubmitComAddressInfo(){
    this.comAddressInitialForm = false;
    this.comAddressIntialStatus = true;
    this.afterFilledCommunicationInfo = true;
  }

}
