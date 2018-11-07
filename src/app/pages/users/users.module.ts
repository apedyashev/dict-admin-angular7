import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../material.module';
import { UsersComponent } from './users.component';
import { DetailsDrawerComponent } from './components/details-drawer/details-drawer.component';
import { SidebarDrawerComponent } from '../../components/sidebar-drawer/sidebar-drawer.component';

@NgModule({
  declarations: [UsersComponent, DetailsDrawerComponent, SidebarDrawerComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [UsersComponent]
})
export class UsersModule {}
