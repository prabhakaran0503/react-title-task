import logo from './logo.svg';
import './App.css';
import Table from './Table';
import ListItem from './list';
import Colorchange from './Color';
import List from './ClassList';
import  Objectitreat from './Obect-itreat'

function App() {
  let user=[
    {
      name:"Karan",
      age:20,
      perfession:"Tester"
  },
  {
    name:"Alex",
    age:25,
    perfession:"Coder"
},
{
  name:"Jhon",
  age:20,
  perfession:"Developer"
},
{
  name:"kumar",
  age:25,
  perfession:"Designer"
},
{
  name:"Bala",
  age:30,
  perfession:"Tester"
},
]

const employee=[

  {
  name:"Alex",
  skills:[
  {name:"ReactJS", type:"Frontend"},
  {name:"nodeJS", type:"Backend"}
  ]
  
  },
  {
  name:"Anna",
  skills:[
  {name:"Angular", type:"Frontend"},
  {name:"Python", type:"Backend"}
  ]
}
]
  return (
    <div className="App">
      
      <Table userData={user}/>
      <ListItem userData={user}/>
      <Colorchange />
      <List datas={user}/>  
      <Objectitreat objdata={employee}/>
    </div>
  );
}

export default App;
