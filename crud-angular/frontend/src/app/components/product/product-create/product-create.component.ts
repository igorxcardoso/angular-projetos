import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	produto: Product = {  // O id é opecional
		name: 'Pão de forma',
		price: 5.32
	};

	constructor(private productService: ProductService,
				private routerCacel: Router) { }

	ngOnInit(): void {
		
	}

	createProduct(): void {
		this.productService.create(this.produto).subscribe(() => {
			this.productService.showMessage('Produto criado com sucesso!'); // Chama o mÃ©todo showOnConsole da classe ProductService
			this.routerCacel.navigate(['/produtos']);
		});
	}

	cancel(): void {
		this.productService.showMessage('Operação cancelada!');
		this.routerCacel.navigate(['/produtos']);
	}


}
