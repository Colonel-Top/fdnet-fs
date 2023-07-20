// import node module libraries
import {Fragment} from "react";
import Link from 'next/link';
import {Container, Col, Row, Tab, Card, Nav, Table, Button, Form, Badge, Dropdown} from 'react-bootstrap';

// import widget/custom components
import {HighlightCode, StatRightTopIcon} from "widgets";

// import sub components
import {ActiveProjects, Teams, TasksPerformance} from "sub-components";

// import required data files
import ProjectsStatsData from "data/dashboard/ProjectsStatsData";
import {ResponsiveTableCode} from "../data/code/TablesCode";
import * as PropTypes from "prop-types";

import {
    BasicDropdownCode,
    SplitDropdownCode,
    DropdownVariantCode,
    DropdownSizingCode,
    DirectionsCode,
    MenuAlignmentCode,
    ResponsiveMenuAlignmentCode1,
    ResponsiveMenuAlignmentCode2,
    MenuContentCode,
    DividersCode,
    FormsCode1,
    FormsCode2
} from 'data/code/DropdownsCode';


const Home = () => {
    return (
        <Fragment>
            <div className="bg-none pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">

                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0 "></h3>
                                </div>
                                {/*<div>*/}
                                {/*    <Link href="#" className="btn btn-white">Create New Project</Link>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </Col>
                    {/*{ProjectsStatsData.map((item, index) => {*/}
                    {/*    return (*/}
                    {/*        <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>*/}
                    {/*            <StatRightTopIcon info={item} />*/}
                    {/*        </Col>*/}
                    {/*    )*/}
                    {/*})}*/}
                </Row>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12}>
                        <div id="responsive-tables" className="mb-4">

                            <h5>
                                ประวัติการขอใช้บริการ แบบฟอร์มจัดหาอุปกรณ์คอมพิวเตอร์,สื่อโสตทัศนูปกรณ์และวิทยุสื่อสาร
                            </h5>
                        </div>
                        <Tab.Container defaultActiveKey="design">
                            <Card>
                                <Card.Header className="border-bottom-0 p-0">
                                    {/*<Nav className="nav-lb-tab">*/}
                                    {/*    <Nav.Item>*/}
                                    {/*        <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">*/}
                                    {/*            Design*/}
                                    {/*        </Nav.Link>*/}
                                    {/*    </Nav.Item>*/}
                                    {/*    <Nav.Item>*/}
                                    {/*        <Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">*/}
                                    {/*            Code*/}
                                    {/*        </Nav.Link>*/}
                                    {/*    </Nav.Item>*/}
                                    {/*</Nav>*/}
                                    <Row>
                                        <Col>
                                            <Button variant="success" className="me-1">ขอใหม่(เขียน คพ.)</Button>

                                        </Col>
                                        <Col>
                                            <form className="form-inline">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"
                                                          id="basic-addon3">ค้นหาด้วยฝ่าย/กอง/ID:</span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basic-url1"
                                                        aria-describedby="basic-addon3"
                                                    />
                                                </div>
                                            </form>
                                        </Col>
                                        <Col>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    แถว / หน้า
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">5</Dropdown.Item>
                                                    <Dropdown.Item href="#">10</Dropdown.Item>
                                                    <Dropdown.Item href="#">50</Dropdown.Item>
                                                    <Dropdown.Item href="#">100</Dropdown.Item>
                                                    <Dropdown.Item href="#">500</Dropdown.Item>
                                                    <Dropdown.Item href="#">1000</Dropdown.Item>
                                                    <Dropdown.Item href="#">5000</Dropdown.Item>
                                                    <Dropdown.Item href="#">10000</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </Col>
                                        <Col>
                                            <Button variant="primary" className="me-1">Search</Button>
                                            <Button variant="info" className="me-1">Refresh</Button>
                                        </Col>

                                    </Row>

                                </Card.Header>
                                <Card.Body className="p-0">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="design" className="pb-4 p-4">
                                            {/* code started */}
                                            <Table className="text-nowrap fixed">
                                                <thead>
                                                <tr>
                                                    <th scope="col">Options</th>
                                                    <th scope="col">ID</th>


                                                    <th scope="col">รายการอุปกรณ์ที่ขอใหม่</th>
                                                    <th scope="col">หน่วยงาน</th>
                                                    <th scope="col">สถานะใบงาน</th>

                                                    <th scope="col">ส่งเอกสาร</th>
                                                    <th scope="col">อัพเดต</th>
                                                    <th scope="col">ผู้ปสง.</th>

                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th>
                                                        <Badge pill bg="success" className="me-1">👁</Badge>
                                                        <Badge pill bg="warning" className="me-1">🗙</Badge>

                                                    </th>


                                                    <td className={"text-wrap"}>3793</td>
                                                    <td className={"text-wrap"}>
                                                        <div>server สำหรับ database server os windows , MS SQL
                                                            ใช้สำหรับเก็บข้อมูลการตั้งค่า ,การส่ง notification ,สื่อ
                                                            หรือไฟล์ที่ต้องการใช้งานใน app insight ,server สำหรับ web
                                                            ,API os ubuntu ใช้สำหรับรับส่งข้อมูลผ่าน API และทำหน้า web
                                                            admin,
                                                        </div>
                                                    </td>
                                                    <td className={"text-wrap"}>กองสารสนเทศบุคคลกลาง</td>
                                                    <td className={"text-wrap"}><Badge pill bg="success"
                                                                                       className="me-1">3.ผอ. , รอง ผอ.
                                                        สำนัก หรือ หน.ฝ่าย อนุมัติ</Badge></td>
                                                    <td className={"text-wrap"}>9 มิ.ย. 2566</td>
                                                    <td className={"text-wrap"}>12 มิ.ย. 2566</td>
                                                    <td className={"text-wrap"}><Button pill bg="primary" className="me-1">ℹ️</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <Badge pill bg="success" className="me-1">👁</Badge>
                                                        <Badge pill bg="warning" className="me-1">🗙</Badge>

                                                    </th>


                                                    <td className={"text-wrap"}>3280</td>
                                                    <td className={"text-wrap"}>
                                                        <div>ขอใช้เมลองค์กรสำหรับ user psongphume เพื่อรับข้อมูลจากวงคกก.บริหาร,
                                                        </div>
                                                    </td>
                                                    <td className={"text-wrap"}>กองสารสนเทศบุคคลกลาง</td>
                                                    <td className={"text-wrap"}><Badge pill bg="primary"
                                                                                       className="me-1">จบงาน</Badge></td>
                                                    <td className={"text-wrap"}>8 พ.ค. 2566	</td>
                                                    <td className={"text-wrap"}>11 พ.ค. 2566</td>
                                                    <td className={"text-wrap"}><Button pill bg="primary" className="me-1">ℹ️</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <Badge pill bg="success" className="me-1">👁</Badge>
                                                        <Badge pill bg="warning" className="me-1">🗙</Badge>

                                                    </th>


                                                    <td className={"text-wrap"}>2027</td>
                                                    <td className={"text-wrap"}>
                                                        <div>SSD 1TB High Performance With Adapter For MacBook Pro 13 2016 , 2017 Non TouchBar A1708 (Warranty 1 Year) ที่มา : https://www.macparts.in.th/product/2302/ssd-1tb-high-performance-with-adapter-for-macbook-pro-13-2016-2017-non-touchbar-a1708-warranty-1-yea,
                                                        </div>
                                                    </td>
                                                    <td className={"text-wrap"}>กองสารสนเทศบุคคลกลาง</td>
                                                    <td className={"text-wrap"}><Badge pill bg="primary"
                                                                                       className="me-1">จบงาน</Badge></td>
                                                    <td className={"text-wrap"}>1 ส.ค. 2565</td>
                                                    <td className={"text-wrap"}>28 ก.ย. 2565</td>
                                                    <td className={"text-wrap"}><Button pill bg="primary" className="me-1">ℹ️</Button>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </Table>
                                            {/* end of code */}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
                                            <HighlightCode code={ResponsiveTableCode}/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                            </Card>
                        </Tab.Container>
                    </Col>
                </Row>
                {/*/!* Active Projects  *!/*/}
                {/*<ActiveProjects />*/}

                {/*<Row className="my-6">*/}
                {/*    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">*/}

                {/*        /!* Tasks Performance  *!/*/}
                {/*        <TasksPerformance />*/}

                {/*    </Col>*/}
                {/*    /!* card  *!/*/}
                {/*    <Col xl={8} lg={12} md={12} xs={12}>*/}

                {/*        /!* Teams  *!/*/}
                {/*        <Teams />*/}

                {/*    </Col>*/}
                {/*</Row>*/}
            </Container>
        </Fragment>
    )
}
export default Home;
