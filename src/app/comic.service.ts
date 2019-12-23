import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Comic } from './comic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { COMICS } from './mock-comics';

interface GetResponse {
  _embedded: {
    comics: Comic[];
    _links: {self: {href: string}};
  };
}

@Injectable({
    providedIn: 'root'
})
export class ComicService {
    private comicsUrl = '/api/comics';  // URL to web api
    private isbnUrl = '/api/isbn';  // URL to web api
	
    constructor(private http: HttpClient, private messageService: MessageService) { }
    
    newIsbn(isbn: string): Observable<Comic[]> {
        this.messageService.add(`ComicService: new isbn available isbn=${isbn}`);
        const url = `${this.isbnUrl}?isbn=${isbn}`;
        return this.http.get<Comic[]>(url);
    }

    getComic(id: number): Observable<Comic> {
        this.messageService.add(`ComicService: fetched comic id=${id}`);
		const url = `${this.comicsUrl}/${id}`;
        return this.http.get<Comic>(url);
    }

    getComics(): Observable<Comic[]> {
        this.messageService.add('ComicService: fetched comics');
        return this.http.get<GetResponse>(this.comicsUrl).pipe(map(response => response._embedded.comics));
    }

    updateComic(comic: Comic): Observable<Comic> {
        this.messageService.add(`ComicService: update comic with id=${comic.id}`);
		const url = `${this.comicsUrl}/${comic.id}`;
        return this.http.put<Comic>(url, comic);
    }

    addComic(comic: Comic): Observable<Comic> {
        this.messageService.add(`ComicService: new comic with title=${comic.titel} created.`);
        return this.http.post<Comic>(this.comicsUrl, comic);
    }

    deleteComic(comic: Comic): Observable<Comic> {
        this.messageService.add(`ComicService: deleting comic with id=${comic.id}.`);
		const url = `${this.comicsUrl}/${comic.id}`;
        return this.http.delete<Comic>(url);
    }
}
