import React, { useState } from "react";
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import GoogleMap from "./components/GoogleMap.js";
import optionsIcon from "../../assets/tables/optionsIcon.svg";
import Collector from "../../database/Collector.json"
import s from "./Dashboard.module.scss";

const Dashboard = () => {
  const [checkboxes, setCheckboxes] = useState([true, false])

  const toggleCheckbox = (id) => {
    setCheckboxes(checkboxes => checkboxes
      .map((checkbox, index) => index === id ? !checkbox : checkbox ))



  }

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();
  const [Role, setRole] = React.useState("Collector");
  
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={8}>
          <Row className="gutter mb-4">
            <Col className="mb-4 mb-md-0" xs={12} md={12}>
              <Widget className="">
                 <GoogleMap/> 
              </Widget>
            </Col>
           
          </Row>
          
          <Row className="gutter">
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget} > 
                  <div className="d-flex mb-4" >
                    
                    <div className="d-flex flex-column">
                      <p className="headline-3" style={{color: "red"}}>Bãi Tập kết số 1</p>
                      <p className="body-2" style={{color: "red"}}>95<span className="body-3 muted">/ 100</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-red" className={`progress-xs ${s.mutedPink}`} value="95" />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <div className="d-flex flex-column">
                      <p className="headline-3">Bãi tập kết số 2</p>
                      <p className="body-2">Thu gom<span className="body-3 muted">/--</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-yellow" className={`progress-xs ${s.mutedYellow}`} value="20" />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">

                    <div className="d-flex flex-column">
                      <p className="headline-3">Bãi tập kết số 3</p>
                      <p className="body-2">30<span className="body-3 muted">/ 100</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-cyan" className={`progress-xs ${s.mutedTeal}`} value="30" />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    
                   
                    <div className="d-flex flex-column">
                      <p className="headline-3">Bãi tập kết số 4</p>
                      <p className="body-2">50<span className="body-3 muted">/ 100</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="violet" className={`progress-xs ${s.mutedViolet}`} value="50" />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
        <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={4}>

           <Widget className="widget-p-md">
                <div className="d-flex justify-content-between">
                  <div className="headline-3 d-flex align-items-center">{Role}</div>
                  <UncontrolledDropdown>
                  {Role=="Collector"?
                    <DropdownToggle caret>
                      
                      &nbsp; Tài xế &nbsp;
                    </DropdownToggle>: null}
                    {Role=="Janitor"?
                    <DropdownToggle caret>
                      
                      &nbsp; Lao công &nbsp;
                    </DropdownToggle>: null}
                    {Role=="Vehicle"?
                    <DropdownToggle caret>
                      
                      &nbsp; Xe &nbsp;
                    </DropdownToggle>: null}

                    <DropdownMenu>
                      <DropdownItem onClick={() => setRole("Collector")}>Tài xế</DropdownItem>
                      <DropdownItem onClick={() => setRole("Janitor")}>Lao công</DropdownItem>
                      <DropdownItem onClick={() => setRole("Vehicle")}>Xe</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <a href="/#/UWC/HR"><img className="d-none d-sm-block" src={optionsIcon} alt="Options" /></a>
                </div>







                {Collector.map((collector) =>
                 
                  <div key={collector.id} >

                    {Role==collector.Role&&
                   <div className={`mt-4 ${s.widgetBlock}`}>

                    
                    <div className={s.widgetBody}>
     
                     <input class="position-relative" type="checkbox" value="" id="flexCheckDefault"></input>
   
                      <div className="d-flex">
                       

                        <div className="d-flex flex-column">
                          <p className="body-2">{collector.Name}</p>
                          <p className="body-3 muted">{collector.PhoneNum}</p>
                        </div>
                      </div>
                      {collector.Status=='Working'?
                      <div className="text-primary">
                        {collector.Status}
                      </div>:null}
                      {collector.Status=='Busy'?
                      <div className="text-warning">
                        {collector.Status}
                      </div>:null}
                      {collector.Status=='Absent'?
                      <div className="text-secondary">
                        {collector.Status}
                      </div>:null}
                      {collector.Status=='Ready'?
                      <div className="text-success">
                        {collector.Status}
                      </div>:null}
                    </div>
                    </div>
}
                  </div>
               
                )}
              </Widget>


        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;
