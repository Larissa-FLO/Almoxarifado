


//document.getElementById('departamento').addEventListener('blur', function(){
//    const inputDepartamento = document.getElementById('departamento');
//    inputDepartamento.style.backgroundColor="white"
//});

document.querySelectorAll("input[data-isnumber='true']").forEach((input) => {
    input.addEventListener("keypress", (event) => {
      if (isNaN(event.key) || event.key < 0) {
        event.preventDefault();
      }
    });
  });

function adicionarCorAoFocarInput(){
    // const listInput = document.querySelectorAll("input[type=text]");
    const inputsNumber = document.querySelectorAll("input[type=number]");
    const inputDate = document.querySelectorAll("input[type=date]");
    // console.log(listInput.length);
    // console.log(listInput)

    // for (let i = 0; i < listInput.length; i++) {
    //     listInput[i].style.backgroundColor="#c5e3cd"
    // }

    // listInput.forEach(function(campo){
    //     campo.addEventListener('focus', function(){
    //         campo.style.backgroundColor="#c5e3cd"
    //     });

    //     campo.addEventListener('blur', function(){
    //         campo.style.backgroundColor="white"
    //     });

    // })

    inputsNumber.forEach(function(campo){
        campo.addEventListener('focus', function(){
            campo.style.backgroundColor="#c5e3cd"
        });

        campo.addEventListener('blur', function(){
            campo.style.backgroundColor="white"
        });
    
    inputDate.forEach(function(campo){
        campo.addEventListener('focus', function(){
            campo.style.backgroundColor="#c5e3cd"
            });
    
            campo.addEventListener('blur', function(){
            campo.style.backgroundColor="white"
            });
    
        })

    })
}

function adicionarCorAoFocarSelect(){
    const listSelect = document.querySelectorAll("select")

    listSelect.forEach(function(campo){
        campo.addEventListener('focus', function(){
            campo.style.backgroundColor="#c5e3cd"
        });

        campo.addEventListener('blur', function(){
            campo.style.backgroundColor="white"
        });

    })
}

function carregarCategorias(){
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectCategoria.add(optFirst);

    categorias.forEach(function(categoria){
        var opt = document.createElement('option');
        opt.value=categoria.idCategoria;
        opt.text=categoria.Descricao;
        selectCategoria.add(opt);
    })
} 

function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectMotivo.add(optFirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    console.log("Categoria selecionada: "+ valorCategoria)
    const motivosFiltrados = motivos.filter((m) => m.idCategoria == valorCategoria)

    motivosFiltrados.forEach(function(motivo){
        const opt = document.createElement('option');
        opt.value=motivo.idMotivo;
        opt.text=motivo.Descricao;
        selectMotivo.add(opt);
    })
} 

document.getElementById('categoriaMotivo').addEventListener('change', function(){
    
        carregarMotivos();

    const selectMotivo = document.getElementById('Motivo');
    const selectCategoria = document.getElementById('categoriaMotivo');
    const valorCategoria = selectCategoria.value;
    
    if (valorCategoria !== '') {
        selectMotivo.disabled = false;
        selectMotivo.style.backgroundColor="white";
    } else {
        selectMotivo.disabled = true;
        selectMotivo.value = '';
    }
    
});


document.getElementById('CodigoProduto').addEventListener("keyup", function(){
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    let produtosFiltrados = produtos.filter((p) => p.idproduto==codigoPesquisado);

    if (produtosFiltrados.length>0) {
        document.getElementById('DescricaoProduto').value=produtosFiltrados[0].Descricao;
    } else {
        document.getElementById('DescricaoProduto').value="";
    }

    if (produtosFiltrados.length>0){
        document.getElementById('Estoque').value=produtosFiltrados[0].estoque;
    } else {
        document.getElementById('Estoque').value="";
    }
})

document.getElementById('idDepartamento').addEventListener("blur", function(){
    const departamentoPesquisado = document.getElementById('idDepartamento').value;

    if (isNaN(departamentoPesquisado)) {
        alert ("Digite apenas números");
    } else if (departamentoPesquisado <= 0 && departamentoPesquisado.length>0){
        alert ("Digite um número válido");
        document.getElementById('idDepartamento').value = "";
        document.getElementById('departamento').value="";
    } else {

            let departamentoFiltrado = departamentos.filter((p) => p.idDep==departamentoPesquisado);

        if (departamentoFiltrado.length>0) {
            document.getElementById('departamento').value=departamentoFiltrado[0].Descricao;
        } else{
            document.getElementById('departamento').value="Departamento inexistente";
        }
    }
})

document.getElementById('Estoque').addEventListener("blur", function() {
    const quantidadeProduto = document.getElementById('Estoque').value;

    if (quantidadeProduto <= 0 || quantidadeProduto === ''){
        alert ("Digite um número válido");
        document.getElementById('Estoque').value = "";
        return false
    } else {

    }
})

document.getElementById('idFuncionario').addEventListener("blur", function(){
    const funcionarioPesquisado = document.getElementById('idFuncionario').value;
    let funcionariosFiltrados = funcionarios.filter((p) => p.idFunc==funcionarioPesquisado);

    if (isNaN(funcionarioPesquisado)) {
        alert ("Digite apenas números");
    } else if (funcionarioPesquisado <= 0 && funcionarioPesquisado.length>=0){
        alert ("Digite um número válido");
        document.getElementById('idFuncionario').value = "";
        document.getElementById('NomeFuncionario').value="";
        document.getElementById('cargo').value="";
    } else {

        if (funcionariosFiltrados.length>0) {
            document.getElementById('NomeFuncionario').value=funcionariosFiltrados[0].nomeFunc;
        } else {
            document.getElementById('NomeFuncionario').value="Funcionário inexistente";
        }

        if (funcionariosFiltrados.length>0){
            document.getElementById('cargo').value=funcionariosFiltrados[0].cargoFunc;
        } else {
            document.getElementById('cargo').value="";
        }
    }
})

document.getElementById('btnGravar').addEventListener('click', function(){
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorios="true"]');
    console.log(elementosObrigatorios);

    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;

    if (chkUrgenteValue==false && chkMedioValue==false && chkBaixoValue==false){
    const divPrioridade = document.getElementById('radioPrioridade');        
    divPrioridade.classList.remove('radioPrioridade');
    divPrioridade.classList.add('radioPrioridadeDesabilitado');        
    document.getElementById('urgente').classList.remove('chkPrioridade');
    document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
    document.getElementById('medio').classList.remove('chkPrioridade');
    document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
    document.getElementById('baixo').classList.remove('chkPrioridade');
    document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
}


    elementosObrigatorios.forEach(function(item){

        if (item.value=="" || item.value==-1){
            item.style.backgroundColor='#de8787';
        }
    })
})


function eventoClickPrioridadeHabilitarCor(){
const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');    
console.log(checkboxesPrioridade);
checkboxesPrioridade.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {    
        const divPrioridade = document.getElementById('radioPrioridade');
        divPrioridade.classList.add('radioPrioridade');
        divPrioridade.classList.remove('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.add('chkPrioridade');
        document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.add('chkPrioridade');
        document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.add('chkPrioridade');
        document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
    });
});
}

const totalRequisicao = document.getElementById('total');
totalRequisicao.value = 0;

document.getElementById('btnInserirItens').addEventListener('click', function(){
    const tabelaItens = document.getElementById('tabelaItens');

    const campoProduto = document.getElementById('CodigoProduto');
    const campoDescricaoProduto = document.getElementById('DescricaoProduto');
    const campoQuantidade = document.getElementById('Estoque');
    
    if (campoQuantidade.value === '') {
        alert("Insira a quantidade do produto")
    } else {

    const linha = document.createElement('tr');

    const tdCodigo = document.createElement('td');
    const tdDescricao = document.createElement('td');
    const tdQuantidade = document.createElement('td');
    const tdUnidade = document.createElement('td');
    const tdPreco = document.createElement('td');
    const tdTotalLinha = document.createElement('td');

    const tdBtnRemover = document.createElement('tr');

    const produtoPesquisado = produtos.filter((p) => p.idproduto==campoProduto.value)

    tdCodigo.innerHTML = campoProduto.value;
    tdDescricao.innerHTML = campoDescricaoProduto.value;
    tdQuantidade.innerHTML = campoQuantidade.value;
    tdUnidade.innerHTML = produtoPesquisado[0].unidade;
    tdPreco.innerHTML = produtoPesquisado[0].preco;
    tdTotalLinha.innerHTML = campoQuantidade.value*produtoPesquisado[0].preco;

    linha.appendChild(tdCodigo)
    linha.appendChild(tdDescricao)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdUnidade)
    linha.appendChild(tdPreco)
    linha.appendChild(tdTotalLinha)
    tabelaItens.appendChild(linha)

    totalRequisicao.value = parseFloat(totalRequisicao.value) + parseFloat(campoQuantidade.value*produtoPesquisado[0].preco);
    

    tdBtnRemover.appendChild(criarBtnRemover(tabelaItens, linha, tdTotalLinha));
        linha.appendChild(tdBtnRemover);
        tabelaItens.appendChild(linha);

    }

})

function criarBtnRemover(tabela, objLinha, numeroLinha){
    const btnRemoverItem = document.createElement('div');
        btnRemoverItem.className = 'BtnRemover';
        btnRemoverItem.id = 'btnRemover' + numeroLinha;
        btnRemoverItem.innerHTML = '<span>Remover</span>';

        btnRemoverItem.addEventListener('click', function(){
            if (objLinha && tabelaItens.contains(objLinha)) {
                tabelaItens.removeChild(objLinha);
            }

            const totalRequisicao = document.getElementById('total');
            const colunas = objLinha.getElementsByTagName('td');
            let valorLinha = colunas[5].innerText;

            totalRequisicao.value=parseFloat(totalRequisicao.value-parseFloat(valorLinha));

        });

        return btnRemoverItem;
}

document.getElementById('imgEstoque').addEventListener('mouseover', function(){
    document.getElementById('divEstoque').style.opacity = "1";
})

document.getElementById('imgEstoque').addEventListener('mouseout', function(){
    document.getElementById('divEstoque').style.opacity = "0";
})


adicionarCorAoFocarInput();
adicionarCorAoFocarSelect();
carregarCategorias();
eventoClickPrioridadeHabilitarCor();