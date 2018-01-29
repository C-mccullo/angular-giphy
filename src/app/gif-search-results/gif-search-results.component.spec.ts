import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchResultsComponent } from './gif-search-results.component';

describe('GifSearchResultsComponent', () => {
  let component: GifSearchResultsComponent;
  let fixture: ComponentFixture<GifSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
