import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaMemotestComponent } from './carta-memotest.component';

describe('CartasMemotestComponent', () => {
  let component: CartaMemotestComponent;
  let fixture: ComponentFixture<CartaMemotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaMemotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaMemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
