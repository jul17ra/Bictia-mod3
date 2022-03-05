import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  public formreservas: FormGroup
  public name: AbstractControl
  public personal_id: AbstractControl
  public date: AbstractControl
  public description: AbstractControl



  constructor(
    public route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public reservasService: ReservasService
    ) {

      this.formreservas = this.formBuilder.group(
        {
          name: ['', Validators.required],
          personal_id: ['', Validators.required],
          date: ['', Validators.required],
          description: ['', Validators.required],
        }
      )
      this.name = this.formreservas.controls['name']
      this.personal_id = this.formreservas.controls['personal_id']
      this.date = this.formreservas.controls['date']
      this.description = this.formreservas.controls['description']
    }

  ngOnInit(): void {
  }

  validar() {
    console.log(this.formreservas.value)
    /* this.sub = true */
    if (this.formreservas.valid)
      return this.add()
  }

  add() {
    console.log("hola soy el add");
    
    this.reservasService.create(this.formreservas.value).subscribe({
      next: (res: any) => {
        if (res.status) {
          console.log("Reserva confirmada")
        }
      },
      complete: () => { console.log('Reserva confirmada') }, // completeHandler
      error: () => { console.log('No disponible') }    // errorHandler  */
    })
    this.reset()
  }

  reset(){
    this.formreservas.reset()
  }
}