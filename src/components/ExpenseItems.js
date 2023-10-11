import './ExpenseItems.css';
import Date from './Date';

// there is a rule, only one root component per function
// classname instead of class

//necprinb1n9afj7nesn 


function ExpenseItems(prop) {
    // let expenseDate= new Date(2023,9,10);
    // let expenseTitle= 'Car Insurance';
    // let expenseAmount=294.67;
    
    const x= prop.date;
    const date=x.getDate();
    const month=x.getMonth();
    const year=x.getFullYear();

    return (
        <div className="expense-item">
            <Date date={x}></Date>
            <div className="expense-item__description">
                <h2>{prop.title}</h2>
                <div className="expense-item__price">${prop.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItems;