import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExploreContainerComponent } from './book-explore-container.component';

describe('BookExploreContainerComponent', () => {
  let component: BookExploreContainerComponent;
  let fixture: ComponentFixture<BookExploreContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookExploreContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookExploreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
