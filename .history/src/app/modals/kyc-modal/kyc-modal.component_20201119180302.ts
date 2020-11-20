import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kyc-modal',
  templateUrl: './kyc-modal.component.html',
  styleUrls: ['./kyc-modal.component.scss']
})
export class KycModalComponent implements OnInit {

  @Input() kycData:any='';

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  get currentModal(){
    return this.activeModal;
  }

  showStatus(){
    this.currentModal.dismiss();
  }

}
