
let listaQuantidade=[];
let listaValores=[];
let valorTotal=0
limpaTela()

function adicionar(){

    //Encontrando os itens e valores do carrinho -- OK
    produtos=document.getElementById('produto').value;
    quantidade=document.getElementById('quantidade').value;
    nomeProdutos=produtos.split('-')[0];
    valorProdutos=produtos.split('- R$')[1];
    //calculando o preço por produto
    preco=valorProdutos*quantidade;

    //Separando as listas OK
    listaQuantidade.push(quantidade);
    listaValores.push(valorProdutos);

    //Colocando na tela os produtos do carrinho OK

    let carrinho= document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProdutos} <span class="texto-azul">R$${preco}</span>
        </section>`

      //Ajustando o valor total OK
    let valorTotal=0
    for (i=0; i<listaQuantidade.length; i++){
        valorTotal=valorTotal+(listaQuantidade[i]*listaValores[i])
    }

    total=document.getElementById('valor-total');
    total.innerHTML=(`R$${valorTotal}`)


}


function limpaTela(){
    //limpar tela inicial
    produtosCarrinho=document.getElementById('lista-produtos');
    produtosCarrinho.innerHTML='';
    valorTotal=document.getElementById('valor-total')
    valorTotal.innerHTML='R$0';
}


function limpar(){

    listaQuantidade=[];
    limpaTela();
}

