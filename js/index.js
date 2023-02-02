let input = document.querySelector('.cpf'),
validaCPF = document.querySelector('.form')
const cpfInvalido = document.querySelector('.cpf-invalido')



function gerarPDF(){
    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email')
    let data = document.querySelector('#data')
    let uf = document.querySelector('#UF')
    let city = document.querySelector('#cidade')

    let pdf = new jsPDF()

    pdf.text('Formulário', 80, 10)
    pdf.text('Nome: ' + nome.value, 20, 30)
    pdf.text('E-mail: ' + email.value, 20, 40)
    pdf.text('CPF: ' + input.value, 20, 50)
    pdf.text('Data de nascimento: ' + data.value, 20, 60)
    pdf.text('UF: ' + uf.value, 20, 70)
    pdf.text('Cidade: ' + city.value, 20, 80)
    pdf.save('Formulário.pdf')
}




input.addEventListener('keypress', ()=>{
    let inputlength = input.value.length

    if(inputlength === 3 || inputlength ===7){
        input.value +='.'
    }else if (inputlength === 11){
        input.value += '-'
    }
})

function inputCPF (){
    if(input.value != ''){
        console.log(input.value)
        FunCPF(input.value)
    }
}

function erro(){
    cpfInvalido.style.display = 'block'
}

function limpaerro(){
    cpfInvalido.style.display = 'none'
}

function FunCPF(cpf = 0){
    cpf = cpf.replace(/\.|-/g, '')

    let soma = 0;
    soma += cpf[0] *10
    soma += cpf[1] *9
    soma += cpf[2] *8
    soma += cpf[3] *7
    soma += cpf[4] *6
    soma += cpf[5] *5
    soma += cpf[6] *4
    soma += cpf[7] *3
    soma += cpf[8] *2
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11){
        soma = 0
    }
    if(soma != cpf[9]){
        erro()
        return false
    }

    soma = 0
    soma += cpf[0] *11
    soma += cpf[1] *10
    soma += cpf[2] *9
    soma += cpf[3] *8
    soma += cpf[4] *7
    soma += cpf[5] *6
    soma += cpf[6] *5
    soma += cpf[7] *4
    soma += cpf[8] *3
    soma += cpf[9] *2
    soma = (soma * 10) % 11

    if(soma == 10 || soma == 11){
        soma = 0;
    }

    if(soma != cpf[10]){
        erro()
        return false
        
    }

    if(true){
        limpaerro()
        gerarPDF()
    }   
    
}


validaCPF.addEventListener('submit', (e)=>{
    e.preventDefault()
    inputCPF()
})
