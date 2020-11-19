import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpRequestService } from '../http-request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
})
export class ChatSectionComponent implements OnInit {

  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  userDetailForm: FormGroup;
  professionForm: FormGroup;
  residenceForm: FormGroup;

  routerKey:any='';
  isYes:boolean;
  deviceInfo:any='';
  deviceType:any='';
  otpOption:boolean=false;
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
  userDetails:any=[];
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
    length: 5,
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
    private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute){}
  
  ngOnInit(){
    this.getQueryParam();
    this.userDetailForm = this.formBuilder.group({
      dob : ['',Validators.required], 
      panCard : ['',Validators.required], 
      gender : ['',Validators.required], 
      emailAddress : ['' , [Validators.required,Validators.email]]
    });
    this.professionForm = this.formBuilder.group({
      emp_Type : [''], work_exp : [''], income_type : [''], amount : [''], flat_details : [''], 
      area_details : [''], landmark : [''], postal_code : [''], city : [''], state : [''], country : ['']
    });
    this.residenceForm = this.formBuilder.group({
      residence_type : [''], flat_details: [''], area_details: [''], landmark: [''], postal_code: [''],
      city: [''], state: [''], country: [''], communi_resi_type: [''], communi_flat_details: [''],
      communi_area: [''], communi_landmark: [''], communi_postal: [''], communi_city: [''], communi_state: [''],
      communi_country: ['']
    });
  }

  getQueryParam(){
    this.activatedRoute.queryParams.subscribe(param=> {
      this.routerKey = param['key'];
      this.service.getDetails(this.routerKey).subscribe(res=>{
        this.userDetails = res[0];
        this.deviceTrack();
      });
    });
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
    if(otp.length == 5){
      this.service.getverifyOTP(this.routerKey,this.mobileNumber,otp).subscribe(res=>{
        this.afterVerifedOTP = true;
      });
    }
  }

  resendOTP(){
    this.ngOtpInput.setValue();
    this.service.getResendOTP(this.routerKey,this.mobileNumber).subscribe(res=>{});
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
      if(event == 2){this.service.getStep1Info(this.mobileNumber,this.userName).subscribe(res=>{
        this.otpOption = true;
      });}
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
    if (this.userDetailForm.invalid) {return;}
    this.service.getStep3Info(this.routerKey,this.userDetailForm.value.emailAddress,this.userDetailForm.value.gender,
      this.userDetailForm.value.panCard,this.userDetailForm.value.dob).subscribe(res=>{
        this.isFiledPersonalFormStatus = true;
        this.afterFilledPersonalInfo = true;
    });
  }

  onFillEmpInfo(){
    this.empInitialForm = true;
    this.empInitialInfo = false;
  }

  onSubmitEmpInfo(){
    this.empInitialForm = false;
    this.empInitialInfo = false;
    let officeDetails = {
      'flat/building-details' : this.professionForm.value.flat_details,
      'area/street' : this.professionForm.value.area_details,
      'landmark' : this.professionForm.value.landmark,
      'postalcode' : this.professionForm.value.postal_code,
      'city' : this.professionForm.value.city,
      'state' : this.professionForm.value.state,
      'country' : this.professionForm.value.country
    };
    if (this.professionForm.invalid) {return;}
    this.service.getStep4Info(this.routerKey,this.professionForm.value.amount,this.professionForm.value.income_type,
      this.professionForm.value.work_exp,officeDetails,this.professionForm.value.emp_Type).subscribe(res=>{
        this.empInfoStatus = true;
        this.afterFilledEmpInfo = true;
        this.comAddressInitialInfo = true;
    });
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
    if (this.residenceForm.invalid) {return;}
    this.service.getStep5Info(this.routerKey,this.residenceForm.value.residence_type,'',this.residenceForm.value.flat_details,
      this.residenceForm.value.area_details,this.residenceForm.value.landmark,this.residenceForm.value.postal_code,
      this.residenceForm.value.state,this.residenceForm.value.country,this.residenceForm.value.city).subscribe(res=>{
        this.comAddressIntialStatus = true;
        this.afterFilledCommunicationInfo = true;
    });
  }

  deviceTrack(){
    this.deviceInfo = this.device.getDeviceInfo();
    if(this.device.isMobile()==true){this.deviceType='Mobile'}
    else if(this.device.isTablet()==true){this.deviceType='Tablet'}
    else if(this.device.isDesktop()==true){this.deviceType='Desktop'};

    this.service.getDeviceTrack(this.routerKey,this.userDetails.UserInfo[0].Mobile,this.deviceType,
      this.deviceInfo.browser + ': Version - ' + this.deviceInfo.browser_version,
      'null',this.deviceInfo.os + ': Version - ' + this.deviceInfo.os_version,'null').subscribe();
  }
}
