import Welcome from "./components/Welcome";
import Homepage from "./components/Homepage";
import { useState } from "react";
function App() {
  const [greetingCompleted, setGreetingCompleted] = useState(false);

  return (
    <div className="App">
      <Welcome
        greetingCompleted={greetingCompleted}
        setGreetingCompleted={setGreetingCompleted}
      />
      <Homepage greetingCompleted={greetingCompleted} />
    </div>
  );
}

export default App;
