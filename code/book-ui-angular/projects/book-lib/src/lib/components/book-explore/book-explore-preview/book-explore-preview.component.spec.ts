import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExplorePreviewComponent } from './book-explore-preview.component';

describe('BookExplorePreviewComponent', () => {
  let component: BookExplorePreviewComponent;
  let fixture: ComponentFixture<BookExplorePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookExplorePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookExplorePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
