import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports:[ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jasmin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jasmin');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('jasmin');
  });

  it('test suma', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.addSumando();
    app.sumandos.controls[0].setValue(1);
    app.sumandos.controls[1].setValue(3)
    app.sumar();
    expect(app.resultado).toEqual(4);

  });

  it('should render result', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.addSumando();
    app.sumandos.controls[0].setValue(1);
    app.sumandos.controls[1].setValue(3)
    app.sumar();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Resultado:4');
  });
});
