import { Button } from "@mui/material";
import "./App.css";
import AppCheckbox from "./components/AppCheckbox";
import AppInput from "./components/AppInput";
import AppSelect from "./components/AppSelect";
import AppTag from "./components/AppTag";

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
      <AppTag text="draft" />
      <AppCheckbox label="Agree to terms and condition" />
      <AppSelect
        label="Course Tutor"
        defaultValue="Select your Course Tutor"
        options={[
          { name: "Ebenezer don", value: "Ebenezer don" },
          { name: "Mosh Hamedami", value: "Mosh Hamedami" },
        ]}
        extraLarge
      />
    </div>
  );
}

export default App;
