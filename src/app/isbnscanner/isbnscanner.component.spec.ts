import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsbnscannerComponent as IsbnscannerComponent } from "./isbnscanner.component";

describe('IsbscannerComponent', () => {
  let component: IsbnscannerComponent;
  let fixture: ComponentFixture<IsbnscannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsbnscannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsbnscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
