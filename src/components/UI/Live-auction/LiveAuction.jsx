import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./LiveAuction.css";
import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../assets/data/data";

const LiveAuction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          <Col lg="3">
            {NFT__DATA.slice(0, 4).map((item) => (
              <NftCard key={item.id} item={item} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
