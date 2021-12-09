import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListTitleComponent } from './book-list-title.component';

describe('BookListTitleComponent', () => {
  let component: BookListTitleComponent;
  let fixture: ComponentFixture<BookListTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
