import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Comic } from '../comic';
import { ComicService } from '../comic.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-isbscanner',
  templateUrl: './isbnscanner.component.html',
  styleUrls: ['./isbnscanner.component.css']
})
export class IsbnscannerComponent implements OnInit {
  hasDevices: boolean;
  hasPermission: boolean;
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  lastIsbn : string;

  comics: Comic[] = [];

  constructor(private location: Location, private comicService: ComicService, private messageService: MessageService) { }

  ngOnInit() {
  }

  scanSuccessHandler(resultString: string): void {

    if (this.lastIsbn === resultString)
      return;
    this.lastIsbn = resultString;
    this.searchOrAdd();
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  goBack(): void {
    this.location.back();
  }

  searchOrAdd(): void {
    this.comicService.newIsbn(this.lastIsbn).subscribe(newComics => {
      this.messageService.add(`server return ${newComics.length} comics.`);
      newComics.forEach(comic => this.comics.push(comic));
    });
  }
}
