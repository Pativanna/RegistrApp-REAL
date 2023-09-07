import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarConstrasennaPage } from './recuperar-constrasenna.page';

describe('RecuperarConstrasennaPage', () => {
  let component: RecuperarConstrasennaPage;
  let fixture: ComponentFixture<RecuperarConstrasennaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarConstrasennaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
