import './Date.css'

function Date(prop) {
    const x= prop.date;
    const date=x.getDate();
    const month=x.getMonth();
    const year=x.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
            {/* JSX cannot handle expenseDate as expense date
                    is an object, so toString funxtion is used
                */}
            {/* March 28<sup>th</sup> 2021 */}
        </div>
    )
}

export default Date;