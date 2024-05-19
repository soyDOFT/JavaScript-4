let counter = 0;

class Tracker {
    size = 0;
    budgetTotal = 0;
    #incomes;

    constructor(incomes, expenses, incomeDescriptions, expenseDescriptions) {
        this.#incomes = [];
        this.expenses = [];
        this.incomeDescriptions = [];
        this.expenseDescriptions = [];
        this.size++;
    }

    showData() {
        // Get the container
        const container = document.getElementById('output'); // Get the div element


        // nameParagraph.textContent = element.name; // Set the text content of the title
        // nameParagraph.style.textAlign = 'center';
        // container.appendChild(nameParagraph); // Append the title to the product item

        for (let i = counter; i < this.incomeDescriptions.length; i++) {
            const date = new Date();
            const day = date.toLocaleDateString();
            const time = date.toLocaleTimeString();
            console.log(time);
            console.log(day);

            const dateParagraph = document.createElement('p'); // Create an h3 element for the title
            container.appendChild(dateParagraph);
            dateParagraph.textContent = `${day} ${time}`;
            console.log(`${day} ${time}`);

            const incomeParagraph = document.createElement('p'); // Create an h3 element for the title
            container.appendChild(incomeParagraph);
            incomeParagraph.textContent = `Income: $${Number(this.getIncomes()[i]).toFixed(2)}`;
            console.log(this.getIncomes()[i]);

            const incomeDescParagraph = document.createElement('p');
            container.appendChild(incomeDescParagraph);
            incomeDescParagraph.textContent = `Income Description: ${this.incomeDescriptions[i]}`;
            console.log(this.incomeDescriptions[i]);
            
            const expenseParagraph = document.createElement('p');
            container.appendChild(expenseParagraph);
            expenseParagraph.textContent = `Expense: ${Number(this.expenses[i]).toFixed(2)}`;
            console.log(this.expenses[i]);

            const expenseDescParagraph = document.createElement('p');
            container.appendChild(expenseDescParagraph);
            expenseDescParagraph.textContent = `Expense Description: ${this.expenseDescriptions[i]}`
            console.log(this.expenseDescriptions[i]);

            const budgetTotalParagraph = document.createElement('p');
            container.appendChild(budgetTotalParagraph);
            budgetTotalParagraph.style.textAlign = 'center';
            budgetTotalParagraph.textContent = `Total Budget: $${this.budgetTotal}`;
            counter++;
        }

        return this; //enables method chaining
    }

    getIncomes() {
        return this.#incomes;
    }

    getBudgetTotal() {
        return this.budgetTotal;
    }

    setIncomes(incomes) {
        this.#incomes.push(incomes);
        this.budgetTotal += parseInt(incomes);
        return this; //enables method chaining
    }

    setExpenses(expenses) {
        this.expenses.push(expenses);
        this.budgetTotal -= parseInt(expenses);
        return this; //enables method chaining
    }

    setIncomeDescriptions(incomeDescriptions) {
        this.incomeDescriptions.push(incomeDescriptions);
        return this; //enables method chaining
    }

    setExpenseDescriptions(expenseDescriptions) {
        this.expenseDescriptions.push(expenseDescriptions);
        return this; //enables method chaining
    }
}

const form = document.forms['form'];
// const submitBtn = document.getElementById('submit-btn');
// submitBtn.addEventListener('click', fillData);
const budgetTracker = new Tracker();

function fillData() {
    // event.preventDefault();
    const incomes = [form['income'].value];
    const incomeDescriptions = [form['income-desc'].value];

    const expenses = [form['expense'].value];
    const expenseDescriptions = [form['expense-desc'].value];

    budgetTracker.setIncomes(incomes);
    budgetTracker.setIncomeDescriptions(incomeDescriptions);
    budgetTracker.setExpenses(expenses);
    budgetTracker.setExpenseDescriptions(expenseDescriptions);

    budgetTracker.showData();
}

