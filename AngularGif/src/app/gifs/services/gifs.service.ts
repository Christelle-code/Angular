import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Gif, GIFInterface } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    // if(localStorage.getItem('history')){
    //   this._history=JSON.parse( localStorage.getItem('history')!)
    // }
    this.response = JSON.parse(localStorage.getItem('response')!) || []
  }
  private URL = 'https://api.giphy.com/v1/gifs'
  private api_key = 'je2THcejnTLBqiRFpH58UjYzgGZkhRxs'
  private _history: string[] = [];
  public response: Gif[] = [];

  get history() {
    return [...this._history];
  }

  set history(history: string[]) {
    this._history = history;
  }

  addNewElementToHistory(newSearch: string) {
    newSearch = newSearch.toLowerCase()
    if ((!this._history.includes(newSearch.trim())) && (newSearch.trim().length > 0)) {
      this._history.unshift(newSearch)

      console.log(this._history)
      this._history = this._history.splice(0, 10)
      console.log(this._history)
      localStorage.setItem('history', JSON.stringify(this._history))
    }



    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', '10')
      .set('q', newSearch);



    this.http.get<GIFInterface>(`${this.URL}/search`, { params }).pipe(
      tap(() => console.log(`${this.URL}/search`, { params })),
      tap(() => console.log({ params }))
    )
      .subscribe((res: GIFInterface) => {
        console.log(res.data)
        this.response = res.data
        localStorage.setItem('response', JSON.stringify(this.response))
      })
  }
}
