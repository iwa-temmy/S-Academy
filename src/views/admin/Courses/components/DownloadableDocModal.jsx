import { useState } from "react";
import { Box } from "@mui/material";
import AppModal from "../../../../components/AppModal";
import { AppForm, AppFormInput } from "../../../../components/forms";
import AppLoadingButton from "../../../../components/AppLoadingButton";
import SimpleTab from "../../../../components/tabs/SimpleTab";
import CustomTabPanel from "../../../../components/tabs/CustomTabPanel";
import AppDragAndDrop from "../../../../components/AppDragAndDrop";
import AppFilePreview from "../../../../components/AppFilePreview";
//form validations
import useValidation from "../../../../hooks/useFormValidation";
import { DOWNLOADABLE_DOC_VALIDATIONS } from "../util";
const DownloadableDocModal = (props) => {
  const { open, handleClose, source } = props;
  const [tab, setTab] = useState(0);

  const handleTabChange = (_, tab) => {
    setTab(tab);
  };

  // constants
  const TABS = [
    { name: "Upload from computer", id: 0 },
    { name: "Use link", id: 1 },
  ];

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
  } = useValidation(DOWNLOADABLE_DOC_VALIDATIONS, submitForm);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  const onFileUploadChange = async (info) => {
    setFieldTouched("doc_file");
    const { status } = info.file;
    if (status !== "uploading") {
      setFieldValue("doc_file", info?.file?.originFileObj);
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
        <Box>
          <SimpleTab
            tab={tab}
            handleTabChange={handleTabChange}
            tabs={TABS}
            sx={{ mt: 3, fontSize: 10 }}
            // sx={{ mx: 3 }}
          />
          <CustomTabPanel value={tab} index={0}>
            <Box>
              <AppDragAndDrop
                accepts={["video"]}
                type="video"
                draggerProps={{ onChange: onFileUploadChange }}
                error={showError("doc_file")}
              />
              <AppFilePreview
                filename={data?.doc_file?.name}
                onClose={() => setFieldValue("doc_file", null)}
              />
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
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
          </CustomTabPanel>
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

export default DownloadableDocModal;
