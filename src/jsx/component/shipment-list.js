import React from "react";
import axios from "axios";

export default class ShipmentList extends React.Component{
    state= {
        shipments:[],
    };

    componentDidMount() {
        axios.get('https://run.mocky.io/v3/8dbab5b3-fe15-4a89-9850-44d263eae593').then(res => {
            console.log(res);
            this.setState({shipments:res.data.data});
        });
    }

    render() {
            return <ul>{this.state.shipments.map(shipment => <li key={shipment.id}>{shipment.receiver}></li>)}</ul>
    }
}