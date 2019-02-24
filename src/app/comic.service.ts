import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Comic } from './comic';
import { COMICS } from './mock-comics';

@Injectable({
    providedIn: 'root'
})
export class ComicService {

    constructor(private messageService: MessageService) { }

    getComic(id: number): Observable<Comic> {
        this.messageService.add(`ComicService: fetched comic id=${id}`);
        return of(COMICS.find(comic => comic.id === id));
    }

    getComics(): Observable<Comic[]> {
        this.messageService.add('ComicService: fetched heroes');
        return of(COMICS);
    }
}
