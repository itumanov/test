import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

const SEARCH_WORD_URL = 'http://localhost:3000/api/words/';

@Injectable()
export class SearchWordsService {

  constructor(private http: Http) { }

  searchWord(word: string): Observable<any> {
    return this.http.get(SEARCH_WORD_URL + word);
  }
}
