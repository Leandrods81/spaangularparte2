(function(){

    'use strict';

    //recuperando o módulo criado pelo angular angular.module("unidescApp", []);
    var unidescApp = angular.module("unidescApp");

    //Definir uma controller para esse módulo, segundo paramentro representa a função que vai tratar essa controller
    unidescApp.controller('produtoController', produtoController);
    
    //injetando as dependências dessa controller. No caso apenas o $scope
    produtoController.$inject = ['$scope'];

    
    function produtoController($scope) {

        //encapsulando this dentro dessa variável
        var vm = this;
       
        //inicializando as minhas variáveis
        vm.produto = {};
        vm.produtos = [];

        vm.adicionarProduto = function(){
            vm.produtos.push(angular.copy(vm.produto));
                      
            vm.limparCampos();

            console.log(vm.produto); 
        };

        vm.limparCampos = function(){
            vm.produto = {};
        };

        //Deletar um item
        vm.deletarItem = function(){

        };

    }

}());