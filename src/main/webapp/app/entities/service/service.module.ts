import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServiceNearbySharedModule } from 'app/shared';
import { ServiceNearbyAdminModule } from 'app/admin/admin.module';
import {
    ServiceComponent,
    ServiceDetailComponent,
    ServiceUpdateComponent,
    ServiceDeletePopupComponent,
    ServiceDeleteDialogComponent,
    serviceRoute,
    servicePopupRoute
} from './';

const ENTITY_STATES = [...serviceRoute, ...servicePopupRoute];

@NgModule({
    imports: [ServiceNearbySharedModule, ServiceNearbyAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ServiceComponent,
        ServiceDetailComponent,
        ServiceUpdateComponent,
        ServiceDeleteDialogComponent,
        ServiceDeletePopupComponent
    ],
    entryComponents: [ServiceComponent, ServiceUpdateComponent, ServiceDeleteDialogComponent, ServiceDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceNearbyServiceModule {}
