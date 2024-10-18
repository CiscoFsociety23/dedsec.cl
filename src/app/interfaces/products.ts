export interface Categoria {
	nombre: string;
}

export interface Products {
	id: number;
	nombre: string;
	descripcion: string;
	categoria: Categoria;
	precio: number;
	stock: number;
}