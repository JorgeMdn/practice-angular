import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './modules/material/material.module';

const COMPONENTS = [NavComponent, SidebarComponent];

const PIPES = [];

const DIRECTIVES = [];

const SERVICES = [];

const MODULES = [MaterialModule];

@NgModule({
  declarations: [COMPONENTS, PIPES, DIRECTIVES],
  imports: [CommonModule, RouterModule, MODULES],
  exports: [MODULES, COMPONENTS, PIPES, DIRECTIVES],
  providers: [SERVICES, MODULES],
})
export class SharedModule {}
