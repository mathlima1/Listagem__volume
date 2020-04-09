class DataHelper{
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
    static textoParaData(texto){
        // if(!/\d{4}-\d{2}-\d{2}/.test(texto))
        //     throw new Error('Deve estar no formato aaaa/mm/dd');
        
        
        return new Date(...texto.value.split('-').map((item, indice)=> item - indice % 2));

        /*let date = new Date(this._inputData.value.split("-")); //Solução que funciona mas abaixo teremos a solução avançada
        console.log(date);*/
    }
}