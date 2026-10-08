import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutosService {
    produtos = [
        {id: 1, nome: 'Arroz Carretão', preco: 9.99},
        {id: 2, nome: 'feijão Timbiras', preco: 7.99},
        {id: 3, nome: 'Macarrão Nissan', preco: 3.99},
        {id: 4, nome: 'Açúcar Cristal', preco: 4.99},
        {id: 5, nome: 'Sal Lebre', preco: 2.99},
        {id: 6, nome: 'Óleo Soya', preco: 6.99},
    ];
    listarProdutos() {
        return this.produtos;
    }
}