import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { UniversidadeService } from 'src/app/services/universidade.service';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.component.html',
  styleUrls: ['./universidades.component.scss']
})
export class UniversidadesComponent implements OnInit {

  public paises: any = [];
  public universidades: any = [];
  public universidadeForm: any = this._iniciarUniversidade();

  constructor(
    private _paisService: PaisService,
    private _universidadeService: UniversidadeService
  ) { }

  ngOnInit(): void {
    this.buscarPaises();
    this.listar();
  }

  public buscarPaises(): void {
    this._paisService.listar().subscribe(resp => {
      this.paises = resp;
    });
  }

  public listar(): void {
    this._universidadeService.listar().subscribe(resp => {
      this.universidades = resp;
    })
  }

  public criar(): void {
    if (
      this.universidadeForm.nome !== "" &&
      this.universidadeForm.descricao !== "" &&
      this.universidadeForm.pais_id !== "" &&
      this.universidadeForm.dt_fundacao !== ""
    ) {
      this._universidadeService.criar(this.universidadeForm).subscribe(resp => {
        this.listar();
        this.universidades = this._iniciarUniversidade();
        alert('Cadastrado!');
      });
    }
  }

  public editar(universidade: any): void {
    this.universidadeForm = Object.assign({}, universidade);
  }

  public atualizar() {
    if (
      this.universidadeForm.nome !== "" &&
      this.universidadeForm.descricao !== "" &&
      this.universidadeForm.pais_id !== "" &&
      this.universidadeForm.dt_fundacao !== ""
    ) {
      this._universidadeService.atualizar(this.universidadeForm, this.universidadeForm.id).subscribe(resp => {
        alert('Ataulizado!');
        this.universidades = this._iniciarUniversidade();
        this.listar();
      });
    }
  }

  public cancelar(): void {
    this.universidadeForm = this._iniciarUniversidade();
  }

  public excluir(id: number): void {
    this._universidadeService.excluir(id).subscribe(resp => {
      alert('Excluído!');
      this.listar();
    });
  }

  private _iniciarUniversidade() {
    return {
      id: null,
      nome: '',
      descricao: '',
      dt_fundacao: '',
      pais_id: ''
    }
  }
}
