import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloModalComponent } from './hello-modal.component';

describe('HelloModalComponent', () => {
  let component: HelloModalComponent;
  let fixture: ComponentFixture<HelloModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
