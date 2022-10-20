import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/img-01.jpg";
import avt1 from "../../../assets/images/ava-01.png";

const LiveAuction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          <Col lg="3">
            <div className="single__nft__card">
              <div className="nft__img">
                <img src={img1} alt="" className="w-100" />
              </div>

              <div className="nft__content">
                <h5 className="nft__title">Travel Monkey Club</h5>
                <div className="creator__info">
                  <div className="creator__img">
                    <img src={avt1} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
