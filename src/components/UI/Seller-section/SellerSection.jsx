import React from "react";
import "./SellerSection.css";
import { Container, Row, Col } from "reactstrap";

const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="seller__section-title">
              <h3>Top Seller</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
