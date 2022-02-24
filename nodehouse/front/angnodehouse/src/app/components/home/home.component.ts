import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: any[] = []

  constructor(
    public route: ActivatedRoute,
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.list()
  }

  list(){
    this.productsService.list().subscribe({
      next: (res: any) => {
        if(res.length>0){
        this.products = res
        }
      }, // nextHandler
    complete: () => { console.log('Lista de productos')}, // completeHandler
    error: () => { console.log('Error en lista') }    // errorHandler
    })
  }
}