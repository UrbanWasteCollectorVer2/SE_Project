import ellieSmithImg from "../../assets/tables/ellieSmithImg.png";
import floydMilesImg from "../../assets/tables/floydMilesImg.png";
import rosaFloresImg from "../../assets/tables/rosaFloresImg.png";
import janeCooperImg from "../../assets/tables/janeCooper.png";
import bagIcon from "../../assets/tables/bagIcon.svg";
import folderIcon from "../../assets/tables/folderIcon.svg";
import joystickIcon from "../../assets/tables/joystickIcon.svg";
import basketIcon from "../../assets/tables/basketIcon.svg";



const mock = {
  firstTable: [
    {
     "ID": 1,
     "Name": "Trọng Nghĩa",
     "PhoneNum": "0868345468",
     "Role": "Janitor",
     "Status": "Working",
     "img": janeCooperImg
    },
    {
     "ID": 2,
     "Name": "Nghĩa Nguyễn",
     "PhoneNum": "0903339939",
     "Role": "Janitor",
     "Status": "Busy",
     "img": ellieSmithImg
    },
    {
     "ID": 3,
     "Name": "Tuấn Đức",
     "PhoneNum": "0524343279",
     "Role": "Collector",
     "Status": "Absent",
     "img": rosaFloresImg
    },
    {
     "ID": 4,
     "Name": "Nguyễn Đức",
     "PhoneNum": "0333444555",
     "Role": "Collector",
     "Status": "Ready",
     "img": floydMilesImg
    },
    {
     "ID": 5,
     "Name": "Tuấn Nguyễn",
     "PhoneNum": "0878887888",
     "Role": "Collector",
     "Status": "Working",
     "img": janeCooperImg
    },
    {
     "ID": 6,
     "Name": "Mạnh Cường",
     "PhoneNum": "0777388878",
     "Role": "Janitor",
     "Status": "Working",
     "img": ellieSmithImg
    },
    {
     "ID": 7,
     "Name": "Võ Mạnh",
     "PhoneNum": "0939392468",
     "Role": "Janitor",
     "Status": "Ready",
     "img": rosaFloresImg
    },
    {
     "ID": 8,
     "Name": "Phạm Huy",
     "PhoneNum": "0937777777",
     "Role": "Collector",
     "Status": "Absent",
     "img": floydMilesImg
    },
    {
     "ID": 9,
     "Name": "Vũ Giang",
     "PhoneNum": "0967675782",
     "Role": "Collector",
     "Status": "Working",
     "img": janeCooperImg
    },
    {
     "ID": 10,
     "Name": "Huy Hoàng",
     "PhoneNum": "0986810782 ",
     "Role": "Collector",
     "Status": "Busy",
     "img": ellieSmithImg
    },
    {
     "ID": 11,
     "Name": "Hữu Huy",
     "PhoneNum": "0923152523",
     "Role": "Janitor",
     "Status": "Absent",
     "img": rosaFloresImg
    },
    {
     "ID": 12,
     "Name": "Đức Minh",
     "PhoneNum": "0876832382",
     "Role": "Janitor",
     "Status": "Ready",
     "img": floydMilesImg
    },
    {
     "ID": 13,
     "Name": "Tuấn Minh",
     "PhoneNum": "0365232343",
     "Role": "Collector",
     "Status": "Working",
     "img": janeCooperImg
    },
    {
     "ID": 14,
     "Name": "Văn Thoại",
     "PhoneNum": "0789782345",
     "Role": "Janitor",
     "Status": "Working",
     "img": ellieSmithImg
    },
    {
     "ID": 15,
     "Name": "Quan Công",
     "PhoneNum": "0903132289",
     "Role": "Janitor",
     "Status": "Absent",
     "img": rosaFloresImg
    },
    {
     "ID": 16,
     "Name": "Nhiên Đăng",
     "PhoneNum": "0938123454",
     "Role": "Collector",
     "Status": "Absent",
     "img": floydMilesImg
    }
   ],
  secondTable: [
    {
        "ID": "1",
        "RouteID": "Nguyễn Kim",
        "CarID": "50D-246.89",
        "Driver": "Trọng Nghĩa",
        "StartTime": "15:34",
        "Point": "Thống Nhất",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "2",
        "RouteID": "Tô Hiến Thành",
        "CarID": "51D-135.79",
        "Driver": "Vĩnh Hưng",
        "StartTime": "15:27",
        "Point": "Vạn Hạnh",
        "Status": "Addriving",
        "Color": "secondary-cyan"
    },
    {
        "ID": "3",
        "RouteID": "Hải Thượng",
        "CarID": "51D-233.24",
        "Driver": "Thanh Tùng",
        "StartTime": "14:32",
        "Point": "Cầu Ông Lãnh",
        "Status": "Finish",
        "Color": "success"
    },
    {
        "ID": "4",
        "RouteID": "3 Tháng 2",
        "CarID": "50D-342.89",
        "Driver": "Quang Hiếu",
        "StartTime": "13:33",
        "Point": "Cầu Vượt",
        "Status": "Pending",
        "Color": "secondary-yellow"
    },
    {
        "ID": "5",
        "RouteID": "CMT8",
        "CarID": "51D-574.12",
        "Driver": "Mạnh Quỳnh",
        "StartTime": "13:30",
        "Point": "Lê Thị Riêng",
        "Status": "Cancel",
        "Color": "dark"
    },
    {
        "ID": "6",
        "RouteID": "NTMK",
        "CarID": "51D-123.43",
        "Driver": "Quốc Tuấn",
        "StartTime": "13:29",
        "Point": "CV LV8",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "7",
        "RouteID": "Lữ Gia",
        "CarID": "50D-972.12",
        "Driver": "Võ Mạnh",
        "StartTime": "11:20",
        "Point": "Phú Thọ",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "8",
        "RouteID": "Hoà Hảo",
        "CarID": "50D-246.89",
        "Driver": "Quang Lê",
        "StartTime": "11:16",
        "Point": "KTXBK",
        "Status": "Cancel",
        "Color": "dark"
    },
    {
        "ID": "9",
        "RouteID": "Nguyễn Tri Phương",
        "CarID": "51D-135.79",
        "Driver": "Trọng Nghĩa",
        "StartTime": "11:02",
        "Point": "Ngã 5 LTT",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "10",
        "RouteID": "Ngô Gia Tự",
        "CarID": "51D-233.24",
        "Driver": "Vĩnh Hưng",
        "StartTime": "10:45",
        "Point": "Vòng xoay NTP",
        "Status": "Addriving",
        "Color": "secondary-cyan"
    },
    {
        "ID": "11",
        "RouteID": "Nguyễn Chí Thanh",
        "CarID": "50D-342.89",
        "Driver": "Thanh Tùng",
        "StartTime": "10:28",
        "Point": "Nhà máy Bia",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "12",
        "RouteID": "Vĩnh Viễn",
        "CarID": "51D-574.12",
        "Driver": "Quang Hiếu",
        "StartTime": "9:30",
        "Point": "Chợ Vĩnh Viễn",
        "Status": "Addriving",
        "Color": "secondary-cyan"
    },
    {
        "ID": "13",
        "RouteID": "Nhật Tảo",
        "CarID": "51D-123.43",
        "Driver": "Mạnh Quỳnh",
        "StartTime": "8:40",
        "Point": "CC Nhật Tảo",
        "Status": "Pending",
        "Color": "secondary-yellow"
    },
    {
        "ID": "14",
        "RouteID": "Hùng Vương",
        "CarID": "50D-246.89",
        "Driver": "Quốc Tuấn",
        "StartTime": "8:37",
        "Point": "ĐH Y Dược",
        "Status": "Finish",
        "Color": "success"
    },
    {
        "ID": "15",
        "RouteID": "An Dương Vương",
        "CarID": "51D-135.79",
        "Driver": "Võ Mạnh",
        "StartTime": "8:34",
        "Point": "CV Văn Lang",
        "Status": "Finish",
        "Color": "success"
    },
    {
        "ID": "16",
        "RouteID": "Paster",
        "CarID": "51D-233.24",
        "Driver": "Quang Lê",
        "StartTime": "8:28",
        "Point": "Cây Xăng VT6",
        "Status": "Finish",
        "Color": "success"
    }
],
  transactionsWidget: [
    {
      id: 1,
      icon: basketIcon,
      category: "Thay  gạt  mưa      ",
      date: "13:00 8/12/2022",
      price: "120 000",
      description: "Gạt mưa hỏng",
      dropdownOpen: false,
    },
    {
      id: 2,
      icon: joystickIcon,
      category: "Sửa thùng rác 4",
      date: "14:00 8/12/2022",
      price: "Không có",
      description: "Đã báo cáo  ",
      dropdownOpen: false,
    },
    {
      id: 3,
      icon: folderIcon,
      category: "Bảo trì xe số 7",
      date: "16:00 8/12/2022",
      price: "800 000 ",
      description: "Anh Nghĩa làm",
      dropdownOpen: false,
    },
    {
      id: 4,
      icon: bagIcon,
      category: "Trợ cấp cuối tháng",
      date: "17:00 8/12/2022",
      price: "400 000",
      description: "Tăng ca 5h  ",
      dropdownOpen: false,
    }
  ],
  tasksWidget: [
    {
      id: 1,
      description: "Kiểm tra thùng rác số 4",
      time: "9 AM",
      completed: true,
    },
    {
      id: 2,
      description: "Họp hằng tuần",
      time: "11 AM",
      completed: false,
    },
    {
      id: 3,
      description: "Báo cáo kế hoạch tháng",
      time: "2.30 PM",
      completed: false,
    },
    {
      id: 4,
      description: "Kiểm tra xe số 7",
      time: "4 PM",
      completed: false,
    },
  ]
}

export default mock;
