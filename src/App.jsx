import { Button } from "@mui/material";
import "./App.css";
import AppInput from "./components/AppInput";

function App() {
  return (
    <div>
      <h1 className="text-[red]">Testing</h1>
      <AppInput
        name="email"
        placeholder="Email"
        label="Email"
        height="extra-large"
      />
      <Button>Hello</Button>
    </div>
  );
}

export default App;
