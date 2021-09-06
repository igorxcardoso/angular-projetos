/*
  Nesse arquivo é tratado questões relacionado as rotas
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Importações
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

// Vai substituir esse componentes la no router-outlet que está no nav.component.html
const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "produtos",  // Apenas o nome sem / no início
		component: ProductCrudComponent
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
