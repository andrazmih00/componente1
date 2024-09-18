import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css'
})
export class ComponenteComponent {
  componentes = [
    {name: 'Agumon', type: 'Reptil'},
    {name: 'Gabumon', type: 'Reptil'},
    {name: 'Patamon', type: 'Mamifero'},
  ];

  tiposComponente: string[] = ['Reptil', 'Mamifero', 'Ave'];

  addComponente(componente: {name: string, type: string}){
    this.componentes.push(componente);

  }
}
