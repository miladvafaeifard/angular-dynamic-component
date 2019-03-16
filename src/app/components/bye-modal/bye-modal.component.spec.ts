import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByeModalComponent } from './bye-modal.component';

describe('ByeModalComponent', () => {
  let component: ByeModalComponent;
  let fixture: ComponentFixture<ByeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
