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

    add(titel: string): void {
        titel = titel.trim();
        if (!titel) { return; }
        this.comicService.addComic({ titel } as Comic)
          .subscribe(comic => {
            this.comics.push(comic);
          });
    }

    delete(comic: Comic): void {
        if(confirm(`Are you sure to delete ${comic.titel}`)) {
          this.comics = this.comics.filter(h => h !== comic);
          this.comicService.deleteComic(comic).subscribe();
        }
      }


    ngOnInit() {
        this.getComics();
    }
}
