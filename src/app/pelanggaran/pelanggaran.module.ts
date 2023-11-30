// src/app/pelanggaran/pelanggaran.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PelanggaranPageRoutingModule } from './pelanggaran-routing.module';
import { PelanggaranPage } from './pelanggaran.page';


import { HttpClientModule } from '@angular/common/http'; // Tambahkan baris ini

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelanggaranPageRoutingModule,
    HttpClientModule, // Tambahkan baris ini
  ],
  declarations: [PelanggaranPage]
})
export class PelanggaranPageModule { }
