import AppModal from "../../../../components/AppModal";
import { AppForm, AppFormInput } from "../../../../components/forms";
import AppLoadingButton from "../../../../components/AppLoadingButton";
import useValidation from "../../../../hooks/useFormValidation";
import { ABOUT_CHAPTER_VALIDATIONS } from "../util";

const AboutChapterModal = (props) => {
  const { open, handleClose } = props;

  //submit formdata
  const submitForm = (data) => {
    console.log(data);
  };
  const {
    data,
    loading,
    setFieldTouched,
    setFieldValue,
    showError,
    handleFormSubmit,
    // resetForm,
  } = useValidation(ABOUT_CHAPTER_VALIDATIONS, submitForm);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <AppModal
      open={open}
      handleClose={handleClose}
      title="About this chapter"
      headerProps={{ border: true, enable: true }}
      hasCloseBtn
      sx={{ content: {}, paper: { width: "700px !important" } }}
    >
      <AppForm onSubmit={handleFormSubmit}>
        <AppFormInput
          name="about"
          label="Write something about this chapter"
          variant="filled"
          value={data?.about}
          onChange={handleTextChange}
          error={showError("about")}
          onBlur={() => setFieldTouched("about")}
          multiline
          medium
        />
        <AppLoadingButton
          text="Save"
          variant="contained"
          color="primary"
          type="submit"
          loadingPosition="center"
          medium
          sx={{ width: "100%", my: 3 }}
        />
      </AppForm>
    </AppModal>
  );
};

export default AboutChapterModal;
