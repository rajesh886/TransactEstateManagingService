import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {Modal,Button,Tab} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import Tabs from 'react-bootstrap/Tabs';
import paginationFactory from "react-bootstrap-table2-paginator";
import './Tables.css';
import { fetchDevice } from '../actions';

export default function Tables(props) {
    const[DeviceId, setDeviceId] = useState([]);
    const[modalInfo, setModalInfo] = useState([]);
    const[showModal, setShowModal] = useState([false]);

    const[show, setShow] = useState(false);
    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);

    const getDeviceID = async()=>{
        try{
            const data = await axios.get("https://nba-players.herokuapp.com/players-stats");
            // const data = await axios.get("'api/deviceprofiles'");
            // const data = fetchDevice();

            setDeviceId(data.data)
        }
        catch (e)
        {
            console.log(e);
        }

    };
   
    useEffect(()=>{
        getDeviceID(); 
    },[]);

    const columns = [
        // {dataField:"device_id",text: "Device ID",headerStyle: {textAlign: 'center'}},
        // {dataField:"status",text: "Status",headerStyle: {textAlign: 'center'}},
        // {dataField:"type",text: "Type",headerStyle: {textAlign: 'center'}},
        // {dataField:"category",text: "Category",headerStyle: {textAlign: 'center'}},

        {dataField:"device_id",text: "Device ID",headerStyle: {textAlign: 'center'}},
        {dataField:"institution_id",text: "Status",headerStyle: {textAlign: 'center'}},
        {dataField:"category",text: "Type",headerStyle: {textAlign: 'center'}},
        {dataField:"type",text: "Category",headerStyle: {textAlign: 'center'}},
    ];

    const rowEvents = {
        onClick: (e,row) => {
            console.log(row)
            setModalInfo(row)
            toggleTrueFalse()
        },
        };

    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    };
    const ModalContent = ()=>{
        return(
            <Modal show = {show} onHide= {handleClose}>
                <Modal.Header closeButton>
                   <Modal.Title> modalInfo.device_id</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* <Tabs className="summaryTab" activeKey={this.state.activeTab} onSelect={this.handleSelect}> */}
                <Tabs className="summaryTab" defaultActiveKey="summary" id="uncontrolled-tab-example" > 
    <Tab eventKey="summary" title="Summary">
      <ul> <ol> application version:</ol>
      <ol> Expiration date:</ol>
      <ol> application version:</ol>
      <ol> Expiration date:</ol>
      <ol> application version:</ol>
      <ol> Expiration date:</ol>
      <ol> application version:</ol>
      <ol> Expiration date:</ol>
      <ol> application version:</ol>
      <ol> Expiration date:</ol>
      </ul>
    {/* <Sonnet /> */}
    </Tab>
    <Tab eventKey="error" title="Error encountered">
      <ul> <ol> application version:</ol>
      <ol> Expiration date:</ol>
      </ul>
    {/* <Sonnet /> */}
    </Tab>
    <Tab eventKey="history" title= "History">
      <ul> <ol> application version:</ol>
      <ol> Expiration date:</ol>
      </ul>
    {/* <Sonnet /> */}
    </Tab>
    </Tabs>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {handleClose}>Close</Button>
                </Modal.Footer>

            </Modal>
        );

    };    
    return(
        <div className="App">
            <BootstrapTable striped bordered hover size="sm" ali
            keyField = "device_id"
            data= {DeviceId}
            columns = {columns}
            rowEvents ={rowEvents}
            pagination = {paginationFactory()}
            />
            {show? <ModalContent />: null}
        </div>
    );
};