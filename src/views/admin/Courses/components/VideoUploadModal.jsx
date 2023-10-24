import { useState } from "react";
import { Box } from "@mui/material";
import AppDragAndDrop from "../../../../components/AppDragAndDrop";
import AppFilePreview from "../../../../components/AppFilePreview";
import AppModal from "../../../../components/AppModal";
import { AppForm, AppFormInput } from "../../../../components/forms";
import AppLoadingButton from "../../../../components/AppLoadingButton";
//form validations
import useValidation from "../../../../hooks/useFormValidation";
import { VIDEO_UPLOAD_VALIDATIONS } from "../util";
import { fancyTimeFormat, getVideoDuration } from "../../../../utils";
const VideoUploadModal = (props) => {
  const { open, handleClose } = props;

  const [videoDuration, setVideoDuration] = useState("");

  //submit formdata
  const submitForm = (data) => {
    console.log({ ...data, completion_time: videoDuration });
  };
  const {
    data,
    loading,
    setFieldTouched,
    setFieldValue,
    showError,
    handleFormSubmit,
    // resetForm,
  } = useValidation(VIDEO_UPLOAD_VALIDATIONS, submitForm);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  const onFileUploadChange = async (info) => {
    setFieldTouched("video_upload");
    const { status } = info.file;

    const duration = await getVideoDuration(info?.file?.originFileObj);
    setVideoDuration(fancyTimeFormat(duration));
    if (status !== "uploading") {
      setFieldValue("video_upload", info?.file?.originFileObj);
    }
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
          <AppDragAndDrop
            accepts={["video"]}
            type="video"
            draggerProps={{ onChange: onFileUploadChange }}
            error={showError("video_upload")}
          />
          <AppFilePreview
            filename={data?.video_upload?.name}
            onClose={() => setFieldValue("video_upload", null)}
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

export default VideoUploadModal;
