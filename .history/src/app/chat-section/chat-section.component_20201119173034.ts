import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpRequestService } from '../http-request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { KycModalComponent } from '../modals/kyc-modal/kyc-modal.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

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
  isSelectLoanAmt:boolean;
  isSelectIncomeAmt:boolean;
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
  addressType = [
    {value:'Communication Address', viewValue:'Communication Address'},
    {value:'Residential Address', viewValue:'Residential Address'},
    {value:'Office Address', viewValue:'Office Address'}
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

  kycURL:any='';

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
    private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute,
    private sanitizer: DomSanitizer,private modal:NgbModal){}
  
  ngOnInit(){
    this.kycURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://dmikyc-uat.dmifinance.in/?key=5fb4e19340782');
    setTimeout(()=>{this.showMsg1=true;},1000);
    setTimeout(()=>{this.showMsg2=true;},1800);
    setTimeout(()=>{this.showMsg3=true;},2600);
    
    this.getQueryParam();
    this.userDetailForm = this.formBuilder.group({
      dob : ['',Validators.required], 
      panCard : ['',Validators.required], 
      gender : ['',Validators.required], 
      emailAddress : ['' , [Validators.required,Validators.email]]
    });
    this.professionForm = this.formBuilder.group({
      emp_Type : [''], work_exp : [''], income_type : [''], address_type: [''], company_name: [''] , ownership_type:[''], flat_details : [''], 
      area_details : [''], landmark : [''], postal_code : [''], city : [''], state : [''], country : [''], company_time: ['']
    });
    this.residenceForm = this.formBuilder.group({
      address_type : [''], ownership_type: [''], flat_details: [''], area_details: [''], landmark: [''], postal_code: [''],
      city: [''], state: [''], country: [''],residence_time: [''], communi_address_type: [''] , communi_ownership_type: [''], 
      communi_flat_details: [''],
      communi_area: [''], communi_landmark: [''], communi_postal: [''], communi_city: [''], communi_state: [''],
      communi_country: [''], communi_time: ['']
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
        setTimeout(()=>{this.showMsg17=true;},500);
        setTimeout(()=>{this.showMsg18=true;},1300);
        setTimeout(()=>{this.showMsg19=true;},2100);
        setTimeout(()=>{this.showMsg20=true;},2900);
      });
    }
  }

  resendOTP(){
    this.ngOtpInput.setValue();
    this.service.getResendOTP(this.routerKey,this.mobileNumber).subscribe(res=>{});
  }

  onYes(){
    this.isYes = true;
    setTimeout(()=>{this.showMsg4=true;},500);
    setTimeout(()=>{this.showMsg5=true;},1300);
    setTimeout(()=>{this.showMsg6=true;},2100);
    setTimeout(()=>{this.showMsg7=true;},2900);
  }

  onContinue(event){
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
      if(event == 2){this.service.getStep1Info(this.mobileNumber,this.userName).subscribe(res=>{
        this.routerKey = res;
        this.otpOption = true;
      });}
    }
  }

  onSelectLoanAmount(){
    this.service.getStep2Info(this.routerKey,this.value1,this.userDetails.UserInfo[0].Loan_Details).subscribe(res=>{
      this.isSelectLoanAmt = true;
      setTimeout(()=>{this.showMsg13=true;},500);
      setTimeout(()=>{this.showMsg14=true;},1300);
      setTimeout(()=>{this.showMsg15=true;},2100);
      setTimeout(()=>{this.showMsg16=true;},2900);
    });
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
    if (this.userDetailForm.invalid) {
      alert('All fields are mandatory.');
      this.initialPersonalInfo = true;
      return;
    }
    this.service.getStep3Info(this.routerKey,this.userDetailForm.value.emailAddress,this.userDetailForm.value.gender,
      this.userDetailForm.value.panCard,this.userDetailForm.value.dob).subscribe(res=>{
        this.isFiledPersonalFormStatus = true;
        this.afterFilledPersonalInfo = true;
        setTimeout(()=>{this.showMsg21=true;},500);
        setTimeout(()=>{this.showMsg22=true;},1300);
        setTimeout(()=>{this.showMsg23=true;},2100);
        setTimeout(()=>{this.showMsg24=true;},2900);
        setTimeout(()=>{this.showMsg25=true;},3700);
    });
  }

  onFillEmpInfo(){
    this.empInitialForm = true;
    this.empInitialInfo = false;
  }

  onSubmitEmpInfo(){
    this.empInitialForm = false;
    this.empInitialInfo = false;
    if (this.professionForm.invalid) {
      alert('All fields are mandatory.')
      this.empInitialInfo = true;
      return;
    }
    this.service.getStep4Info(this.routerKey,this.value2,'Monthly',this.professionForm.value.work_exp,
      this.professionForm.value.company_name,this.professionForm.value.emp_Type).subscribe(res=>{

        this.service.getStep5Info(this.routerKey,this.professionForm.value.address_type,'-',
          this.professionForm.value.flat_details,
          this.professionForm.value.area_details,this.professionForm.value.landmark,this.professionForm.value.postal_code,
          this.professionForm.value.state,this.professionForm.value.country,this.professionForm.value.city,
          this.professionForm.value.company_time).subscribe(res=>{

            this.empInfoStatus = true;
            this.afterFilledEmpInfo = true;
            this.comAddressInitialInfo = true;
            setTimeout(()=>{this.showMsg33=true;},500);
            setTimeout(()=>{this.showMsg34=true;},1300);
            setTimeout(()=>{this.showMsg35=true;},2100);
        });
    });
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
    if (this.residenceForm.invalid) {
      alert('All fields are mandatory.');
      this.comAddressInitialInfo = true;
      return;
    }
    this.service.getStep5Info(this.routerKey,this.residenceForm.value.address_type,this.residenceForm.value.ownership_type,
      this.residenceForm.value.flat_details,this.residenceForm.value.area_details,this.residenceForm.value.landmark,
      this.residenceForm.value.postal_code,
      this.residenceForm.value.state,this.residenceForm.value.country,this.residenceForm.value.city,
      this.residenceForm.value.residence_time).subscribe(res=>{
        if(!this.isNotSameAddress){
          this.service.getStep5Info(this.routerKey,this.residenceForm.value.communi_address_type,this.residenceForm.value.communi_ownership_type,
            this.residenceForm.value.communi_flat_details,this.residenceForm.value.communi_area,this.residenceForm.value.communi_landmark,
            this.residenceForm.value.communi_postal,
            this.residenceForm.value.communi_state,this.residenceForm.value.communi_country,
            this.residenceForm.value.communi_city,this.residenceForm.value.communi_time).subscribe(res=>{
              this.finalForm();
          });
        }
        else{
          this.service.getStep5Info(this.routerKey,'Communication Address',this.residenceForm.value.ownership_type,
            this.residenceForm.value.flat_details,this.residenceForm.value.area_details,this.residenceForm.value.landmark,
            this.residenceForm.value.postal_code,
            this.residenceForm.value.state,this.residenceForm.value.country,this.residenceForm.value.city,
            this.residenceForm.value.residence_time).subscribe(res=>{
              this.finalForm();
          });
        }
    });
  }

  finalForm(){
    this.comAddressIntialStatus = true;
    this.afterFilledCommunicationInfo = true;
    setTimeout(()=>{this.showMsg36=true;},500);
    setTimeout(()=>{this.showMsg37=true;},1300);
    setTimeout(()=>{this.showMsg38=true;},2100);
    setTimeout(()=>{this.showMsg39=true;},2900);
  }

  deviceTrack(){
    this.deviceInfo = this.device.getDeviceInfo();
    if(this.device.isMobile()==true){this.deviceType='Mobile'}
    else if(this.device.isTablet()==true){this.deviceType='Tablet'}
    else if(this.device.isDesktop()==true){this.deviceType='Desktop'};

    this.service.getDeviceTrack(this.routerKey,this.userDetails.UserInfo[0].Mobile,this.deviceType,
      this.deviceInfo.browser + ': Version - ' + this.deviceInfo.browser_version,
      'null',this.deviceInfo.os + ': Version - ' + this.deviceInfo.os_version,'null').subscribe();
    this.comAddressIntialStatus = true;
    this.afterFilledCommunicationInfo = true;
  }

  kycModal(){
    const modalref = this.modal.open(KycModalComponent,{
      backdrop: 'static',
      centered: true,
      size: 'md',
      windowClass: 'termsModal',
      keyboard: false
    });
    let details = {data:this.kycURL,key:this.routerKey};
    modalref.componentInstance.data = details;
  }
}
