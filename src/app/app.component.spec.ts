import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent;
  //afterAll
  //AfterEach
  afterEach(()=>{
    console.log('AfterEach');

  })

  //beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    appComponent = new AppComponent();
  }));
  //beforeAll


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  //Igualdad
  it('El valor de myVar debe ser Hola Mundo', () =>{
     const valor = appComponent.myVar
     expect(valor).toEqual('Hola Mundo')
  })
  //coincidencias
  it('La variable nombre debe contener Diego', () =>{
    const valor = appComponent.nombre
    expect(valor).toContain('Diego')
  })
  //booleans
  it('Debe retornar TRUE', () =>{
    const respuesta = appComponent.par(44)
    expect(respuesta).toBeTruthy()
  })
  it('Debe retornar FALSE', () =>{
    const respuesta = appComponent.par(15)
    expect(respuesta).toBeFalsy()
  })

});
