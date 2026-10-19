import { ApiProperty } from "@nestjs/swagger";

export class CriarProdutoDto {
    //recebe o nome do produto
    @ApiProperty({
        example:'Café Grão de Ouro 500g',
        description: 'Nome comercial do produto cadastrado'
    })
    nome:string;

    //recebe o preço do produto
    @ApiProperty({
        example: 9.99,
        description:'Preço unitário do produto'
    })
    preco:number;

    //recebe o gênero do produto
    @ApiProperty({
        example:'Alimentos',
        description:'Categoria do produto'
    })
    categoria:string;
}