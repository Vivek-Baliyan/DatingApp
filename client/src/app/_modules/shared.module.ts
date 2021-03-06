import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    TabsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgxGalleryModule,
    FileUploadModule,
  ],
  exports: [NgbModule, TabsModule, ToastrModule, NgxGalleryModule, FileUploadModule],
})
export class SharedModule {}
