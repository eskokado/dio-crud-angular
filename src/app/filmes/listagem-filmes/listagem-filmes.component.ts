import { Component, OnInit } from '@angular/core';

import { Filme } from 'src/app/shared/models/filme';
import { FilmesService } from './../../core/filmes.service';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  filmes: Filme[];

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit() {
    this.filmesService.listar().subscribe((filmes) => this.filmes = filmes);
  }

}
