import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatetiGanadorComponent } from './tateti-ganador.component';

describe('TatetiGanadorComponent', () => {
  let component: TatetiGanadorComponent;
  let fixture: ComponentFixture<TatetiGanadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatetiGanadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatetiGanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
