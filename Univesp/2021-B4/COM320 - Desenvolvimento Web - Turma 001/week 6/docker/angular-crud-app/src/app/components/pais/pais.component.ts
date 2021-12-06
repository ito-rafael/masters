import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {

  public paises: any = [];
  public pais: any = this._iniciarPais();

  constructor(
    private _paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar(): void {
    this._paisService.listar().subscribe(resp => {
      this.paises = resp;
    });
  }

  public salvar(): void {
    if (this.pais.nome !== "") {
      this._paisService.criar(this.pais).subscribe(resp => {
        alert('Cadastrado!');
        this.listar();
        this.pais = this._iniciarPais();
      });
    }
  }

  public editar(pais: any): void {
    this.pais = Object.assign({}, pais);
  }

  public atualizar() {
    if (this.pais.nome !== "") {
      this._paisService.atualizar(this.pais, this.pais.id).subscribe(resp => {
        alert('Ataulizado!');
        this.listar();
        this.pais = this._iniciarPais();
      });
    }
  }

  public cancelar(): void {
    this.pais = this._iniciarPais();
  }

  public excluir(id: number): void {
    this._paisService.excluir(id).subscribe(resp => {
      alert('Excluído!');
      this.listar();
    });
  }

  private _iniciarPais() {
    return {
      id: null,
      nome: ''
    };
  }
}

