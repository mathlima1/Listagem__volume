class NegociacaoController{
    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");  
        
        this._ListaNegociacoes = new ListaNegociacoes();

        this._NegociacaoView = new NegociacaoView($("#negociacaoView"));
        this._NegociacaoView.update(this._ListaNegociacoes)
    }
    adiciona(event){
        event.preventDefault();

        
        this._ListaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        this._NegociacaoView.update(this._ListaNegociacoes)
    }

    _criaNegociacao(){
        return new Negociacao(
            DataHelper.textoParaData(this._inputData),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();

    }
}