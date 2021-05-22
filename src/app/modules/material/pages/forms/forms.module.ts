import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [FormsComponent, TypographyComponent, ButtonsComponent, SpinnerComponent],
  imports: [CommonModule, SharedModule, FormsRoutingModule],
})
export class FormsModule {}
