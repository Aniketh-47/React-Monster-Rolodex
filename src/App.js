import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [SearchField, setSearchField] = useState("");
  const [monsters, SetMonsters] = useState([]);
  const [title, setTitle] = useState("");
  const [filteredMonsters, setfliteredMonsters] = useState(monsters);
  // const [String, setString] = useState("");

  console.log("render");

  useEffect(() => {
    // console.log("Effect Triggered.");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => SetMonsters(users));
  }, []);

  useEffect(() => {
    const newMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(SearchField);
    });

    setfliteredMonsters(newMonsters);
    // console.log(filteredMonsters);
  }, [monsters, SearchField]);

  const OnTitleChange = (event) => {
    const NewTitle = event.target.value.toLowerCase();
    setTitle(NewTitle);
  };

  const OnSearchChange = (event) => {
    const SearchFieldString = event.target.value.toLowerCase();
    setSearchField(SearchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        OnChangeHandler={OnSearchChange}
        placeholder="Search For Monsters"
        className="Search-Box"
      />
      <br />
      <SearchBox
        OnChangeHandler={OnTitleChange}
        placeholder="Search For Title"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       SearchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }

//   OnSearchChange = (event) => {
//     const SearchField = event.target.value.toLowerCase();
//     // console.log(SearchField);
//     this.setState(() => {
//       return { SearchField };
//     });
//   };

//   render() {
//     const { monsters, SearchField } = this.state;
//     const { OnSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(SearchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">MONSTER'S ROLODEX</h1>

//         <SearchBox
//           OnChangeHandler={OnSearchChange}
//           placeholder="Search For Monsters"
//           className="Search-Box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
