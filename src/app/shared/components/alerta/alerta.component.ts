import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dio-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  titulo = 'Sucesso';
  descricao = 'Seu registro foi cadastrado com sucesso';
  btnSucesso = 'Ok';
  btnCancelar = 'Cancelar';
  corBtn = 'primary';
  possuiBtnFechar = false;

  constructor(
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (this.data) {
      this.titulo = this.data.titulo || this.titulo;
      this.descricao = this.data.descricao || this.descricao;
      this.btnCancelar = this.data.btnCancelar || this.btnCancelar;
      this.btnSucesso = this.data.btnSucesso || this.btnSucesso;
      this.corBtn = this.data.corBtn || this.corBtn;
      this.possuiBtnFechar = this.data.possuiBtnFechar || this.possuiBtnFechar;
    }
  }

}
