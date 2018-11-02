import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule]
})
export class AppMaterialModule {}
