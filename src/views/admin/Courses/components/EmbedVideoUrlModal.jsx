import { Box } from "@mui/material";
import AppModal from "../../../../components/AppModal";
import { AppForm, AppFormInput } from "../../../../components/forms";
import AppLoadingButton from "../../../../components/AppLoadingButton";
//form validations
import useValidation from "../../../../hooks/useFormValidation";
import { EMBED_VIDEO_URL_VALIDATIONS } from "../util";
const EmbedVideoUrlModal = (props) => {
  const { open, handleClose, source } = props;

  //submit formdata
  const submitForm = (data) => {
    const payload =
      source === "youtube"
        ? { name: data.name, youtube_url: data.url }
        : { name: data.name, vimeo_url: data.url };

    console.log(payload);
  };
  const {
    data,
    loading,
    setFieldTouched,
    setFieldValue,
    showError,
    handleFormSubmit,
    // resetForm,
  } = useValidation(EMBED_VIDEO_URL_VALIDATIONS, submitForm);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <AppModal
      open={open}
      handleClose={handleClose}
      title="Add topic content"
      headerProps={{ border: true, enable: true }}
      hasCloseBtn
      sx={{ content: {}, paper: { width: "421px !important" } }}
    >
      <AppForm onSubmit={handleFormSubmit}>
        <AppFormInput
          name="name"
          label="Untitled topic"
          variant="filled"
          value={data?.about}
          onChange={handleTextChange}
          error={showError("name")}
          onBlur={() => setFieldTouched("name")}
          medium
        />
        <Box sx={{ mt: 3 }}>
          <AppFormInput
            name="url"
            label={`Paste ${
              source === "youtube" ? "youtube" : "vimeo"
            } embedded link here`}
            variant="filled"
            value={data?.about}
            onChange={handleTextChange}
            error={showError("url")}
            onBlur={() => setFieldTouched("url")}
            medium
          />
        </Box>
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

export default EmbedVideoUrlModal;
