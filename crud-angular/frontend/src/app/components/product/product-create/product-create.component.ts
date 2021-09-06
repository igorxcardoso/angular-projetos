import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	constructor(private productService: ProductService,
				private routerCacel: Router) { }

	ngOnInit(): void {
		
	}

	createProduct(): void {
		this.productService.showMessage('Produto criado com sucesso!'); // Chama o método showOnConsole da classe ProductService
	}

	cancel(): void {
		this.productService.showMessage('Operação cancelada!');
		this.routerCacel.navigate(['/produtos']);
	}


}
