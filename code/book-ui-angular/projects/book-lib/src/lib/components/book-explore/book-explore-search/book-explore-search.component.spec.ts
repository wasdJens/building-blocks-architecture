import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExploreSearchComponent } from './book-explore-search.component';

describe('BookExploreSearchComponent', () => {
  let component: BookExploreSearchComponent;
  let fixture: ComponentFixture<BookExploreSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookExploreSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookExploreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
