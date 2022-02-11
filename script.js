const transactionsUl = document.querySelector('#transactions')


const dummyTransactions = [
    {id: 1, name: 'bolo de brigadeiro', amount: -20},
    {id: 2, name: 'salario', amount: 300},
    {id: 3, name: 'torta de frango', amount: -10},
    {id: 4, name: 'violão', amount: 150}
]

const addTransactionsIntoDOM = transaction => {
   const operator = transaction.amount < 0 ? '-' : '+'
   const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
   const amountWithoutOperator = Math.abs(transaction.amount)
   const li = document.createElement('li')


li.classList.add(CSSClass)
li.innerHTML = `<li class="minus">
${transaction.name}<span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
</li>
`
transactionsUl.append(li)
}

const updateBalanceValues = () => {
    const transactionsAmounts = dummyTransactions.map(transaction => transaction.amount)
    const total = transactionsAmount.reduce((accumulator, transaction)=> accumulator + transaction, 0)
    const income = transactionsAmounts.filter()
    console.log(transactionsAmounts)
}

const init = () => {
    dummyTransactions.forEach(addTransactionsIntoDOM)
}

init();