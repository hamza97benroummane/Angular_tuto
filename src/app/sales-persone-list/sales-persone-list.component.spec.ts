import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersoneListComponent } from './sales-persone-list.component';

describe('SalesPersoneListComponent', () => {
  let component: SalesPersoneListComponent;
  let fixture: ComponentFixture<SalesPersoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersoneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPersoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
