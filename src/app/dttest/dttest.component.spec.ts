import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DttestComponent } from './dttest.component';

describe('DttestComponent', () => {
  let component: DttestComponent;
  let fixture: ComponentFixture<DttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
