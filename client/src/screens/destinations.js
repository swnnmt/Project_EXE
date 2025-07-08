import React, { useState } from "react";
import { Row, Col, Typography, Card, Button, Tag } from "antd";
import { HeartOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Destinations = ({ tours }) => {
  const [filter, setFilter] = useState("*");

  const safeTours = Array.isArray(tours) ? tours : [];
  const filteredTours =
    filter === "*"
      ? safeTours
      : safeTours.filter(
          (tour) => tour.domain === filter.replace("domain-", "")
        );

  return (
    <section
      className="popular-destinations-area"
      style={{ padding: "100px 0 90px" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <Title level={2}>Khám phá các điểm đến phổ biến</Title>
          <Paragraph>
            Website{" "}
            <span
              className="count-text plus"
              data-speed="3000"
              data-stop="34500"
            >
              34500
            </span>{" "}
            trải nghiệm phổ biến nhất mà bạn sẽ nhớ
          </Paragraph>
          <div className="destinations-nav" style={{ marginTop: 30 }}>
            {[
              { label: "Tất cả", key: "*" },
              { label: "Miền Bắc", key: "domain-b" },
              { label: "Miền Trung", key: "domain-t" },
              { label: "Miền Nam", key: "domain-n" },
            ].map((item) => (
              <Button
                key={item.key}
                type={filter === item.key ? "primary" : "default"}
                onClick={() => setFilter(item.key)}
                style={{ margin: "0 5px" }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        <Row gutter={[20, 20]} justify="center">
          {filteredTours.map((tour, index) => (
            <Col
              key={tour.tourId}
              xs={24}
              sm={12}
              md={index % 3 === 2 ? 12 : 6}
              className={`domain-${tour.domain}`}
            >
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      position: "relative",
                      maxHeight: 250,
                      overflow: "hidden",
                    }}
                  >
                    <Button
                      shape="circle"
                      icon={<HeartOutlined />}
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        zIndex: 1,
                      }}
                    />
                    <img
                      src={`/assets/images/gallery-tours/${tour.images[0]}`}
                      alt="Destination"
                      style={{ width: "100%", objectFit: "cover", height: 250 }}
                    />
                  </div>
                }
              >
                <Title level={5} style={{ margin: 0 }}>
                  <a href={`/tour-detail/${tour.tourId}`}>{tour.title}</a>
                </Title>
                <Tag color="blue">{tour.time}</Tag>
                <a href={`/tour-detail/${tour.tourId}`}>
                  <RightOutlined />
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Destinations;
