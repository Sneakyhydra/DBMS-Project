import { Fragment, useContext } from "react";
import { Card, Row, Col, Icon } from "react-materialize";
import AdminContext from "../../context/admin/adminContext";

const CounCard = ({ user, setAlert }) => {
  const { coun_name, coun_gender, coun_phone, coun_dept, coun_id } = user;
  const adminContext = useContext(AdminContext);

  const { rejectCoun } = adminContext;

  const reject = () => {
    rejectCoun(coun_id);
    setAlert("Rejected", "danger");
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <Row style={{ margin: "0" }}>
        <Col m={6} s={12} style={{ width: "400px" }}>
          <Card
            actions={[
              <a
                href='#!'
                key='1'
                className='waves-effect waves-light btn'
                style={{
                  borderRadius: "10px",
                  minWidth: "120px",
                  width: "auto",
                  backgroundColor: "#BA3F1D",
                  marginLeft: "15px",
                }}
                onClick={reject}
              >
                <Icon>clear</Icon>
              </a>,
            ]}
            className='z-depth-1'
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName='white-text'
            title={coun_name}
          >
            <Fragment>
              <strong>{coun_dept}</strong>
              <br />
              {coun_gender}
              <br />
              {coun_phone}
            </Fragment>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CounCard;