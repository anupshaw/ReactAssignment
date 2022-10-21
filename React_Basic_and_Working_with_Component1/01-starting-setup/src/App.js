// import ExpenseItem from './BasicReact&SomeProp/ExpenseItem';
// import ExpenseItem from "./BasicReact&SomeProp/ExpenseItemProps";
// import ExpenseItem from "./BasicReact&SomeProp/ExpenseItemPropsHumanReadableDate";
// import ExpenseItem from "./ReactCustomComponentProp/ExpenseItemwithDateComponent";
// import ExpenseItem from './ReactCustomComponentProp/ExpenseItemwithDate&DetailsComponent';
// import ExpenseItem from './ReactCustomComponentProp/ExpenseItemwithDateComponentChildrenProp';
import Expenses from "./ReactCustomComponentProp/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      Location: "Kolkata",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      Location: "Mumbai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      Location: "Delhi",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      Location: "Hyderabad",
    },
  ];

  // return (
  //   <div>
  //     <ExpenseItem
  //       title={expenses[0].title}
  //       amount={expenses[0].amount}
  //       date={expenses[0].date}
  //       location={expenses[0].Location}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[1].title}
  //       amount={expenses[1].amount}
  //       date={expenses[1].date}
  //       location={expenses[1].Location}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[2].title}
  //       amount={expenses[2].amount}
  //       date={expenses[2].date}
  //       location={expenses[2].Location}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expenses[3].title}
  //       amount={expenses[3].amount}
  //       date={expenses[3].date}
  //       location={expenses[3].Location}
  //     ></ExpenseItem>
  //   </div>
  // );




  // ++++++++++++=====with Expenses custom componenet++++++++++++=====
  return (  
    <div>
    <Expenses  items={expenses}/>
    </div>
    );


  // ++++++++++++=====with map++++++++++++=====

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     {expenses.map((element)=>{
  //       console.log(element.title);
  //       return <ExpenseItem
  //         title={element.title}
  //         amount={element.amount}
  //         date={element.date}
  //         location={element.Location}
  //       ></ExpenseItem >
  //     })}
  //   </div>
  // );
}

export default App;
