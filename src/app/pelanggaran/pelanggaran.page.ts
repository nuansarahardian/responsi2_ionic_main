import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pelanggaran',
  templateUrl: './pelanggaran.page.html',
  styleUrls: ['./pelanggaran.page.scss'],
})
export class PelanggaranPage implements OnInit {
  pelanggaranList: any[] = [];
  newPelanggar: any = {
    id: null,
    nama_pelanggar: '',
    tanggal: '',
    jenis_pelanggaran: '',
    keterangan: '',
  };
  modalTambah = false;
  modalEdit = false;

  constructor(private _apiService: ApiService, private modal: ModalController) { }

  ngOnInit() {
    this.loadPelanggaran();
  }

  loadPelanggaran() {
    this._apiService.tampil('tampil.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.pelanggaranList = res;
      },
      error: (err: any) => {
        console.log('gagal load pelanggaran:', err);
      },
    });
  }

  resetForm() {
    this.newPelanggar = {
      id: null,
      nama_pelanggar: '',
      tanggal: '',
      jenis_pelanggaran: '',
      keterangan: '',
    };
  }

  cancel() {
    this.modal.dismiss();
    this.modalTambah = false;
    this.resetForm();
  }

  openModalTambah(isOpen: boolean) {
    this.modalTambah = isOpen;
    this.resetForm();
    this.modalTambah = true;
    this.modalEdit = false;
  }

  tambahPelanggaran() {
    console.log('Fungsi tambahPelanggaran dipanggil!');
    if (
      this.newPelanggar.nama_pelanggar !== '' &&
      this.newPelanggar.tanggal !== '' &&
      this.newPelanggar.jenis_pelanggaran !== '' &&
      this.newPelanggar.keterangan !== ''
    ) {
      this._apiService.tambah(this.newPelanggar, 'tambah.php').subscribe({
        next: (hasil: any) => {
          this.resetForm();
          console.log('berhasil tambah pelanggaran');
          this.loadPelanggaran();
          this.modalTambah = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.error('gagal tambah pelanggaran:', err);
        },
        complete: () => {
          console.log('tambahPelanggaran completed');
        },
      });
    } else {
      console.log('gagal tambah pelanggaran karena masih ada data yang kosong');
    }
  }

  hapusPelanggaran(id: any) {
    this._apiService.hapus(id, 'hapus.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.loadPelanggaran();
        console.log('berhasil hapus data');
      },
      error: (error: any) => {
        console.log('gagal hapus data', error);
      },
    });
  }

  openModalEdit(isOpen: boolean, pelanggaran: any) {
    this.modalEdit = isOpen;
    this.newPelanggar = { ...pelanggaran };
  }
}