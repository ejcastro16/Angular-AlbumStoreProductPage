import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl = "../assets/album.json"

  private getAlbum(id: number) {
    console.log(this._albumUrl)
    return this._http.get(this._albumUrl).map(
      response => {
        response.json()
        console.log(response)
      }
    )
  }
}
