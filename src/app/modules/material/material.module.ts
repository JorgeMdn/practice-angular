import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';

@NgModule({
  declarations: [MaterialComponent],
  imports: [CommonModule, MaterialRoutingModule, SharedModule],
})
export class MaterialModule {}
