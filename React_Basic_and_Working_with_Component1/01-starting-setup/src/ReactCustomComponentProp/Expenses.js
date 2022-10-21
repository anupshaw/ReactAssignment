import './Expenses.css'

// import ExpenseItem from './BasicReact&SomeProp/ExpenseItem';
// import ExpenseItem from "./BasicReact&SomeProp/ExpenseItemProps";
// import ExpenseItem from "./BasicReact&SomeProp/ExpenseItemPropsHumanReadableDate";
// import ExpenseItem from "./ReactCustomComponentProp/ExpenseItemwithDateComponent";
// import ExpenseItem from './ReactCustomComponentProp/ExpenseItemwithDate&DetailsComponent';
// import ExpenseItem from './ReactCustomComponentProp/ExpenseItemwithDateComponentChildrenProp';

import ExpenseItem from './CustomComponent/ExpenseItemwithDateComponentCustomComponentChildrenProp';

function Expenses(props){
   return (
   <div className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].Location}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].Location}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].Location}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].Location}
      ></ExpenseItem>
    </div>
   );
}

export default Expenses;