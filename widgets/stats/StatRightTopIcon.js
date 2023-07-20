// Widget : Stat Style 
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from 'prop-types';
import {Card, Spinner} from 'react-bootstrap';

const StatRightTopIcon = props => {
    const { info } = props;
    return (
        <Card>
            <Card.Body>
                {/*<div className="d-flex justify-content-between align-items-center mb-3">*/}
                {/*    <div>*/}
                {/*        <h4 className="mb-0">{info.title}</h4>*/}
                {/*    </div>*/}
                {/*    <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">*/}
                {/*        {info.icon}*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"text-center"}>
                    <p className="fw-bold">{info.title}</p>
                    <p>{info.value} {info.value === "Waiting" ?
                        <Spinner  size="sm" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>:""}</p>
                    {/*<p className="mb-0" dangerouslySetInnerHTML={{ __html: info.statInfo}}></p>*/}
                </div>
            </Card.Body>
        </Card>
    )
}

// Typechecking With PropTypes
StatRightTopIcon.propTypes = {
    info: PropTypes.any.isRequired
};

export default StatRightTopIcon