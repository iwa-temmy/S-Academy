import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import AppTable from "../../../components/app-table";
import AppCheckbox from "../../../components/AppCheckbox";
import TableAction from "../../../components/app-table/TableAction";
import { all_tutors, STATUS_OPTIONS } from "./util";
import AppOpaqueTag from "../../../components/AppOpaqueTag";
import AppFilterSelect from "../../../components/app-table/AppFilterSelect";
import { AddCircleOutline } from "@mui/icons-material";
//hooks
import useSearch from "../../../hooks/useSearch";
import { formatAmount } from "../../../utils/utils";
import ViewDetailsDrawer from "./ViewDetailsDrawer";
import AppButton from "../../../components/AppButton";
import CreateTutorDrawer from "./CreateTutorDrawer";
const NO_PER_PAGE = 8;
const Tutors = () => {
  // state
  const [page, setPage] = useState(1);
  const [tutors, setTutors] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [filters, setFilters] = useState({ status: "" });
  const [viewDrawerOpen, setViewDrawerOpen] = useState(false);
  const [drawerPayload, setDrawerPayload] = useState({});
  const [createModalOpen, setCreateModalOpen] = useState(false);

  //hooks
  const theme = useTheme();
  const { data, handleSearch } = useSearch(all_tutors, ["name", "email"]);
  // functions
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
    const set = new Set(all_tutors.map((emp) => emp.id));
    if (selected.size) {
      set.clear();
    }
    setSelected(set);
  };
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const openViewMDrawer = (data) => {
    setViewDrawerOpen(true);
    setDrawerPayload(data);
  };
  const closeViewDrawer = () => {
    setViewDrawerOpen(false);
    setTimeout(() => {
      setDrawerPayload({});
    }, 1000);
  };

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };
  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };
  //table props
  const columns = [
    {
      title: (
        <AppCheckbox
          checked={selected.size === all_tutors?.length}
          indeterminate={
            Boolean(selected.size) && selected.size !== all_tutors?.length
          }
          onChange={toggleAllSelected}
          disabled={!all_tutors?.length}
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
      key: "name",
      render: (row) => (
        <>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              color: theme.palette.neutral[40],
            }}
          >
            {row?.name}
          </Typography>
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 500,
              color: theme.palette.neutral[40],
            }}
          >
            {row?.email}
          </Typography>
        </>
      ),
    },
    {
      title: "No of Course",
      key: "no_of_course",
      render: (row) => <>{row?.courses}</>,
    },
    {
      title: "Total Course Earning",
      key: "total_course_earning",
      render: (row) => <>{formatAmount(row?.earning)}</>,
    },
    {
      title: "Total Times Courses Sold",
      key: "toatl_times_courses_sold",
      render: (row) => <Box>{row?.course_sold}</Box>,
    },
    {
      title: "Status",
      key: "status",
      render: (row) => (
        <>
          <AppOpaqueTag
            label={row?.status}
            type={row?.status === "active" ? "success" : "error"}
          />
        </>
      ),
    },
    {
      title: <img src="/icons/viewColumnIcon.svg" alt="view column" />,
      key: "action",
      render: (row) => (
        <>
          <TableAction
            items={[
              {
                label: "View more details",
                action: () => openViewMDrawer(row),
              },
              {
                label: "Deactivate tutor",
                action: () => console.log("edit", row),
              },
              { label: "Delete", action: () => console.log("delete", row) },
            ]}
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    const start = (page - 1) * NO_PER_PAGE;
    const stop = start + NO_PER_PAGE;

    setTutors(
      data?.length > 0
        ? data?.sort((a, b) => b?.id - a?.id)?.slice(start, stop)
        : []
    );
  }, [page, data]);
  return (
    <div>
      <AppTable
        columns={columns}
        data={tutors}
        title="Tutors"
        // loading={loading}
        dataLength={data?.length}
        noPerPage={NO_PER_PAGE}
        page={page}
        // onPageChange={handlePageChange}
        hasSearch
        onSearch={handleSearch}
        filterActions={
          <>
            <AppFilterSelect
              options={STATUS_OPTIONS}
              name="status"
              defaultValue="Status"
              value={filters.status}
              onChange={handleFilter}
            />
          </>
        }
        actions={
          <AppButton
            name="Create Tutor"
            color="primary"
            icon={<AddCircleOutline />}
            sx={{
              background: theme.palette.primary[20],
              color: theme.palette.shades.white,
              "&:hover": {
                background: theme.palette.primary[20],
                color: theme.palette.shades.white,
              },
            }}
            onClick={() => openCreateModal()}
          />
        }
      />
      <ViewDetailsDrawer
        open={viewDrawerOpen}
        handleClose={closeViewDrawer}
        payload={drawerPayload}
      />
      <CreateTutorDrawer
        open={createModalOpen}
        handleClose={closeCreateModal}
      />
    </div>
  );
};

export default Tutors;
