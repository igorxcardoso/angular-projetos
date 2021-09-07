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

	produto: Product = {  // O id � opecional
		name: 'P�o de forma',
		price: 5.32
	};

	constructor(private productService: ProductService,
				private routerCacel: Router) { }

	ngOnInit(): void {
		
	}

	createProduct(): void {
		this.productService.create(this.produto).subscribe(() => {
			this.productService.showMessage('Produto criado com sucesso!'); // Chama o método showOnConsole da classe ProductService
			this.routerCacel.navigate(['/produtos']);
		});
	}

	cancel(): void {
		this.productService.showMessage('Opera��o cancelada!');
		this.routerCacel.navigate(['/produtos']);
	}


}
