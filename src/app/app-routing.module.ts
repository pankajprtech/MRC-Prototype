import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

// Coomon Component
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

import { QcDataComponent } from './pages/qc-data/qc-data.component';
import { ViewAllDocumentsComponent } from './pages/view-all-documents/view-all-documents.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'qc-data', component: QcDataComponent },
  { path: 'view-all-documents', component: ViewAllDocumentsComponent },
  { path: '**', component: QcDataComponent },
  { path: '', redirectTo: 'allInHome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgbTooltipModule,
    NgbPopoverModule,
    NgbToastModule,
    CommonModule],
  declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    QcDataComponent,
    LoginComponent,
    ViewAllDocumentsComponent,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
