import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporizadorMemotestComponent } from './temporizador-memotest.component';

describe('TemporizadorMemotestComponent', () => {
  let component: TemporizadorMemotestComponent;
  let fixture: ComponentFixture<TemporizadorMemotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporizadorMemotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporizadorMemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
