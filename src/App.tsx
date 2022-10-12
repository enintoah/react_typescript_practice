import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/input';

function App() {
  const personName = {
    first: 'Bruce', 
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='Anthonie' isLoggedIn={true} messageCount={10} /> 
      <Person name={personName} /> 
      <PersonList names={nameList} />
      <Status status='loading'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}/>
      <Input value='' handleChange={(event)=> console.log(event)}/>
    </div>
  );
}

export default App;
