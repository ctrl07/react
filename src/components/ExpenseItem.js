import './ExpenseItem.css';

function ExpenseItem (){
    const expenseDate = new Date(2023, 13, 23);
    const expenseItem = 'Food';
    const expenseAmount = 10;
    const locationOfExpenditure = 'Pune'
    return ( 
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseItem}</h2>
                <div className='expense-item__description'>{locationOfExpenditure}</div>
                <div className='expense-item__price'>₹ {expenseAmount}</div>
            </div>    
    </div> )
};

export default ExpenseItem;