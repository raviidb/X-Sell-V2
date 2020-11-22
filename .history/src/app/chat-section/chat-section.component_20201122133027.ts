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
  bankingDetailForm:FormGroup;

  routerKey:any='';
  isYes:boolean;
  deviceInfo:any='';
  deviceType:any='';
  showLoader:boolean=false;
  isKYCSuccess:boolean=false;
  isSubmittedComm:boolean=false;
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
  showBankingForm:boolean=false;
  isSelectLoanAmt:boolean;
  isSelectIncomeAmt:boolean;
  isKYCprocees:boolean;
  afterSlectededOffer:boolean;
  isPANsubmit:boolean;
  isEmailVerified:boolean;
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
  genderTypes = [
    {value:'M', viewValue:'Male'},
    {value:'F',viewValue:'Female'},
    {value:'O',viewValue:'Others'}
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
  options3: Options = {
    showTicks: true,
    stepsArray: []
  };

  dynamicURL:any='';
  emp_Type:any=this.empType[0].value;

  // Showing message property
  showMsg1: boolean; showMsg2: boolean; showMsg3: boolean; showMsg4: boolean; showMsg5: boolean; showMsg6: boolean; showMsg7: boolean;
  showMsg8: boolean; showMsg9: boolean; showMsg10: boolean; showMsg11: boolean; showMsg12: boolean; showMsg13: boolean; showMsg14: boolean;
  showMsg15: boolean; showMsg16: boolean; showMsg17: boolean; showMsg18: boolean; showMsg19: boolean; showMsg20: boolean; showMsg21: boolean;
  showMsg22: boolean; showMsg23: boolean; showMsg24: boolean; showMsg25: boolean; showMsg26: boolean; showMsg27: boolean; showMsg28: boolean;
  showMsg29: boolean; showMsg30: boolean; showMsg31: boolean; showMsg32: boolean; showMsg33: boolean; showMsg34: boolean; showMsg35: boolean;
  showMsg36: boolean; showMsg37: boolean; showMsg38: boolean; showMsg39: boolean; showMsg40: boolean; showMsg41: boolean; showMsg42: boolean;
  showMsg43: boolean; showMsg44: boolean; showMsg45: boolean; showMsg46: boolean; showMsg47: boolean; showMsg48: boolean; showMsg49: boolean;

  // Form Field Value
  userName:any;
  mobileNumber:any;
  userPan:any='';
  userEmail:any='';

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
    localStorage.clear();
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
    this.bankingDetailForm = this.formBuilder.group({
      Bank_Name : ['',Validators.required], 
      Account_Holder_Name : ['',Validators.required], 
      Account_Number : ['',Validators.required], 
      IFSC_Code : ['' , [Validators.required,Validators.email]]
    });
    this.professionForm = this.formBuilder.group({
      emp_Type : [''], work_exp : [''], income_type : [''], address_type: [''], company_name: [''] , ownership_type:[''], flat_details : [''], 
      area_details : [''], landmark : [''], postal_code : [''], city : [''], state : [''], country : [''], company_time: ['']
    });
    this.residenceForm = this.formBuilder.group({
      fatherSpouseName:[''],gender:[''],dob:[''],
      address_type : [''], ownership_type: [''], flat_details: [''], area_details: [''], landmark: [''], postal_code: [''],
      city: [''], state: [''], country: [''],residence_time: [''], communi_address_type: [''] , communi_ownership_type: [''], 
      communi_flat_details: [''],
      communi_area: [''], communi_landmark: [''], communi_postal: [''], communi_city: [''], communi_state: [''],
      communi_country: [''], communi_time: ['']
    });
    this.residenceForm.controls['address_type'].setValue('Residential Address');
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
        setTimeout(()=>{this.showMsg12=true;},500);
        setTimeout(()=>{this.showMsg13=true;},1300);
        setTimeout(()=>{this.showMsg14=true;},2100);
        setTimeout(()=>{this.showMsg15=true;},2900);
        setTimeout(()=>{this.showMsg16=true;},3700);
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
      this.requiredMsg = '';
      if(event == 2){this.service.getStep1Info(this.mobileNumber,this.userName).subscribe(res=>{
        this.routerKey = res;
        this.otpOption = true;
      });
    }
    }
  }

  onSelectLoanAmount(){
    this.service.getStep2Info(this.routerKey,this.value1,this.userDetails.UserInfo[0].Loan_Details).subscribe(res=>{
      this.isSelectLoanAmt = true;
      setTimeout(()=>{this.showMsg17=true;},500);
      setTimeout(()=>{this.showMsg18=true;},1300);
      setTimeout(()=>{this.showMsg19=true;},2100);
      setTimeout(()=>{this.showMsg20=true;},2900);
    });
  }

  onEmpTypeSubmit(){
    this.afterVerifedOTP = true;
    setTimeout(()=>{this.showMsg21=true;},500);
    setTimeout(()=>{this.showMsg22=true;},1300);
    setTimeout(()=>{this.showMsg23=true;},2100);
    setTimeout(()=>{this.showMsg24=true;},2900);
    setTimeout(()=>{this.showMsg25=true;},3700);
  }

  onSelectIncomeAmount(){
    this.isSelectIncomeAmt = true;
    setTimeout(()=>{this.showMsg26=true;},500);
    setTimeout(()=>{this.showMsg27=true;},1300);
    setTimeout(()=>{this.showMsg28=true;},2100);
    setTimeout(()=>{this.showMsg29=true;},2900);
  }
  onPanSubmit(){
    this.isPANsubmit = true;
    setTimeout(()=>{this.showMsg30=true;},500);
    setTimeout(()=>{this.showMsg31=true;},1300);
    setTimeout(()=>{this.showMsg32=true;},2100);
    setTimeout(()=>{this.showMsg33=true;},2900);
    setTimeout(()=>{this.showMsg34=true;},3700);
  }

  onSubmitEmail(){
    this.service.getStep7Info(this.routerKey,this.emp_Type,this.value2,this.userPan,this.userEmail).subscribe(res=>{
      this.isEmailVerified = true;
      setTimeout(()=>{this.showMsg35=true;},500);
      setTimeout(()=>{this.showMsg36=true;},1300);
      setTimeout(()=>{this.showMsg37=true;},2100);
      setTimeout(()=>{this.showMsg38=true;},2900);
      setTimeout(()=>{this.showMsg39=true;},3700);
    });
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
        // setTimeout(()=>{this.showMsg21=true;},500);
        // setTimeout(()=>{this.showMsg22=true;},1300);
        // setTimeout(()=>{this.showMsg23=true;},2100);
        // setTimeout(()=>{this.showMsg24=true;},2900);
        // setTimeout(()=>{this.showMsg25=true;},3700);
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
            // setTimeout(()=>{this.showMsg33=true;},500);
            // setTimeout(()=>{this.showMsg34=true;},1300);
            // setTimeout(()=>{this.showMsg35=true;},2100);
        });
    });
  }

  isSalaried(){
    this.afterIsSalariedSelected = true;
    // setTimeout(()=>{this.showMsg25=true;},500);
    // setTimeout(()=>{this.showMsg26=true;},1300);
    // setTimeout(()=>{this.showMsg27=true;},2100);
    // setTimeout(()=>{this.showMsg28=true;},2900);
    // setTimeout(()=>{this.showMsg29=true;},3700);
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

  onSubmitBankingDetails(){
    this.service.sendBankingInfo(this.routerKey,this.bankingDetailForm.value.Bank_Name,this.bankingDetailForm.value.Account_Holder_Name,
      this.bankingDetailForm.value.Account_Number,this.bankingDetailForm.value.IFSC_Code).subscribe(res=>{
        this.service.getDetails(this.routerKey).subscribe(res=>{
          this.bankingDetailForm.controls['Bank_Name'].setValue(res.response[0].UserInfo[0].Bank_Name);
          this.bankingDetailForm.controls['Account_Holder_Name'].setValue(res.response[0].UserInfo[0].Account_Holder_Name);
          this.bankingDetailForm.controls['Account_Number'].setValue(res.response[0].UserInfo[0].Account_Number);
          this.bankingDetailForm.controls['IFSC_Code'].setValue(res.response[0].UserInfo[0].IFSC_Code);
          this.service.sfdcStep2(this.routerKey,res.response[0].UserInfo[0].Google_Application_Id).subscribe();
        });
    });
  }

  finalForm(){
    this.comAddressIntialStatus = true;
    this.afterFilledCommunicationInfo = true;
    this.isSubmittedComm = true;
    setTimeout(()=>{this.showMsg43=true;},500);
    setTimeout(()=>{this.showMsg44=true;},1300);
    setTimeout(()=>{this.showMsg45=true;},2100);
  }

  onKYCproceed() {
    this.isKYCprocees = true;
    // setTimeout(() => { this.showMsg40 = true; }, 500);
    // setTimeout(() => { this.showMsg41 = true; }, 1300);
    // setTimeout(() => { this.showMsg42 = true; }, 2100);
    // setTimeout(() => { this.showMsg43 = true; }, 2900);
    this.options3.stepsArray = [
      { value: 10000, legend: "10,000" },
      { value: 15000, legend: "" },
      { value: 20000, legend: "" },
      { value: 25000, legend: "" },
      { value: 30000, legend: "30,000" }
    ];
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

  kycModal(event){
    const modalref = this.modal.open(KycModalComponent,{
      backdrop: 'static',
      centered: true,
      size: 'md',
      windowClass: 'termsModal',
      keyboard: false
    });
    if(event == 1){
      let kycDetails = {
        "Request_ID": "7146D00K293DB10",
        "Request_Type": "DMI-eKYC",
        "Time_Out": "600",
        "Borrower_Name": "nagar",
        "Borrower_Gender": "M",
        "Borrower_DOB": "22-08-1996",
        "Mobile_Number": "8802498600",
        "Borrower_Email": "nagar@dd",
        "Loan_Number": "NULL",
        "Contact_ID": "NULL",
        "Callback_URL": "https://dmifinance.in/",
        "Face_Auth": "1",
        "Borrower_Image_URL":"",
        "OTP_Auth": "0",
        "Partner_Logo":"",
        "Aadhar_QR_Data":"",
        "Borrower_PAN_Name":"",
        "Borrower_PAN":"",
        "Borrower_DL_DOB":"",
        "Borrower_DL_No":"",
        "Borrower_DL_State":"",
        "Partner_Name": "DMI-LOS",
        "Send_Link":"2",
        "Style": "",
        "Style_Parameters": "",
        "udf1":"",
        "udf2":"",
        "udf3":"",
        "udf4":"",
        "udf5":"",
        "udf6":"",
        "udf7":"",
        "udf8":"",
        "udf9":"",
        "udf10":"",
        "Consent_Message": "I have read and agreed to the Terms of Use and hereby allow DMI Finance partners to receive my KYC information.",
        "Consent_Message_Partner": "I hereby confirm that I am voluntarily providing my information including Aadhaar information for evaluating my eligibility to get loan and complete Know-Your-Customer(KYC) process. If opted by me, I understand that Aadhar informationis collected directly by DMI Finance. By checking this box, I provide permission for DMI to: (1) collect, store and use certain information and documentation of mine, including Aadhaar-related information, for the purposes related to grant of such loan including for conducting offline Aadhaar-based verification in order to complete its Know-Your-Customer (KYC) process for the application related to such loan facility (Loan Application); and (2) share such information and any related results of such KYC processes with any of our affiliates and service providers who may be engaged by DMI for the purpose of assisting in the KYC process for the limited purpose of processing the Loan Application."
      }
      this.service.getKYCurl(kycDetails).subscribe(res=>{
        this.dynamicURL = '';
        this.dynamicURL = this.sanitizer.bypassSecurityTrustResourceUrl(res);
        let details = {data:this.dynamicURL,key:this.routerKey,id:event};
        modalref.componentInstance.kycData = details;
        modalref.componentInstance.sendStatus.subscribe(res=>{
          if(res.status == 'Success'){
            this.isKYCSuccess = true;
            setTimeout(()=>{this.showMsg40=true;},500);
            setTimeout(()=>{this.showMsg41=true;},1300);
            setTimeout(()=>{this.showMsg42=true;},2100);
            this.residenceForm.controls['fatherSpouseName'].setValue(res.response[0].UserInfo[0].Father_Name);
            this.residenceForm.controls['gender'].setValue(res.response[0].UserInfo[0].Gender);
            this.residenceForm.controls['dob'].setValue(res.response[0].UserInfo[0].DOB);
            for(let i=0; i<res.response[0].Address.length;i++){
              if(res.response[0].Address[i].Address_Type == 'Residential Address'){
                this.residenceForm.controls['residence_time'].setValue(res.response[0].Address[i].TimeAtCurrentResidence);
                this.residenceForm.controls['ownership_type'].setValue(res.response[0].Address[i].Ownership_Type);
                this.residenceForm.controls['flat_details'].setValue(res.response[0].Address[i].Flat_OR_Building_Details);
                this.residenceForm.controls['area_details'].setValue(res.response[0].Address[i].Area_OR_Street);
                this.residenceForm.controls['landmark'].setValue(res.response[0].Address[i].Landmark);
                this.residenceForm.controls['postal_code'].setValue(res.response[0].Address[i].Postal_Code);
                this.residenceForm.controls['city'].setValue(res.response[0].Address[i].City);
                this.residenceForm.controls['state'].setValue(res.response[0].Address[i].State);
                this.residenceForm.controls['country'].setValue(res.response[0].Address[i].County);
              }
            }
          }
        });
        var key = res.replace('https://dmikyc-uat.dmifinance.in/?key=','');
        this.service.getStep8Info(this.routerKey,key).subscribe();
      });
    }
    else if(event == 2){
      localStorage.removeItem('FI_Details');
      let accountDetails = {
        "mobilenumber": this.userDetails.UserInfo[0].Mobile,
        "accountid": this.userDetails.UserInfo[0].Account_Number,
        "bankaccountnumber": this.userDetails.UserInfo[0].Account_Number,
        "bankifsc" : this.userDetails.UserInfo[0].IFSC_Code,
        "bankname" : this.userDetails.UserInfo[0].Bank_Name,
        "accountholdername" : this.userDetails.UserInfo[0].Account_Holder_Name,
        "oppname": 'null',
        "leadid":"null",
        "contactid": 'null',
        "AA_ID":"",
        "AA_Consent":"101",
        "description":"Wealth Management Service",
        "callbackurl":"https:\/\/dmi.vistaconnect.com",
        "partnername":"dmi",
        "logo":"logo.png",
        "borrowername": this.userDetails.UserInfo[0].Name,
        "borroweremail": this.userDetails.UserInfo[0].Email_Address
      }
      this.service.getAccountAggURL(accountDetails).subscribe(res=>{
        this.dynamicURL = '';
        this.dynamicURL = this.sanitizer.bypassSecurityTrustResourceUrl(res);
        var key = res.replace('https://dev.vistaconnect.com/AA-V12/?key=','');
        this.service.sendAAKey(key,this.routerKey).subscribe();
        let details = {data:this.dynamicURL,key:this.routerKey,id:event,aaKey:key};
        modalref.componentInstance.kycData = details;
        modalref.componentInstance.sendStatus.subscribe(res=>{
          if(res.status == 'Success'){
            this.showBankingForm = true;  
          }
        });
      });
    }
    else if(event == 3){
      this.dynamicURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://dev.vistaconnect.com/e-mandateV1.1/?key=5dea4c9b7c7b0');
      let details = {data:this.dynamicURL,key:this.routerKey,id:event};
      modalref.componentInstance.kycData = details;
    }
    else if(event == 4){
      let ldsDetails = {
        "Partner_Name":"Doc",
        "Request_Id":"22",
        "Callback_URL":"dmi.in",
        "Loan_Name":"DMI-123456",
        "Date":"2020-08-17",
        "First_Name":"Test",
        "Last_Name":"Test",
        "Father_Name":"Test",
        "PAN":"BAS87PKNJ8",
        "Mailing_Street":"Sector 12",
        "Mailing_City":"Noida",
        "Mailing_State":"UP",
        "Mailing_Postalcode":"201001",
        "Mailing_Country":"India",
        "Beneficiary_Name":"Test",
        "Bank_Account_Number":"87452132659887451",
        "IFSC_Code":"SBI0147",
        "Loan_Rate":"10",
        "Loan_Tenor_in_Month":"20",
        "Loan_Amount":"987987",
        "Loan_Disbursed":"977777",
        "Bank_Name":"SBI",
        "EMI":"878787",
        "EMI_Start_Date":"2020-08-10",
        "Login_Time_Stamp":"2020-01-10 10:20",
        "OTP_Verify":"Yes",
        "OTP_Request_Time_Stamp":"2020-08-10 10:52",
        "OTP_Verify_Time_Stamp":"2020-08-10 11:22",
        "OTP_Mobile":"8527419630",
        "Device_IP_Address":"12:12:12:1",
        "Device_Browser":"UC",
        "Device_Location":"Delhi",
        "Device_Type":"Mobile",
        "Pre_Emi": "",
        "Purpose_Loan": "",
        "Security": "None",
        "Payment_Cheques": "",
        "Mode_Loan_Repayment": "Existing NACH",
        "Processing_Fee": "2% + GST on loan amount",
        "Overdue_Intrest": "2%PM on overdue amount",
        "Repayment_Charge": "3% + GST on balance principal outstanding",
        "Bounce_Charge": "Rs. 450/- per dishonor",
        "Reason":"Loan document clickwrap sign by",
        "Remark":"Signed using OTP and Email",
        "PDF_Request":""
      }
      // this.service.getLDSUrl(ldsDetails).subscribe(res=>{
      //   this.dynamicURL = '';
      //   this.dynamicURL = this.sanitizer.bypassSecurityTrustResourceUrl('http://dev.vistaconnect.com/ldsService/?key=5f43a35b9b0b6');
      //   let details = {data:this.dynamicURL,key:this.routerKey,id:event};
      //   modalref.componentInstance.kycData = details;
      // })
      this.dynamicURL = this.sanitizer.bypassSecurityTrustResourceUrl('http://dev.vistaconnect.com/ldsService/?key=5f43a35b9b0b6');
    }
    
  }
}