import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get(environment.url_api + 'paises');
  }

  public criar(pais: any) {
    return this.http.post(environment.url_api + 'paises', pais);
  }

  public listarPorId(id: number) {
    return this.http.get(environment.url_api + 'paises/' + id);
  }

  public atualizar(pais: any, id: number) {
    return this.http.put(environment.url_api + 'paises/' + id, pais);
  }

  public excluir(id: number) {
    return this.http.delete(environment.url_api + 'paises/' + id);
  }
}
