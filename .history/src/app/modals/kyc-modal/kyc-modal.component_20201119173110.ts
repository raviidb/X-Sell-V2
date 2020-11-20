import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kyc-modal',
  templateUrl: './kyc-modal.component.html',
  styleUrls: ['./kyc-modal.component.scss']
})
export class KycModalComponent implements OnInit {

  @Input() kycData:any='';

  constructor() { }

  ngOnInit(): void {
  }

}
