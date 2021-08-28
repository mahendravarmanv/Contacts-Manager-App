import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material.module';
import { AboutPageComponent } from '../about-page/about-page.component';



@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class AboutModule { }
