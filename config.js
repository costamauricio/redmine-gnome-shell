/**
 * core: /usr/share/gnome-shell/js/ui 
 */



let config = {

    uri : 'http://redmine.dbseller:8888',
    query : 18,
    listeners : [

        {
            description : 'Bugs atribuidos a mim, que n�o est�o em teste' 
            style : 'color:red',
            find : [
                {tracker.name : 'bug'},
                {method : '!ilike', status.name : 'em teste'}
                {assigned_to.name : 'jeferson belmiro'}
                {custom_fields.name : 'prioridade'}
                {custom_fields.value : 'tendencia a piorar longo prazo'}
            ]
            find : [
                {
                    method : '!ilike',
                    tracker.name : 'bug',
                    status.name : 'em teste',
                    assigned_to.name : 'jeferson belmiro',
                    custom_fields.name : 'prioridade'
                    custom_fields.value : 'tendencia a piorar longo prazo'
                }
            ]
        },

        { find : {tracker.name : 'acerto'}  },
        { find : {tracker.name : 'bug'}  },
        { find : {assigned_to : 'jeferson belmiro'} }

        { 
            find : [
                {status.name : 'em teste'},
                {method : 'ilike', assigned_to.name : 'jeferson belmiro'},
            ]
        }

    ]

};


let default = {
    "project": { "id": undefined, "name": undefined },
    "tracker": { "id": undefined, "name": undefined },
    "status": { "id": undefined, "name": undefined, },
    "priority": { "id": undefined, "name": undefined },
    "author": { "id": undefined, "name": undefined },
    "assigned_to": { "id": undefined, "name": undefined },
    "fixed_version": { "id": undefined, "name": undefined },
    "subject": undefined,
    "description": undefined,
    "start_date": undefined,
    "done_ratio": undefined,
    "custom_fields": [ { "id": undefined, "name": undefined, "value": undefined }, ],
    "created_on": "2014-03-13T21:12:55Z",
    "updated_on": "2014-03-18T13:55:56Z"
}



// estrutura
{
  "issues": [
    {
      "id": 386,
      "project": {
        "id": 61,
        "name": "Compras"
      },
      "tracker": {
        "id": 3,
        "name": "Bug"
      },
      "status": {
        "id": 9,
        "name": "Em Desenvolvimento"
      },
      "priority": {
        "id": 2,
        "name": "Normal"
      },
      "author": {
        "id": 28,
        "name": "Renan Rocha"
      },
      "assigned_to": {
        "id": 17,
        "name": "Jeferson Belmiro"
      },
      "fixed_version": {
        "id": 19,
        "name": "2.3.20"
      },
      "subject": "90804 - registro de pre�o",
      "description": "INSTITUI��O: Os�rio\r\n\r\nRegistro de pre�o, primeira vez que escolho material para inclus�o o campo quantidade restante nos mostra o saldo do material, por�m ap�s para inclus�o de outro item o campo traz a quantidade 1 e n�o o seu saldo.\r\nO campo quantidade restante, deve mostrar o saldo do item para o departamento no registro de pre�o em quest�o.\r\n\r\n============================================================================================================\r\n\r\nVerifica��o retaguarda:\r\n\r\nO saldo � atualizado via requisi��o ajax, s� que o formul�rio � carregado por um post que sobrescreve o saldo a partir do sql contido na vari�vel $sql_dot no fonte db_frmsolicitem.php. \r\n\r\nSugest�o de corre��o: inserir o seguinte trecho de c�digo no fonte db_frmsolicitemiframe.php ap�s a linha 961: if ( !empty(parent.document.getElementById('pc16_codmater').value) ) { parent.js_buscarQuantidadeRestanteItemEstimativa(); } \r\n",
      "start_date": "2014-03-13",
      "done_ratio": 0,
      "custom_fields": [
        {
          "id": 6,
          "name": "Gravidade",
          "value": "3 - Grave"
        },
        {
          "id": 7,
          "name": "Urg�ncia",
          "value": "3 - Urgente"
        },
        {
          "id": 8,
          "name": "Tend�ncia",
          "value": "2 - Piorar em Longo Prazo"
        },
        {
          "id": 5,
          "name": "Item de Menu",
          "value": "PROCESSO DE COMPRAS > PROCEDIMENTOS > CADASTRO DE SOLICITA��ES > INCLUS�O"
        },
        {
          "id": 9,
          "name": "Passos para Reproduzir",
          "value": "procedimentos > cadastro de solicita��o > inclus�o\r\n\r\nbase dev13 homologa��o marica relase 21\r\n\r\nacessar a altera��o da solicita��o 6379 depart 142\r\nclicar na �ncora cod do material escolher um dos materiais, logo o campo \"Quantidade restante\" deve mostrar o saldo do item."
        },
        {
          "id": 10,
          "name": "Respons�vel Atendimento",
          "value": "PERES, HENRIQUE KNEWITZ PERES"
        }
      ],
      "created_on": "2014-03-13T21:12:55Z",
      "updated_on": "2014-03-18T13:55:56Z"
    },
  ],
  "total_count": 4,
  "offset": 0,
  "limit": 25
}

