import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavContainerComponent } from './fav-container.component';

describe('FavContainerComponent', () => {
  let component: FavContainerComponent;
  let fixture: ComponentFixture<FavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
