import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Variedad } from './variedad';

describe('Variedad', () => {
  let component: Variedad;
  let fixture: ComponentFixture<Variedad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Variedad],
    }).compileComponents();

    fixture = TestBed.createComponent(Variedad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
