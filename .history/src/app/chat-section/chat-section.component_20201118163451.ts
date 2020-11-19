import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpRequestService } from '../http-request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
})
export class ChatSectionComponent implements OnInit {

  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  userDetailForm: FormGroup;
  professionForm: FormGroup;

  isYes:boolean;
  deviceInfo:any='';
  deviceType:any='';
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
  requiredMsg:string;
  value1 = 50000;value2 = 60000;
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
  options1: Options = {
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
      { value: 300000, legend: "" },
      { value: 500000, legend: "3 Lakh" }
    ]
  };
  options2: Options = {
    showTicks: true,
    stepsArray: [
      { value: 20000, legend: "20k" },
      { value: 30000, legend: "" },
      { value: 40000, legend: "" },
      { value: 50000, legend: "" },
      { value: 60000, legend: "" },
      { value: 70000, legend: "" },
      { value: 80000, legend: "" },
      { value: 90000, legend: "" },
      { value: 100000, legend: "100k" }
    ]
  };

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

  constructor(private device: DeviceDetectorService,
    private service: HttpRequestService,
    private formBuilder: FormBuilder){}
  
  ngOnInit(){
    this.userDetailForm = this.formBuilder.group({
      dob : [''],
      panCard : [''],
      gender : [''],
      emailAddress : ['' , [Validators.email]]
    });
    this.professionForm = this.formBuilder.group({
      emp_Type : [''],
      work_exp : [''],
      income_type : [''],
      amount : [''],
      flat_details : [''],
      area_details : [''],
      landmark : [''],
      postal_code : [''],
      city : [''],
      state : [''],
      country : ['']
    });
    this.deviceTrack();
  }

  get userFormControl() { return this.userDetailForm.controls; }

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
      // this.service.getverifyOTP(123,this.mobileNumber,otp).subscribe(res=>{
      //   this.afterVerifedOTP = true;
      // });
    }
  }

  resendOTP(){
    this.ngOtpInput.setValue();
    this.service.getResendOTP(123,this.mobileNumber).subscribe(res=>{});
  }

  onYes(){
    this.isYes = true;
  }

  onContinue(event){
    if(this.userName == '' || this.userName == undefined){
      this.requiredMsg = 'This is required.';
    }else{
      this.isContinueWithUserName = true;
      this.requiredMsg = '';
      if(event == 2){this.service.getStep1Info(this.mobileNumber,this.userName).subscribe(res=>{});}
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
    this.service.getStep3Info(123,this.userDetailForm.value.emailAddress,this.userDetailForm.value.gender,
      this.userDetailForm.value.panCard,this.userDetailForm.value.dob).subscribe(res=>{});
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
    let officeDetails = {
      'flat/building-details' : this.professionForm.value.flat_details,
      'area/street' : this.professionForm.value.area_details,
      'landmark' : this.professionForm.value.landmark,
      'postalcode' : this.professionForm.value.postal_code,
      'city' : this.professionForm.value.city,
      'state' : this.professionForm.value.state,
      'country' : this.professionForm.value.country
    };
    this.service.getStep4Info(123,this.professionForm.value.amount,this.professionForm.value.income_type,
      this.professionForm.value.work_exp,officeDetails,this.professionForm.value.emp_Type)
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

  deviceTrack(){
    this.deviceInfo = this.device.getDeviceInfo();
    if(this.device.isMobile()==true){this.deviceType='Mobile'}
    else if(this.device.isTablet()==true){this.deviceType='Tablet'}
    else if(this.device.isDesktop()==true){this.deviceType='Desktop'};

    this.service.getDeviceTrack(123,123,this.deviceType,
      this.deviceInfo.browser + ': Version - ' + this.deviceInfo.browser_version,
      'null',this.deviceInfo.os + ': Version - ' + this.deviceInfo.os_version,'null').subscribe();
  }
}
