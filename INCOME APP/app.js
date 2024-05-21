

const incomeInput = document.getElementById('income');
    const expenseInput = document.getElementById('expense');
    const checkBtn = document.getElementById('check-btn');
    const list = document.getElementById('list');

    checkBtn.addEventListener('click', check);

    function check() {
      const income = parseFloat(incomeInput.value);
      const expense = parseFloat(expenseInput.value);

      if (isNaN(income) || isNaN(expense)) {
        alert('Please enter valid numbers for income and expense');
        return;
      }

      if (income < expense) {
        list.innerText = ('lost :' + (income - expense));
      } else {
        list.innerText = ('savings :' + (income - expense));
      }
      
      
      const listItem = document.createElement('li');
      listItem.textContent = `Income: $${income}, Expense: $${expense}`;
      list.appendChild(listItem);
    }


   