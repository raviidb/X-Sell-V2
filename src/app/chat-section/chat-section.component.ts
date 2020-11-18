import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
})
export class ChatSectionComponent implements OnInit {
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
  isNotSameAddress:boolean = true;
  isCheckedSameAddress:boolean = true;
  isSelectLoanAmt:boolean;
  isSelectIncomeAmt:boolean;
  requiredMsg:string;
  value = 50000;
  value1 = 60000;
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
      { value: 10000, legend: "10,000" },
      { value: 20000, legend: "" },
      { value: 30000, legend: "" },
      { value: 40000, legend: "" },
      { value: 50000, legend: "" },
      { value: 60000, legend: "" },
      { value: 70000, legend: "" },
      { value: 80000, legend: "" },
      { value: 90000, legend: "" },
      { value: 100000, legend: "" },
      { value: 110000, legend: "" },
      { value: 120000, legend: "" },
      { value: 130000, legend: "" },
      { value: 140000, legend: "" },
      { value: 150000, legend: "" },
      { value: 160000, legend: "" },
      { value: 170000, legend: "" },
      { value: 180000, legend: "" },
      { value: 190000, legend: "" },
      { value: 200000, legend: "" },
      { value: 210000, legend: "" },
      { value: 220000, legend: "" },
      { value: 230000, legend: "" },
      { value: 240000, legend: "" },
      { value: 250000, legend: "" },
      { value: 260000, legend: "" },
      { value: 270000, legend: "" },
      { value: 280000, legend: "" },
      { value: 290000, legend: "" },
      { value: 300000, legend: "3 Lakh" }
    ]
  };
  options2: Options = {
    showTicks: true,
    stepsArray: [
      { value: 10000, legend: "10,000" },
      { value: 20000, legend: "" },
      { value: 30000, legend: "" },
      { value: 40000, legend: "" },
      { value: 50000, legend: "" },
      { value: 60000, legend: "" },
      { value: 70000, legend: "" },
      { value: 80000, legend: "" },
      { value: 90000, legend: "" },
      { value: 100000, legend: "" },
      { value: 110000, legend: "" },
      { value: 120000, legend: "" },
      { value: 130000, legend: "" },
      { value: 140000, legend: "" },
      { value: 150000, legend: "" },
      { value: 160000, legend: "" },
      { value: 170000, legend: "" },
      { value: 180000, legend: "" },
      { value: 190000, legend: "" },
      { value: 200000, legend: "" },
      { value: 210000, legend: "" },
      { value: 220000, legend: "" },
      { value: 230000, legend: "" },
      { value: 240000, legend: "" },
      { value: 250000, legend: "" },
      { value: 260000, legend: "" },
      { value: 270000, legend: "" },
      { value: 280000, legend: "" },
      { value: 290000, legend: "" },
      { value: 300000, legend: "3 Lakh" }
    ]
  };

  // Showing message property
  showMsg1:boolean;showMsg2:boolean;showMsg3:boolean;showMsg4:boolean;showMsg5:boolean;showMsg6:boolean;showMsg7:boolean;
  showMsg8:boolean;showMsg9:boolean;showMsg10:boolean;showMsg11:boolean;showMsg12:boolean;showMsg13:boolean;showMsg14:boolean;
  showMsg15:boolean;showMsg16:boolean;showMsg17:boolean;showMsg18:boolean;showMsg19:boolean;showMsg20:boolean;showMsg21:boolean;
  showMsg22:boolean;showMsg23:boolean;showMsg24:boolean;showMsg25:boolean;showMsg26:boolean;showMsg27:boolean;showMsg28:boolean;
  showMsg29:boolean;showMsg30:boolean;showMsg31:boolean;showMsg32:boolean;showMsg33:boolean;showMsg34:boolean;showMsg35:boolean;
  showMsg36:boolean;showMsg37:boolean;showMsg38:boolean;showMsg39:boolean;

  // Form Field Value
  userName:any;
  mobileNumber:any;

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
    setTimeout(()=>{this.showMsg1=true;},1000);
    setTimeout(()=>{this.showMsg2=true;},1800);
    setTimeout(()=>{this.showMsg3=true;},2600);
  }

  onSameAddressChecked(value){
    console.log("value- ", value.checked);
    if(value.checked !== true){
      this.isNotSameAddress = false;
    }else{
      this.isNotSameAddress = true;
    }
  }
  onOtpChange(otp){
    if(otp.length == 4){
      this.afterVerifedOTP = true;
      setTimeout(()=>{this.showMsg17=true;},500);
      setTimeout(()=>{this.showMsg18=true;},1300);
      setTimeout(()=>{this.showMsg19=true;},2100);
      setTimeout(()=>{this.showMsg20=true;},2900);
    }
  }
  onYes(){
    this.isYes = true;
    setTimeout(()=>{this.showMsg4=true;},500);
    setTimeout(()=>{this.showMsg5=true;},1300);
    setTimeout(()=>{this.showMsg6=true;},2100);
    setTimeout(()=>{this.showMsg7=true;},2900);
  }
  onContinue(){
    if(this.userName == '' || this.userName == undefined){
      this.requiredMsg = 'This is required.';
    }else{
      this.isContinueWithUserName = true;
      setTimeout(()=>{this.showMsg8=true;},500);
      setTimeout(()=>{this.showMsg9=true;},1300);
      setTimeout(()=>{this.showMsg10=true;},2100);
      setTimeout(()=>{this.showMsg11=true;},2900);
      setTimeout(()=>{this.showMsg12=true;},3700);
      this.requiredMsg = '';
    }
  }
  onSelectLoanAmount(){
    this.isSelectLoanAmt = true;
    setTimeout(()=>{this.showMsg13=true;},500);
    setTimeout(()=>{this.showMsg14=true;},1300);
    setTimeout(()=>{this.showMsg15=true;},2100);
    setTimeout(()=>{this.showMsg16=true;},2900);
  }
  onSelectIncomeAmount(){
    this.isSelectIncomeAmt = true;
    setTimeout(()=>{this.showMsg30=true;},500);
    setTimeout(()=>{this.showMsg31=true;},1300);
    setTimeout(()=>{this.showMsg32=true;},2100);
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
    setTimeout(()=>{this.showMsg21=true;},500);
    setTimeout(()=>{this.showMsg22=true;},1300);
    setTimeout(()=>{this.showMsg23=true;},2100);
    setTimeout(()=>{this.showMsg24=true;},2900);
    setTimeout(()=>{this.showMsg25=true;},3700);
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
    setTimeout(()=>{this.showMsg33=true;},500);
    setTimeout(()=>{this.showMsg34=true;},1300);
    setTimeout(()=>{this.showMsg35=true;},2100);
  }
  isSalaried(){
    this.afterIsSalariedSelected = true;
    setTimeout(()=>{this.showMsg25=true;},500);
    setTimeout(()=>{this.showMsg26=true;},1300);
    setTimeout(()=>{this.showMsg27=true;},2100);
    setTimeout(()=>{this.showMsg28=true;},2900);
    setTimeout(()=>{this.showMsg29=true;},3700);
  }
  onFillComAddressInfo(){
    this.comAddressInitialForm = true;
    this.comAddressInitialInfo = false;
  }
  onSubmitComAddressInfo(){
    this.comAddressInitialForm = false;
    this.comAddressIntialStatus = true;
    this.afterFilledCommunicationInfo = true;
    setTimeout(()=>{this.showMsg36=true;},500);
    setTimeout(()=>{this.showMsg37=true;},1300);
    setTimeout(()=>{this.showMsg38=true;},2100);
    setTimeout(()=>{this.showMsg39=true;},2900);
  }
}
