import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExploreResultComponent } from './book-explore-result.component';

describe('BookExploreResultComponent', () => {
  let component: BookExploreResultComponent;
  let fixture: ComponentFixture<BookExploreResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookExploreResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookExploreResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
