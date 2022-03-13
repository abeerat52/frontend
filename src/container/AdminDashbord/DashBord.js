import React from 'react';
import{Row , Nav ,Tab ,Col,Accordion} from "react-bootstrap"

import AddDrug from './AddDrug';
export default function DashBord(props) {
    return (
     <div className='hero'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className='hero'>
    <Col sm={3}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
          <Nav.Link eventKey="first" >الأدوية</Nav.Link>
          </Nav.Item>
                    
          <Nav.Item>
          <Nav.Link eventKey="second">المستخدمين</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="therd">المنشورات</Nav.Link>
        </Nav.Item>

      </Nav>
    </Col>
    <Col sm={9}>
        
      <Tab.Content>
         <Tab.Pane eventKey="first">
         <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>+</Accordion.Header>
    <Accordion.Body>
    <AddDrug/>
    </Accordion.Body>
  </Accordion.Item>
  
  
</Accordion>

          <sonnet />
         </Tab.Pane>
         <Tab.Pane eventKey="second">
         <sonnet />
         </Tab.Pane>
         <Tab.Pane eventKey="therd">
         <sonnet />
         </Tab.Pane>

      </Tab.Content>
    </Col>
     </Row>
</Tab.Container>
</div>
    );
}

