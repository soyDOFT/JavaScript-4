//initalize counter for amount of summary sections
let counter = 0;

//class for budget tracker
class Tracker {
    //automatic public fields 
    size = 0;
    budgetTotal = 0;
    //private field
    #incomes;

    //constructor initalizes variables with empty variable and increments size
    constructor(incomes, expenses, incomeDescriptions, expenseDescriptions) {
        this.#incomes = [];
        this.expenses = [];
        this.incomeDescriptions = [];
        this.expenseDescriptions = [];
        this.size++;
    }

    //Method to show budget tracker data
    showData() {
        const container = document.getElementById('output'); // Get the container
        container.style.display = 'block';
        const date = new Date(); //Create date object to save data of input
        const day = date.toLocaleDateString(); // month, day, and year part of date in local time
        const time = date.toLocaleTimeString(); //time part of date in local time

        const dateParagraph = document.createElement('p'); // Create an p element for the summary
        container.appendChild(dateParagraph); //Add element as a child to container
        dateParagraph.textContent = `${day} ${time}`; // Display time and date

        const incomeParagraph = document.createElement('p'); // Create an p element for the summary
        container.appendChild(incomeParagraph); //Add element as a child to container
        incomeParagraph.textContent = `Income: $${Number(this.getIncomes()[counter]).toFixed(2)}`; // Display income

        const incomeDescParagraph = document.createElement('p'); // Create an p element for the summary
        container.appendChild(incomeDescParagraph); //Add element as a child to container
        incomeDescParagraph.textContent = `Income Description: ${this.incomeDescriptions[counter]}`; //Display income description
        
        const expenseParagraph = document.createElement('p'); // Create an p element for the summary
        container.appendChild(expenseParagraph); //Add element as a child to container
        expenseParagraph.textContent = `Expense: $${Number(this.expenses[counter]).toFixed(2)}`;

        const expenseDescParagraph = document.createElement('p'); // Create an p element for the summary
        container.appendChild(expenseDescParagraph); //Add element as a child to container
        expenseDescParagraph.textContent = `Expense Description: ${this.expenseDescriptions[counter]}`
        console.log(this.expenseDescriptions[counter]); 

        const  incomeTotalParagraph = document.createElement('p');
        container.appendChild( incomeTotalParagraph); //Add element as a child to container
        incomeTotalParagraph.style.fontWeight = 500; //Change font weight to 500
        incomeTotalParagraph.style.textAlign = 'center'; //center the text
        incomeTotalParagraph.textContent = `Total Incomes: $${this.getIncomesTotal().toFixed(2)}`;// display total income

        const expensesTotalParagraph = document.createElement('p'); // Create an p element for the summary
        expensesTotalParagraph.style.fontWeight = 500; //Change font weight to 500
        container.appendChild(expensesTotalParagraph); //Add element as a child to container
        expensesTotalParagraph.style.textAlign = 'center'; //center the text
        expensesTotalParagraph.textContent = `Total expenses: $${this.getExpensesTotal().toFixed(2)}`; //display total expenses

        const budgetTotalParagraph = document.createElement('p'); //center the text
        container.appendChild(budgetTotalParagraph); //Add element as a child to container
        budgetTotalParagraph.style.fontWeight = 500; //Change font weight to 500
        budgetTotalParagraph.style.textAlign = 'center'; //center the text
        budgetTotalParagraph.textContent = `Total Budget: $${this.budgetTotal.toFixed(2)}`; //Display total budget
        counter++;

        return this; //enables method chaining
    }

    getIncomes() {
        //send back incomes
        return this.#incomes;
    }

    getBudgetTotal() {
        //send back total budget
        return this.budgetTotal;
    }

    getExpensesTotal() {
        //send back total expenses
        let result = 0;
        //loop through expenses and add each element to result
        for (const element of this.expenses) {
            result += Number(element);
        }
        return result;
    }

    getIncomesTotal() {
        //send backl total income
        let result = 0;
        //loop through incomes and add each element to result
        for (const element of this.#incomes) {
            result += Number(element);
        }
        return result;
    }

    setIncomes(incomes) {
        //add new income to list of incomes
        this.#incomes.push(incomes);
        this.budgetTotal += Number(incomes);
        return this; //enables method chaining
    }

    setExpenses(expenses) {
        //add new expense to list of expenses
        this.expenses.push(expenses);
        this.budgetTotal -= Number(expenses);
        return this; //enables method chaining
    }

    setIncomeDescriptions(incomeDescriptions) {
        //add new income description to list of incomes description
        this.incomeDescriptions.push(incomeDescriptions);
        return this; //enables method chaining
    }

    setExpenseDescriptions(expenseDescriptions) {
        //add new expense to list of expense description
        this.expenseDescriptions.push(expenseDescriptions);
        return this; //enables method chaining
    }
}

const form = document.forms['form'];
// const submitBtn = document.getElementById('submit-btn');
// submitBtn.addEventListener('click', fillData);
const budgetTracker = new Tracker();

function fillData() {
    //prevent default form behavior
    event.preventDefault();
    const incomes = [form['income'].value]; //initalize incomes with user input from form
    const incomeDescriptions = [form['income-desc'].value]; //initalize income description with user input from form
    const expenses = [form['expense'].value]; //initalize expense with user input from form
    const expenseDescriptions = [form['expense-desc'].value]; //initalize expense description with user input from form

    //Set properties of budgetTracker
    budgetTracker.setIncomes(incomes);
    budgetTracker.setIncomeDescriptions(incomeDescriptions);
    budgetTracker.setExpenses(expenses);
    budgetTracker.setExpenseDescriptions(expenseDescriptions);
    //Display all data using budgetTracker method
    budgetTracker.showData();
}

