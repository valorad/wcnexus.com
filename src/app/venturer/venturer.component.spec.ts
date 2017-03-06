import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenturerComponent } from './venturer.component';

describe('VenturerComponent', () => {
  let component: VenturerComponent;
  let fixture: ComponentFixture<VenturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
