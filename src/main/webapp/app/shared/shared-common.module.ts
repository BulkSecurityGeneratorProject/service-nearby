import { NgModule } from '@angular/core';

import { ServiceNearbySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ServiceNearbySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ServiceNearbySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ServiceNearbySharedCommonModule {}
