import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInComponent } from './login-in.component';

describe('LoginInComponent', () => {
  let component: LoginInComponent;
  let fixture: ComponentFixture<LoginInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
