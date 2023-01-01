import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "code", headerName: "Mã", width: 90 },
  { field: "location", headerName: "Địa điểm", width: 90, editable: true },
  { field: "address", headerName: "Địa chỉ", width: 90, editable: true },
  {
    field: "capacity",
    headerName: "Sức chứa",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  // {
  //   field: "note", headerName: "Ghi chú", width: 130,
  // },
  // {
  //   field: "station_no", headerName: "Điểm dừng số", width: 130,
  // },
  // {
  //   field: "collector", headerName: "Tài xế", width: 160,
  // },
  // {
  //   field: "time", headerName: "Thời gian thu", width: 160,
  // },
];

const rows = [
  {
    code: "1007KTX",
    location: "Ký túc xá",
    address: "497 Hoà Hảo",
    capacity: "50m3",
    // note: "fjasdofjdfo",
    // status_no: 3,
    // collector: "Nguyen Van A",
    // time: "12:00-12:10"
  },
  {
    code: "1007KTX",
    location: "Ký túc xá",
    address: "497 Hoà Hảo",
    capacity: "50m3",
    // note: "fjasdofjdfo",
    // status_no: 3,
    // collector: "Nguyen Van A",
    // time: "12:00-12:10"
  },
];

const Datatable = () => {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
