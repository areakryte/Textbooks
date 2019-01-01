import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterDetailsComponent } from './chapter-details.component';

describe('ChapterDetailsComponent', () => {
  let component: ChapterDetailsComponent;
  let fixture: ComponentFixture<ChapterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
