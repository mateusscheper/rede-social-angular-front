import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NovopostComponent} from './novopost.component';

describe('NovopostComponent', () => {
  let component: NovopostComponent;
  let fixture: ComponentFixture<NovopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovopostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
