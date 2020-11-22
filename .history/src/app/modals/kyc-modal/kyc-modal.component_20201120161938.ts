import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestService } from 'src/app/http-request.service';

@Component({
  selector: 'app-kyc-modal',
  templateUrl: './kyc-modal.component.html',
  styleUrls: ['./kyc-modal.component.scss']
})
export class KycModalComponent implements OnInit {

  @Input() kycData:any='';

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
        this.service.getDetails(this.kycData.key).subscribe(res=>{
          
        });
      }
    }
  }

}
