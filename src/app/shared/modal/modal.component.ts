import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'] ,
  // providers:[ModalService]

})
export class ModalComponent {

  constructor(public modal : ModalService){
     
  }

}


