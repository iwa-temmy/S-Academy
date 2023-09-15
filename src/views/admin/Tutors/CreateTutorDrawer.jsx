import AppDrawer from "../../../components/AppDrawer";

const CreateTutorDrawer = (props) => {
  const { open, handleClose } = props;
  return (
    <AppDrawer
      title="Add tutor"
      open={open}
      handleClose={handleClose}
    ></AppDrawer>
  );
};

export default CreateTutorDrawer;
