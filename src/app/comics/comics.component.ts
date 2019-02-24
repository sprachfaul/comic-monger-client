import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { ComicService } from '../comic.service';

@Component({
    selector: 'app-comics',
    templateUrl: './comics.component.html',
    styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

    comics: Comic[];

    constructor(private comicService: ComicService) { }

    getComics(): void {
        this.comicService.getComics().subscribe(comics => this.comics = comics);
    }

    ngOnInit() {
        this.getComics();
    }
}
