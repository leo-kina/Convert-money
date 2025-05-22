const USD = 5.65
const EUR = 6.40
const GBP = 7.58

const footer = document.querySelector('main footer')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const form = document.querySelector('form')
const result = document.getElementById('result')
const description = document.getElementById('description')
amount.addEventListener('input', () =>{
    const hasCharacters = /\D+/g

    amount.value = amount.value.replace(hasCharacters, '')
    //nao permitir usuario digitar uma letra
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    switch(currency.value){
        case 'USD':
            convertMoney(amount.value, USD , 'US$')
            break
    
        case 'EUR':
            convertMoney(amount.value , EUR, '€')
            break
        case 'GBP':
            convertMoney(amount.value, GBP, '£' ) //ele esta chamando a funcao, e executando os parametros
            break
    }
})

const convertMoney = (amount, price , symbol) =>{
    try{
        description.textContent = `${symbol} 1 = R$${price}`
        footer.classList.add('show-result')
        let total = String(amount * price)
        let arroz =total.replace('.', ',')
        result.textContent =  ` ${arroz} Reais`
    } catch (error){
        console.log(error)
        footer.classList.remove('show-result')
        alert('Nao foi possivel converter')

    }
}

