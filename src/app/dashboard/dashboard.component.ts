import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    comics: Comic[] = [];

    hasDevices: boolean;
    hasPermission: boolean;
    availableDevices: MediaDeviceInfo[];
    currentDevice: MediaDeviceInfo = null;

  constructor(private comicService: ComicService) { }

  ngOnInit() {
      this.getComics();
  }

  getComics(): void {
      this.comicService.getComics().subscribe(comics => this.comics = comics);
  }

  scanSuccessHandler(resultString: string): void {
    this.comicService.newBarcode(resultString);
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
}
