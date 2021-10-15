// Para expor o service para fora do módulo é preciso declarar em em providers no app.module

import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';   // Model (interface) criado 

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';


@Injectable({ // Esse decoretor indica que eu posso injetar essa clase em outras classes
	providedIn: 'root' // Quando o service é provido a prtir do 'root' isso significa 
					   // que ele é signton, ou seja é uma classe que possui apenas uma única
					   // instancia, os valores dos contadores, por exemplo, não muda e será compartilhado
})
export class ProductService {
	// Em um backend de verdade as URL de POST e GET são diferentes 
	private URL_POST: string = "http://localhost:3001/produtos";
	private URL_GET: string = "http://localhost:3001/produtos";

	constructor(private snackBar: MatSnackBar,
				private http: HttpClient) { }

	showMessage(msg: string): void {
		this.snackBar.open(msg, 'X', { // Esse 'X' é action que é indicação para fechar a notificação.
			duration: 3000,
			horizontalPosition: "right",
			verticalPosition: "top"
		});
	}
	
	// Observable do tipo Product. Responsável por guardar os produtos. Requisição HTTP do tipo POST ao Backend.
	create(produto: Product): Observable<Product> { 
		return this.http.post<Product>(this.URL_POST, produto);
	}

	// Observable do tip0 lista de Product. Responsável por ler os produtos back. Requisição HTTP do tipo GET ao Backend.
	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.URL_GET);
	}

	readByid(id: any): Observable<Product> { ///Mudei para any o tipo de id, antes era string
		const url = `${this.URL_GET}/${id}`;
		return this.http.get<Product>(url);
	}

	// Observable do tipo Product. Responsável por atualizar os dados do banco. Requisição HTTP do tipo PUT ao Backend.
	update(product: Product): Observable<Product> {
		const url = `${this.URL_GET}/${product.id}`;
		return this.http.put<Product>(url, product);
	}


	// <Tipo> -> Notação Generics
	// Tem que especificar o tipo de retorno, que nese caso é <Product>
}
