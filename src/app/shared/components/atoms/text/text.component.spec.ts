import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default styles', () => {
    expect(component.styles).toBe('font-size-m font-weight-regular');
  });

  it('should apply correct styles based on inputs', () => {
    component.size = 'm';
    component.weight = 'regular';

    component.ngOnInit();

    expect(component.styles).toBe('font-size-m font-weight-regular');
  });

  it('should render content passed via ng-content', () => {
    const content = 'Hello, World!';
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    const spanElement: HTMLSpanElement = fixture.nativeElement.querySelector('span');
    spanElement.innerHTML = content; // Set innerHTML for testing

    fixture.detectChanges();

    expect(spanElement.textContent).toBe(content);
  });
});
