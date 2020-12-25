import { Component, OnInit } from '@angular/core';

import { Filme } from 'src/app/shared/models/filme';
import { FilmesService } from './../../core/filmes.service';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly qtdePorPagina = 4;
  pagina = 0;
  filmes: Filme[] = [];

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.pagina++;
    this.filmesService.listar(this.pagina, this.qtdePorPagina).subscribe((filmes) => this.filmes.push(...filmes));
  }
}
