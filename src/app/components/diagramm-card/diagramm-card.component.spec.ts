import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagrammCardComponent } from './diagramm-card.component';

describe('DiagrammCardComponent', () => {
  let component: DiagrammCardComponent;
  let fixture: ComponentFixture<DiagrammCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagrammCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagrammCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
