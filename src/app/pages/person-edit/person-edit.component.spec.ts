import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule
import { PersonEditComponent } from './person-edit.component';
import { Person } from 'src/app/interfaces/person.model'; // Importe o modelo Person

describe('PersonEditComponent', () => {
  let component: PersonEditComponent;
  let fixture: ComponentFixture<PersonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonEditComponent ],
      imports: [ FormsModule, HttpClientModule ] // Adicione o HttpClientModule
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditComponent);
    component = fixture.componentInstance;
    // Mock data for person
    component.person = {
      id: 1, // Adicione a propriedade id
      nome: 'John Doe',
      cep: '12345-678',
      endereco: '123 Main St',
      uf: 'SP',
      telefone: '123456789'
    } as Person; // Assegure-se de que o objeto seja do tipo Person
    fixture.detectChanges();
  });

  it('should display placeholders with person data', () => {
    const compiled = fixture.nativeElement;

    const nomeInput = compiled.querySelector('input[name="name"]');
    const cepInput = compiled.querySelector('input[name="cep"]');
    const enderecoInput = compiled.querySelector('input[name="address"]');
    const ufInput = compiled.querySelector('input[name="uf"]');
    const telefoneInput = compiled.querySelector('input[name="phone"]');

    expect(nomeInput.placeholder).toBe('John Doe');
    expect(cepInput.placeholder).toBe('12345-678');
    expect(enderecoInput.placeholder).toBe('123 Main St');
    expect(ufInput.placeholder).toBe('SP');
    expect(telefoneInput.placeholder).toBe('123456789');
  });
});