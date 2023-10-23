import { useState } from "react";
import AppDrawer from "../../../components/AppDrawer";
import Stepper from "./components/Stepper";
import AddCourseDetails from "./components/AddCourseDetails";
import AddCourseContent from "./components/AddCourseContent";

const AddCourseDrawer = (props) => {
  const [activeStep, setActiveStep] = useState(1);
  const { open, handleClose } = props;

  const toNextStep = () => setActiveStep((current) => current + 1);

  const closeAll = () => {
    handleClose();
    setActiveStep(1);
  };
  return (
    <AppDrawer
      open={open}
      handleClose={closeAll}
      title="Add Course"
      action={<Stepper activeStep={activeStep} totalSteps={2} />}
    >
      {activeStep === 1 ? (
        <AddCourseDetails toNextStep={toNextStep} />
      ) : (
        <AddCourseContent courseId={1} />
      )}
    </AppDrawer>
  );
};

export default AddCourseDrawer;
