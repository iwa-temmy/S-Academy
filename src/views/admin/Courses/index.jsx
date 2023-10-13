import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import AppTable from "../../../components/app-table";
import TableAction from "../../../components/app-table/TableAction";
import AppFilterSelect from "../../../components/app-table/AppFilterSelect";
import AppCheckbox from "../../../components/AppCheckbox";
import useSearch from "../../../hooks/useSearch";
import { LEVEL_OPTIONS, COURSES_DATA } from "./util";
import AppButton from "../../../components/AppButton";
import AppTag from "../../../components/AppTag";
import { formatAmount } from "../../../utils";
import AddCourseDrawer from "./AddCourseDrawer";

const NO_PER_PAGE = 8;
const Courses = () => {
  // state
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState({ content: false, delete: false });
  const [selected, setSelected] = useState(new Set());
  const [filters, setFilters] = useState({ level: "", tutor: "", status: "" });
  const [addDrawerOpen, setAddDrawerOpen] = useState(false);

  const { data, handleSearch } = useSearch(COURSES_DATA, ["name"]);

  //functions
  const toggleRowSelect = (id) => {
    const set = new Set(selected);
    if (set.has(id)) {
      set.delete(id);
    } else {
      set.add(id);
    }
    setSelected(set);
  };
  const toggleAllSelected = () => {
    const set = new Set(COURSES_DATA.map((course) => course?.id));
    if (selected.size) {
      set.clear();
    }
    setSelected(set);
  };
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const openAddCourseDrawer = () => {
    setAddDrawerOpen(true);
  };
  const closeAddCourseDrawer = () => {
    setAddDrawerOpen(false);
  };
  //constants
  const columns = [
    {
      title: (
        <AppCheckbox
          checked={selected.size === COURSES_DATA?.length}
          indeterminate={
            Boolean(selected.size) && selected.size !== COURSES_DATA?.length
          }
          onChange={toggleAllSelected}
          disabled={!COURSES_DATA?.length}
        />
      ),
      className: "w-12",
      align: "center",
      render: (row) => (
        <AppCheckbox
          onChange={() => toggleRowSelect(row?.id)}
          checked={selected.has(row?.id)}
        />
      ),
    },
    {
      title: "Name",
      render: (row) => (
        <Stack>
          <Typography sx={{ fontWeight: 600, fontSize: 13 }}>
            {row?.name}
          </Typography>
        </Stack>
      ),
    },
    {
      title: "Tutor",
      render: (row) => <>{row?.tutor}</>,
    },
    {
      title: "Level",
      render: (row) => <>{row?.level}</>,
    },
    {
      title: "Chapters",
      render: (row) => <>{row?.no_of_chapters}</>,
    },
    {
      title: "NO of TOPIC",
      render: (row) => <>{row?.no_of_topics}</>,
    },
    {
      title: "Price",
      render: (row) => <>{formatAmount(row?.price)}</>,
    },
    {
      title: "Status",
      render: (row) => (
        <>
          <AppTag
            text={row?.published ? "live" : "draft"}
            type={row?.published ? "danger" : ""}
          />
        </>
      ),
    },
    {
      title: <img src="/icons/viewColumnIcon.svg" alt="view column" />,
      align: "center",
      render: () => (
        <div className="flex justify-center items-center">
          <TableAction
            items={[
              { label: "Edit course" },
              {
                label: "Add content",
              },
              {
                label: "View course details",
              },
              {
                label: (
                  <>
                    Go <span className="text-danger pl-1">LIVE</span>
                  </>
                ),
              },
              {
                label: "Delete",
              },
            ]}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <Stack sx={{ p: 3, flex: 1 }}>
        <AppTable
          data={data}
          columns={columns}
          title="All courses"
          page={page}
          noPerPage={NO_PER_PAGE}
          dataLength={COURSES_DATA?.length}
          onPageChange={setPage}
          loading={loading.content}
          onSearch={handleSearch}
          filterActions={
            <>
              <AppFilterSelect
                options={LEVEL_OPTIONS}
                name="level"
                defaultValue="Level"
                value={filters.level}
                onChange={handleFilter}
              />
              <AppFilterSelect
                options={LEVEL_OPTIONS}
                name="tutor"
                defaultValue="Tutor"
                value={filters.tutor}
                onChange={handleFilter}
              />
              <AppFilterSelect
                options={LEVEL_OPTIONS}
                name="status"
                defaultValue="Status"
                value={filters.status}
                onChange={handleFilter}
              />
            </>
          }
          hasSearch
          actions={
            <AppButton
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineOutlined />}
              name="Add course"
              onClick={openAddCourseDrawer}
            />
          }
        />
      </Stack>
      <AddCourseDrawer
        open={addDrawerOpen}
        handleClose={closeAddCourseDrawer}
      />
    </>
  );
};

export default Courses;
