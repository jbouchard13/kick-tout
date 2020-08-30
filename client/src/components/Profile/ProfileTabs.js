import React from 'react';
import { Tab, Row, Col, Nav, Image } from "react-bootstrap";

import EditProfile from "./EditProfile"
import ProfileInfo from './ProfileInfo';


export default function ProfileTabs() {
    const style = {
        border: "black solid 2px",
    };
    return (
        <div style={style}>
            <Tab.Container id="uncontrolled-tab-example" defaultActiveKey="yourprofile">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="profileTab">
                                <Nav.Link className="tabOne" eventKey="yourprofile">Your Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="editProfileTab">
                                <Nav.Link className="tabTwo" eventKey="editprofile">Edit Profile</Nav.Link>
                            </Nav.Item>
                            <Col xs={6} md={4}>
                                <Image className="profilePic" src="http://placekitten.com/200/200" rounded />
                            </Col>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="yourprofile"><ProfileInfo />
                            </Tab.Pane>
                            <Tab.Pane eventKey="editprofile"><EditProfile />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}
