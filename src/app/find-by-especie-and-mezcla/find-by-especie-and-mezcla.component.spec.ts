import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByEspecieAndMezclaComponent } from './find-by-especie-and-mezcla.component';

describe('FindByEspecieAndMezclaComponent', () => {
  let component: FindByEspecieAndMezclaComponent;
  let fixture: ComponentFixture<FindByEspecieAndMezclaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByEspecieAndMezclaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByEspecieAndMezclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
