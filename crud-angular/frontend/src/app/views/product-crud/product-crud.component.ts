import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product-crud',
	templateUrl: './product-crud.component.html',
	styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

	// Vai injetar o trabuto do tipo Router automaticamente
	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	navigateToProductCreate(): void {
		// Quando clicar no botão, vai navegar para um rota espcífica.
		this.router.navigate(['/produtos/criar']);
	}

	// Teste
	// atributoLegal = "qualquer";
	// fazerAlgo(): void {
	// 	console.log("Fazendo algo");
	// }
}
