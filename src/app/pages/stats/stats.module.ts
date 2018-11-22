import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsPageComponent } from './stats.component';
import { AppMaterialModule } from '../../material.module';
import { SignupsCardComponent } from './components/signups-card/signups-card.component';

@NgModule({
  declarations: [StatsPageComponent, SignupsCardComponent],
  imports: [CommonModule, AppMaterialModule]
})
export class StatsModule {}
