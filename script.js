function calculadoura(){
    const operaçao = prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/) \n 5 - Divisão Inteira(%)\n 6 - Potênciação(**)');

    if(!operaçao || operaçao >= 7){
        alert('[ERRO]: Operação inválida');
        calculadoura();
    } else{
        let n1 = Number(prompt('Inicie com o Primeiro Valor:'));
        let n2 = Number(prompt('Inicie com o Segundo Valor:'));
        let resultado;
    
    /*I   F U N Ç Õ E S    */
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperaçao();
        }

        function subtraçao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperaçao();
        }
        function multiplicaçao(){
            resultado = n1 * n2;
            alert(`${n1} x ${n2} = ${resultado}`)
            novaOperaçao();
        }

        function divisaoR(){
            resultado = n1/ n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperaçao();
        }

        function divisaoInt(){
            resultado = n1 % n2;
            alert(`O resto da Divisão entre ${n1} e ${n2} é ${resultado}`)
            novaOperaçao();
        }
        function potenciaçao(){
            resultado = n1 ** n2;
            alert(`${n1} ** ${n2} = ${resultado}`)
            novaOperaçao();
        }

        /*    REINICIAR OPERAÇÃO    */

        function novaOperaçao(){
            let opçao = prompt('Deseja fazer outra operação?/\n 1 - SIM\n 2 - NÃO');

            if (opçao == 1){
                calculadoura();
            } else if(opçao == 2){
                alert('Até Mais!')
                return;
            }else{
                alert('[ERRO]: Digite uma opção válida!');
                novaOperaçao();
            }
        }

        /*    C O N D I Ç Õ E S    */
        
        if (operaçao == 1){
            soma();
        } else if (operaçao == 2){
            subtraçao();
        } else if(operaçao == 3){
            multiplicaçao();
        } else if (operaçao == 4){
            divisaoR();
        } else if(operaçao == 5){
            divisaoInt();
        } else if (operaçao == 6){
            potenciaçao();
        }

        /*switch (operaçao) { 
            case 1:
                soma();
                break;
            case 2:
                subtraçao();
                break;
            case 3:
                multiplicaçao();
                break;
            case 4:
                divisaoR();
                break;
            case 5:
                divisaoInt();
                break;
            case 6:
                potenciaçao();
                break;
        }*/
    }

}

calculadoura(); 