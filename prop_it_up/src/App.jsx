import NameCard from './components/NameCard';
import './App.css';

function App() {
  const personel = [
    {"firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black"},
    {"firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown"},
    {"firstName": "Millard", "lastName": "Fillmore", "age": 50, "hairColor": "Brown"},
    {"firstName": "Maria", "lastName": "Smith", "age": 62, "hairColor": "Brown"},
  ];

  return (
    <div className="App">
      {personel.map(person => <NameCard personelInfo={person}/>)}
    </div>
  );
}

export default App;
