import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMascotaByNameComponent } from './get-mascota-by-name.component';

describe('GetMascotaByNameComponent', () => {
  let component: GetMascotaByNameComponent;
  let fixture: ComponentFixture<GetMascotaByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMascotaByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMascotaByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
