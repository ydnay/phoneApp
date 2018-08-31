import { Routes } from '@angular/router';
import { EnterDetailsGuardService } from './phone-details/enter-details-guard.service';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';

export const routes: Routes = [
    { path: '', component: PhoneListComponent },
    { path: 'add', component: AddPhoneComponent },
    { path: 'phone/:id', component: PhoneDetailsComponent },
    // {
    //     path: 'phone/:id',
    //     component: PhoneDetailsComponent,
    //     canActivate: [ EnterDetailsGuardService ]    /* Add enter guard */
    // },
    { path: '**', redirectTo: '' }
];