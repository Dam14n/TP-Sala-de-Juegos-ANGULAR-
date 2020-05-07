import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasMemotestComponent } from './cartas-memotest.component';

describe('CartasMemotestComponent', () => {
  let component: CartasMemotestComponent;
  let fixture: ComponentFixture<CartasMemotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartasMemotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasMemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
