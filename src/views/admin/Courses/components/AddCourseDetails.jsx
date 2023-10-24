import { Box } from "@mui/material";
import AppCheckbox from "../../../../components/AppCheckbox";
import AppTextEditor from "../../../../components/AppTextEditor";
import { AppForm, AppFormInput } from "../../../../components/forms";
import AppDragAndDrop from "../../../../components/AppDragAndDrop";
import AppSelect from "../../../../components/AppSelect";
import AppLoadingButton from "../../../../components/AppLoadingButton";
import AppFilePreview from "../../../../components/AppFilePreview";
import useValidation from "../../../../hooks/useFormValidation";
import { ADD_COURSE_STEP_ONE_VALIDATIONS, LEVEL_OPTIONS } from "../util";
const AddCourseDetails = (props) => {
  const { toNextStep } = props;

  //submit formdata
  const submitForm = (data) => {
    console.log(data);
    toNextStep();
  };
  const {
    data,
    loading,
    setFieldTouched,
    setFieldValue,
    showError,
    handleFormSubmit,
    // resetForm,
  } = useValidation(ADD_COURSE_STEP_ONE_VALIDATIONS, submitForm);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  const onFileUploadChange = (info) => {
    setFieldTouched("image");
    const { status } = info.file;
    if (status !== "uploading") {
      setFieldValue("image", info?.file?.originFileObj);
    }
  };
  //handling checkbox input
  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    setFieldValue(name, checked);
  };

  //handle Rich editor input
  const handleEditorChange = (value) => {
    setFieldValue("things_to_learn", value);
  };
  return (
    <AppForm onSubmit={handleFormSubmit}>
      <Box sx={{ m: 2.5 }}>
        <Box>
          <AppDragAndDrop
            label="Course Image (Landscape view)"
            accepts={["images"]}
            type="file"
            draggerProps={{ onChange: onFileUploadChange }}
            error={showError("image")}
          />
          <AppFilePreview
            filename={data?.image?.name}
            onClose={() => setFieldValue("image", null)}
          />
        </Box>
        <Box sx={{ pt: 1, pb: 3 }}>
          <AppFormInput
            name="name"
            label="Course Name"
            variant="filled"
            medium
            value={data?.name}
            onChange={handleTextChange}
            error={showError("name")}
          />
        </Box>
        <Box sx={{ pb: 3 }}>
          <AppFormInput
            name="description"
            label="Brief course description up. Not more than 30 words"
            variant="filled"
            value={data?.description}
            onChange={handleTextChange}
            error={showError("description")}
            multiline
            medium
          />
        </Box>
        <Box sx={{ pb: 3, width: "100%" }}>
          <AppSelect
            name="category"
            label="Course Category"
            options={LEVEL_OPTIONS}
            value={data?.category}
            onChange={handleTextChange}
            error={showError("category")}
            onBlur={() => setFieldTouched("category")}
            defaultValue="Course Category"
            variant="filled"
            fullWidth
            medium
          />
        </Box>
        <Box sx={{ pb: 3, width: "100%" }}>
          <AppSelect
            name="tutor"
            label="Course Tutor"
            options={LEVEL_OPTIONS}
            value={data?.tutor}
            onBlur={() => setFieldTouched("tutor")}
            onChange={handleTextChange}
            error={showError("tutor")}
            defaultValue="Course Tutor"
            variant="filled"
            fullWidth
            medium
          />
        </Box>
        <Box sx={{ pb: 3, width: "100%" }}>
          <AppSelect
            name="level"
            label="Course level"
            options={LEVEL_OPTIONS}
            value={data?.level}
            onChange={handleTextChange}
            error={showError("level")}
            variant="contained"
            fullWidth
            medium
            defaultValue="Course level"
            onBlur={() => setFieldTouched("level")}
          />
        </Box>
        <Box sx={{ pb: 3 }}>
          <AppFormInput
            name="price"
            label="Price"
            variant="filled"
            onChange={handleTextChange}
            value={data?.price}
            error={showError("price")}
            medium
          />
        </Box>
        <Box sx={{ px: 1.5 }}>
          <AppCheckbox
            name="mark_as_free"
            label="Mark course as free"
            onChange={handleCheckChange}
            value={data?.mark_as_free}
            error={showError("mark_as_free")}
          />
        </Box>
        <Box sx={{ px: 1.5 }}>
          <AppCheckbox
            name="mark_as_pro_cert"
            label="Mark as professional certificate"
            onChange={handleCheckChange}
            value={data?.mark_as_pro_cert}
            error={showError("mark_as_pro_cert")}
          />
        </Box>
        <Box>
          <AppTextEditor
            label="Add Things that will be learnt"
            placeholder="Type your message here"
            onChange={handleEditorChange}
            value={data?.things_to_learn}
          />
        </Box>
        <AppLoadingButton
          text="Next"
          variant="contained"
          color="primary"
          type="submit"
          loadingPosition="center"
          medium
          sx={{ width: "100%", my: 3 }}
        />
      </Box>
    </AppForm>
  );
};

export default AddCourseDetails;
