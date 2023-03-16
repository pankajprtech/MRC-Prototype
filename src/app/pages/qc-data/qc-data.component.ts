import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qc-data',
  templateUrl: './qc-data.component.html',
  styleUrls: ['./qc-data.component.scss']
})
export class QcDataComponent implements OnInit {

  constructor() { }
  pdfViewerStatus:boolean = false;
  showPdfStatus:boolean = false;
  snippetViewerStatus:boolean = false;
  sidemenuStatus:boolean = true;
  sidebarFixedStatus:boolean = false;
  ngOnInit(): void {
  }


  //Open Pdf Viewer
  pdfViewer(){
    this.pdfViewerStatus = true;
    this.showPdfStatus = true;
    this.sidemenuStatus = false;
    this.snippetViewerStatus = false;
  }
  pdfViewerHide(){
    this.pdfViewerStatus = false;
    this.showPdfStatus = false;
    this.sidemenuStatus = true;
  }
  snippetViewer(){
    this.pdfViewerStatus = true;
    this.snippetViewerStatus = true;
    this.sidemenuStatus = false;
    this.showPdfStatus = false
  }
  sidebarMenu(){
    if(this.pdfViewerStatus == true){
      this.sidebarFixedStatus = !this.sidebarFixedStatus;
      this.sidemenuStatus = !this.sidemenuStatus;
    }
    else{
      this.sidemenuStatus = !this.sidemenuStatus;
    }
  }
}
