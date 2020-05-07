import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DificultadMemotestComponent } from './dificultad-memotest.component';

describe('DificultadMemotestComponent', () => {
  let component: DificultadMemotestComponent;
  let fixture: ComponentFixture<DificultadMemotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DificultadMemotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DificultadMemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
