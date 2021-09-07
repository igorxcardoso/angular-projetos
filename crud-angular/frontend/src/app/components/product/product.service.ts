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
	private URL_BASE: string = "http://localhost:3001/produtos";
	constructor(private snackBar: MatSnackBar,
				private http: HttpClient) { }

	showMessage(msg: string): void {
		this.snackBar.open(msg, 'X', { // Esse 'x' é action que é indicação para fechar a notificação. Configurações
			duration: 3000,
			horizontalPosition: "right",
			verticalPosition: "top"
		});
	}

	create(produto: Product): Observable<Product> { // Requisi��o HTTP do tipo POST ao Backend
		return this.http.post<Product>(this.URL_BASE, produto);
	}

	// <> -> Generics

	// Tem que especificar o tipo de retorno <Product> ...
}
