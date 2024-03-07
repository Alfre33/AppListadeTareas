import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasJagfComponent } from './tareas-jagf.component';

describe('TareasJagfComponent', () => {
  let component: TareasJagfComponent;
  let fixture: ComponentFixture<TareasJagfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasJagfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasJagfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
