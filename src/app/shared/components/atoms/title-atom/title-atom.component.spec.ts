import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleAtomComponent } from './title-atom.component';
import { TitleLevel } from '@customTypes/atoms-types';
import { EMPTY_STRING, TITLE_DEFAULT_LEVEL } from '@constants/atom-constants';

describe('TitleAtomComponent', () => {
  let component: TitleAtomComponent;
  let fixture: ComponentFixture<TitleAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleAtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct heading level and content', () => {
    const content = 'Sample Title';
    const levels: TitleLevel[] = ['h1', 'h2', 'h3', 'h4'];

    levels.forEach(level => {
      component.level = level;
      component.content = content;
      fixture.detectChanges(); 

      const headingElement = fixture.nativeElement.querySelector(level);

      expect(headingElement).toBeTruthy();
      expect(headingElement.textContent).toBe(content);
    });
  });

  it('should use default values when none are provided', () => {
    expect(component.level).toBe(TITLE_DEFAULT_LEVEL);
    expect(component.content).toBe(EMPTY_STRING);
  });
});
