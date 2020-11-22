import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  baseurl = "https://dev.vistaconnect.com/dmi-clubbed-backend/api/";

  constructor(private http: HttpClient) { }

  getDetails(Request_Key):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_GetDataV2' , {Request_Key}).pipe(map(res=>res.data));
  }

  getEventTrack(Request_Key,Mobile,Event_Name,Event_Type,Origin,Partner_Name,Remark_1,Remark_2,Remark_3,Remark_4,Remark_5):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_Event_TrackingV2' , 
    {Request_Key,Mobile,Event_Name,Event_Type,Origin,Partner_Name,Remark_1,Remark_2,Remark_3,Remark_4,Remark_5})
  }

  getDeviceTrack(Request_Key,Mobile,Device_Info,Browser_Info,Location,Os_Type,Partner_Name):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_Device_TrackingV2' , {Request_Key,Mobile,Device_Info,Browser_Info,Location,Os_Type,Partner_Name})
  }

  getverifyOTP(Request_Key,Mobile,Otp):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_VerifyOtpV2' , {Request_Key,Mobile,Otp})
  }

  getResendOTP(Request_Key,Mobile):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_ResendOtpV2' , {Request_Key,Mobile})
  }

  getStep1Info(Mobile,Name):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_UserInfoV2Step1' , {Mobile,Name}).pipe(map(res=>res.data));
  }

  getStep2Info(Request_Key,Loan_Amount,Loan_Details):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_UserInfoV2Step2', {Request_Key,Loan_Amount,Loan_Details})
  }

  getStep3Info(Request_Key,Email_Address,Gender,PAN,DOB):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_UserInfoV2Step3', {Request_Key,Email_Address,Gender,PAN,DOB})
  }

  getStep4Info(Request_Key,Amount,Income_Type,Work_Experience,Company_Name,Employment_Type):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_UserInfoV2Step4', 
    {Request_Key,Amount,Income_Type,Work_Experience,Company_Name,Employment_Type})
  }

  getStep5Info(Request_Key,Address_Type,Ownership_Type,Flat_OR_Building_Details,Area_OR_Street,Landmark,Postal_Code,
    State,County,City,TimeAtCurrentResidence):Observable<any>{
    return this.http.post<any>(this.baseurl + 'XSell_UserInfoV2Step5' , 
    {Request_Key,Address_Type,Ownership_Type,Flat_OR_Building_Details,Area_OR_Street,Landmark,Postal_Code,State,County,City,TimeAtCurrentResidence})
  }

  getKYCurl(kycDetails):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Authentication': 'JELFJVNKVMETHOD2GKVAV7X2PO8ICA'});
    return this.http.post<any>('https://dmikyc-uat.dmifinance.in/los/api/Request-Key-V1.2' , kycDetails , {headers}).pipe(map(resp => resp.data.url));
  }

}
