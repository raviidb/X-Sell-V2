import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-kyc-modal',
  templateUrl: './kyc-modal.component.html',
  styleUrls: ['./kyc-modal.component.scss']
})
export class KycModalComponent implements OnInit {

  @Input() kycData:any='';
  @Output() sendStatus:EventEmitter<any> = new EventEmitter();

  constructor(private activeModal: NgbActiveModal,
    private service: HttpRequestService) { }

  ngOnInit(): void {
  }

  get currentModal(){
    return this.activeModal;
  }

  showStatus(){
    this.currentModal.dismiss();
    if(this.kycData.id == 1){
      let checkKYC = localStorage.getItem('kycSuccess');
      if(checkKYC){
        this.service.getStep9Info(this.kycData.key,1).subscribe(res=>{
          this.service.getDetails(this.kycData.key).subscribe(res=>{
            console.log('KYC-Success');
            this.sendStatus.emit({status:'Success',value:1,response:res});
          });
        });
      }
    }
    else if(this.kycData.id == 2){
      let checkResponse = JSON.parse(localStorage.getItem('FI_Details'));
      if(checkResponse){
        if(checkResponse[0].type=='webpackOk'){
          localStorage.removeItem('FI_Details');
        }
        this.service.sendAAStatus(this.kycData.key,this.kycData.aaKey,1).subscribe(res=>{
          this.service.getDetails(this.kycData.key).subscribe(res=>{
            console.log('AA-Success')
          });
        });
      }
    }
    else if(this.kycData.id == 3){
      let eMandateStatus = localStorage.getItem('E-mandate-Status');
      if(eMandateStatus == 'fail'){console.log('E-Mandate Failed')}
      else if(eMandateStatus == 'success'){console.log('E-Mandate Success')}
    }
    else if(this.kycData.id == 4){
      let ldsStatus = localStorage.getItem('LDS-Status');
      if(ldsStatus == 'success'){console.log('LDS Success')}
      else(console.log('LDS Failed'))
    }
  }

}
