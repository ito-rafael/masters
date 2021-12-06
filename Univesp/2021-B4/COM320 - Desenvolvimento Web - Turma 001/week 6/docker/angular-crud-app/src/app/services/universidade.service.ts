import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversidadeService {

  constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get(environment.url_api + 'universidades');
  }

  public criar(pais: any) {
    return this.http.post(environment.url_api + 'universidades', pais);
  }

  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'universidades/' + id);
  }

  public atualizar(pais: any, id: number) {
    return this.http.put(environment.url_api + 'universidades/' + id, pais);
  }

  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'universidades/' + id);
  }
}
