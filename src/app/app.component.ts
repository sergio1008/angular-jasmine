import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose',[
      state('open', style({
        background : 'red'
      })),
  
      state('close', style({
        background : 'blue'
      })),
  
      transition('open => close', [
        animate('3s')
      ]),
      transition('close => open', [
        animate('2s')
      ])

    ])
  ]
})
export class AppComponent {
  title = 'jasmin';
  showTitle = false;
  resultado = 0;
  formSuma: FormGroup;
  constructor(private fb : FormBuilder){
    this.formSuma = this.fb.group({
      nombre: this.fb.control(''),
      sumandos : this.fb.array([this.fb.control(0, [Validators.required, Validators.min(0)])])
    });
  }

  get sumandos(){
    return this.formSuma.get('sumandos') as FormArray;
  }

  addSumando(){
    this.resultado = 0;
    this.sumandos.push(this.fb.control(0));
  }

  sumar(){
    this.resultado = 0;
    this.sumandos.controls.forEach(e => {
      this.resultado = this.resultado + e.value
    } );
  }
}
