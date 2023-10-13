import { useState } from "react";
import AppDrawer from "../../../components/AppDrawer";
import Stepper from "./components/Stepper";

const AddCourseDrawer = (props) => {
  const [activeStep, setActiveStep] = useState(1);
  const { open, handleClose } = props;

  const toNextStep = () => setActiveStep((current) => current + 1);
  const toPreviousStep = () => setActiveStep((current) => current - 1);
  return (
    <AppDrawer
      open={open}
      handleClose={handleClose}
      title="Add Course"
      action={<Stepper activeStep={activeStep} totalSteps={2} />}
    >
      AddCourseDrawer
    </AppDrawer>
  );
};

export default AddCourseDrawer;
