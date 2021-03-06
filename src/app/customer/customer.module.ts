import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CusRoutingModule } from './cus-routing.module';
import { DropdownModule} from 'primeng/dropdown';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule} from '@angular/common/http';
import { CalendarModule} from 'primeng/calendar';
import { ButtonModule} from 'primeng/button';
import { NaptienComponent } from './naptien/naptien.component';
import { ListPostComponent } from './list-post/list-post.component';
import {EditorModule} from 'primeng/editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AddNewComponent } from './add-new/add-new.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    CustomerComponent,
    AddPostComponent,
    LoginComponent,
    NaptienComponent,
    ListPostComponent,
    TransactionHistoryComponent,
    AddNewComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CusRoutingModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    HttpClientModule,
    EditorModule,
    CalendarModule,
    ButtonModule,
    NgbModule
  ]
})
export class CustomerModule { }
