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
import {ResponsiveTableCode} from "../../data/code/TablesCode";
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
            <div className="bg-none pt-10 pb-16">

            </div>
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
                    {ProjectsStatsData.map((item, index) => {
                        return (
                            <Col xl={2} lg={6} md={12} xs={12} className="mt-6" key={index}>
                                <StatRightTopIcon info={item}/>
                            </Col>
                        )
                    })}
                </Row>

                {/*/!* Active Projects  *!/*/}
                {/*<ActiveProjects />*/}

                <Row className="my-6">
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">รหัสโครงการ:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    aria-describedby="basic-addon3"
                                />
                            </div>
                        </form>
                    </Col>
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">โครงการ:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    aria-describedby="basic-addon3"
                                />
                            </div>
                        </form>
                    </Col>
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">ชื่อผู้ขอ:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    aria-describedby="basic-addon3"
                                />
                            </div>
                        </form>
                    </Col>
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">สำนัก:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    disabled={"true"}
                                    aria-describedby="basic-addon3"
                                    value={"สำนักบุคคลกลาง"}
                                />
                            </div>
                        </form>
                    </Col>
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">ฝ่าย:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    disabled={"true"}
                                    aria-describedby="basic-addon3"
                                    value={"หน่วยงานภายในวัด"}
                                />
                            </div>
                        </form>
                    </Col>
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">กอง:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    disabled={"true"}
                                    aria-describedby="basic-addon3"
                                    value={"กองสารสนเทศบุคคลกลาง"}
                                />
                            </div>
                        </form>
                    </Col>
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">เบอร์ภายใน:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    aria-describedby="basic-addon3"
                                    value={"09999999"}
                                />
                            </div>
                        </form>
                    </Col>
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">เบอร์มือถือ:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    aria-describedby="basic-addon3"
                                    value={"09999999"}
                                />
                            </div>
                        </form>
                    </Col>
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <form className="form-inline">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">หัวหน้าอนุมัติ:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url1"
                                    aria-describedby="basic-addon3"
                                    value={"พระทรงภูมิ อภิธโร (ตันแก้ว)"}
                                />
                            </div>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Table className="text-nowrap fixed">
                        <thead>
                        <tr>
                            <th scope="col">❌</th>
                            <th scope="col">หมวด</th>


                            <th scope="col">ลำดับ</th>
                            <th scope="col">รายการ/รายละเอียดอุปกรณ์ เช่น Notebook จอขนาด 15 นิ้ว</th>
                            <th scope="col">จำนวน</th>

                            <th scope="col">ราคา/หน่วย(฿)</th>
                            <th scope="col">ยอดรวม(บาท)</th>

                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <th>
                                <Badge pill bg="danger" className="me-1">🗙</Badge>
                            </th>


                            <td className={"text-wrap"}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Control type="text" placeholder=""/>
                                    {/*<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>*/}
                                </Form.Group>
                            </td>
                            <td className={"text-wrap"}>1</td>
                            <td className={"text-wrap"}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Control type="number" min="0" placeholder=""/>
                                    {/*<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>*/}
                                </Form.Group>
                            </td>
                            <td className={"text-wrap"}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Control type="number" min="0" placeholder=""/>
                                    {/*<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>*/}
                                </Form.Group>
                            </td>
                            <td className={"text-wrap"}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Control type="number" min="0" placeholder=""/>
                                    {/*<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>*/}
                                </Form.Group>
                            </td>
                            <td className={"text-wrap"}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Control type="number" min="0" placeholder=""/>
                                    {/*<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>*/}
                                </Form.Group>
                            </td>

                        </tr>

                        </tbody>
                    </Table>

                </Row>
                <Row className={"justify-content-center text-center"}>
                    <Col>
                        <Button variant="success" className="me-1">+ กดเพื่อเพิ่มรายการคำขอ</Button>
                        <Button disabled={true} variant="outline-dark" className="me-1">ยอดรวมทั้งหมด 0.00 บาท</Button>
                    </Col>

                </Row>

            </Container>
        </Fragment>
    )
}
export default Home;
