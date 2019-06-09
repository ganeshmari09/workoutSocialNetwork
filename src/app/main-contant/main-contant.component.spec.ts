import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContantComponent } from './main-contant.component';

describe('MainContantComponent', () => {
  let component: MainContantComponent;
  let fixture: ComponentFixture<MainContantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
