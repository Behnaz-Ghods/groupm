import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePasswordComponent } from './delete-password.component';

describe('DeletePasswordComponent', () => {
  let component: DeletePasswordComponent;
  let fixture: ComponentFixture<DeletePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePasswordComponent]
    });
    fixture = TestBed.createComponent(DeletePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
