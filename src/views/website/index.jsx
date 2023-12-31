import { useState } from "react";
import AppCheckbox from "../../components/AppCheckbox";
import AppInput from "../../components/AppInput";
import AppSelect from "../../components/AppOldSelect";
import AppTag from "../../components/AppTag";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import AppTable from "../../components/app-table";
import AppTextEditor from "../../components/AppTextEditor";
import AppModal from "../../components/AppModal";
import AppNewSelect from "../../components/AppSelect";
import Accordion from "../../components/accordion/Accordion";

const Index = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };
  const columns = [
    {
      title: "Owner",
      key: "owner",
      render: (row) => <>{row?.name}</>,
    },
    {
      title: "Serial Number",
      key: "serialnumber",
      render: (row) => <>{row?.serialnumber}</>,
    },
    {
      title: "Computer Name",
      key: "systemname",
      render: (row) => <>{row?.systemname}</>,
    },
    {
      title: "Date",
      key: "date_updated",
      render: () => (
        <>
          {/* {formatDateObjectHandler(row.date_updated, "DD/MM/YYYY")}ƒ */}
          <Box
            component="div"
            sx={{
              color: theme.palette.gray[500],
              ml: 0.2,
              fontSize: "0.7rem",
              fontWeight: 400,
            }}
          >
            (
            {/* {GetFromNowDate(row.date_updated, "YYYY-MM-DDTHH:mm:ss", "fromNow")} */}
            )
          </Box>
        </>
      ),
    },
    {
      title: "PW Manager",
      key: "pwmanager",
      render: (row) => (
        <>
          <AppTag
            text={row.pwmanager ? "Pass" : "Failed"}
            type={row.pwmanager ? "success" : "failed"}
            hasIcon={true}
          />
        </>
      ),
    },
    {
      title: "HD Encrypted",
      key: "diskencryption",
      render: (row) => (
        <>
          <AppTag
            text={row.diskencryption ? "Pass" : "Failed"}
            type={row.diskencryption ? "success" : "failed"}
            hasIcon={true}
          />
        </>
      ),
    },
    {
      title: "AV Installed",
      key: "avstatus",
      render: (row) => (
        <>
          <AppTag
            text={row.avstatus ? "Pass" : "Failed"}
            type={row.avstatus ? "success" : "failed"}
            hasIcon={true}
          />
        </>
      ),
    },
    {
      title: "Screenlock",
      key: "lockstatus",
      render: (row) => (
        <>
          <AppTag
            text={row.lockstatus ? "Pass" : "Failed"}
            type={row.lockstatus ? "success" : "failed"}
            hasIcon={true}
          />
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center my-10">
      {/* <LandingPage /> */}
      <AppInput
        name="email"
        placeholder="Email"
        label="Email"
        type="email"
        height="extra-large"
      />
      <AppTag text="draft" />
      <AppCheckbox label="Agree to terms and condition" />
      <AppNewSelect
        label="Course Tutor"
        defaultValue="Select your Course Tutor"
        options={[
          { name: "Ebenezer don", value: "Ebenezer don" },
          { name: "Mosh Hamedami", value: "Mosh Hamedami" },
        ]}
        fullWidth={true}
        sx={{ width: "100% !important" }}
        medium
      />

      <AppTable
        columns={columns}
        data={[]}
        title="Computers"
        // loading={loading}
        dataLength={[1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]?.length}
        noPerPage={6}
        page={1}
        // onPageChange={handlePageChange}
        search={true}
        // onSearch={handleSearch}
      />

      <AppTextEditor
        value={value}
        onChange={onChange}
        placeholder="tell us about yourself"
      />
      <Accordion />
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <AppModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        title="Add topic content"
        hasCloseBtn
      >
        <AppInput
          name="email"
          placeholder="Email"
          label="Email"
          type="email"
          height="extra-large"
        />
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
      </AppModal>
    </div>
  );
};

export default Index;
