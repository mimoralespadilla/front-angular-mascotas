import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMascotasComponent } from './all-mascotas.component';

describe('AllMascotasComponent', () => {
  let component: AllMascotasComponent;
  let fixture: ComponentFixture<AllMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
