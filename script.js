const convertButton = document.querySelector("#convert-button") //passo 1 - selecionar o botao//
const currencySelect = document.querySelector("#currency-select") //selecionar o select para definir qual moeda eu vou escolher//


//Criando função para click no botão
function convertValue() { //passo 3 - Criar função que irá acontecer quando o botao for clicado//
    const inputValue = document.querySelector(".input-value").value //passo 4 - Pegar o valor digitado no input (".value" quer dizer que vai retornar o valor que eu digitei)//


    //variaveis de conversão//
    const dolarToday = 5.4 //passo 5 - Definir o valor da conversão (dolar e Euro)//
    const euroToday = 6.4

    const ConvertedDollar = inputValue / dolarToday //passo 6 - Fazer a conversão do valor que quer converter com o valor da moeda//
    const ConvertedEuro = inputValue / euroToday


    //Definindo onde vou deixar os valores que quero converter e que foi convertido//
    const valueConvert = document.querySelector(".currency-value-convert") //passo 7 - Selecionar o local onde vai aparecer o valor que eu quero converter e valor convertido//
    const valueConverted = document.querySelector(".currency-value-converted")




    //condições para mudar a moeda//
    if (currencySelect.value == "dolar") { //passo 9 - Se o valor selecionado no select for "dolar" faça//
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", { //passo 10 - Colocar o valor convertido no local selecionado na DIV (formatado usando "intl.NumberFormat)//
            style: "currency",
            currency: "USD"
        }).format(ConvertedDollar)
    }

    if (currencySelect.value == "euro") { //passo 9 - Se o valor selecionado no select for "euro" faça//
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", { //passo 10 - Colocar o valor convertido no local selecionado na DIV (formatado usando "intl.NumberFormat)//
            style: "currency",
            currency: "EUR"
        }).format(ConvertedEuro)

    }



    //condições que serão convertidos//
    valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue) //passo 8 - Colocar o valor que eu quero converter no local selecionado na DIV (formatado usando "intl.NumberFormat)//



} //fim da função de click no botão//




//passo 12 - Criando função para alterar quando clicar no select//
function changeSection() {
    //variaveis de conversão//
    const Textconverted = document.getElementById('text-converted')
    const ImgConverted = document.getElementById('img-dolar')


    //condições para mudar paragrafo e imagem//
    if (currencySelect.value == 'dolar') {
        Textconverted.innerHTML = 'Dolar Americano' //passo 13 - alterando paragrafo que diz qual o tipo da moeda//
        ImgConverted.src = './assent/dolar.png' //passo 13 - alterando imagem do tipo da moeda//
    }

    if (currencySelect.value == 'euro') {
        Textconverted.innerHTML = 'Euro' //passo 13 - alterando paragrafo que diz qual o tipo da moeda//
        ImgConverted.src = './assent/euro.png' //passo 13 - alterando imagem do tipo da moeda//
    }

    //passo 14//
    convertValue() //definindo que dentro de uma função, também chame a primeira função que criamos//
    //Isso quer dizer que quando eu alterar o tipo de moeda, automaticamente ele ja irá mudar convertendo a moeda//

}//fim da função de alteração no select//


currencySelect.addEventListener("change", changeSection) //passo 11 - Definir evento quando alterar moeda no select//
convertButton.addEventListener("click", convertValue) //passo 2 - Definir evento para quando o botao for clicado//