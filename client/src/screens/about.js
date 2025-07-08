import React from "react";
import { Row, Col, Typography, Button, Tag } from "antd";
import {
  DollarOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CompassOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const AboutPage = () => {
  const features = [
    {
      icon: <DollarOutlined style={{ fontSize: 40, color: "#1890ff" }} />,
      title: "Đảm bảo giá tốt nhất",
      desc: "Cam kết giá ưu đãi nhất, giúp bạn tiết kiệm tối đa chi phí du lịch.",
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: 40, color: "#52c41a" }} />,
      title: "Điểm đến đa dạng",
      desc: "Hàng nghìn điểm đến hấp dẫn, phù hợp mọi sở thích.",
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 40, color: "#faad14" }} />,
      title: "Đặt chỗ nhanh",
      desc: "Quy trình đặt chỗ đơn giản, nhanh chóng.",
    },
    {
      icon: <CompassOutlined style={{ fontSize: 40, color: "#eb2f96" }} />,
      title: "Hướng dẫn du lịch tốt",
      desc: "Đội ngũ hướng dẫn tận tâm, giàu kinh nghiệm.",
    },
  ];

  return (
    <>
      {/* Banner + Header bạn có thể import từ component riêng */}
      {/* <Header /> */}
      {/* <Banner /> */}

      {/* --- About Section --- */}
      <section className="about-area-two" style={{ padding: "100px 0" }}>
        <div className="container">
          <Row justify="space-between">
            <Col xl={3}>
              <span className="subtitle mb-35">Về chúng tôi</span>
            </Col>
            <Col xl={9}>
              <Row gutter={[24, 24]}>
                <Col lg={16}>
                  <Title level={2}>
                    Kinh nghiệm và công ty du lịch chuyên nghiệp ở Việt Nam
                  </Title>
                </Col>
                <Col md={8}>
                  <div className="experience-years">
                    <Tag color="purple" style={{ fontSize: 14 }}>
                      Năm kinh nghiệm
                    </Tag>
                    <Paragraph>Chúng tôi có</Paragraph>
                    <Title level={3}>5+</Title>
                  </div>
                </Col>
                <Col md={24}>
                  <Paragraph>
                    Chúng tôi chuyên tạo ra những trải nghiệm thành phố khó quên
                    cho du khách muốn khám phá trái tim và tâm hồn của cảnh quan
                    đô thị...
                  </Paragraph>
                  <ul className="list-style-two">
                    <li>Cơ quan Trải nghiệm</li>
                    <li>Đội ngũ Chuyên nghiệp</li>
                    <li>Du lịch Chi phí Thấp</li>
                    <li>Hỗ trợ Trực tuyến 24/7</li>
                  </ul>
                  <Button type="primary" className="mt-3">
                    Khám phá Tours
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      {/* --- About Features --- */}
      <section className="about-features-area">
        <div className="container">
          <Row gutter={[24, 24]} align="middle">
            {[1, 2].map((i) => (
              <Col key={i} xl={4} md={6}>
                <img
                  src={`/assets/images/about/about-feature${i}.jpg`}
                  alt={`about-${i}`}
                  style={{ width: "100%" }}
                />
              </Col>
            ))}
            <Col xl={16}>
              <div className="about-feature-boxes">
                <div className="feature-item bgc-secondary">
                  <h5>Chúng tôi là công ty đạt giải thưởng</h5>
                  <p>Cam kết sự xuất sắc và đổi mới đã đạt được.</p>
                </div>
                <div className="feature-item bgc-primary mt-3">
                  <h5>5000+ Điểm đến du lịch phổ biến</h5>
                  <p>Chiến lược tiên tiến thúc đẩy thành công du lịch.</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* --- About Us Area --- */}
      <section className="about-us-area" style={{ padding: "70px 0 100px" }}>
        <div className="container">
          <Row align="middle" gutter={48}>
            <Col xl={10}>
              <Title level={2}>
                Du lịch với sự tự tin – Lý do chọn công ty của chúng tôi
              </Title>
              <Paragraph>
                Chúng tôi hợp tác chặt chẽ với khách hàng để cung cấp giải pháp
                du lịch phù hợp...
              </Paragraph>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Title level={4}>1K+</Title>
                  <p>Điểm đến phổ biến</p>
                </Col>
                <Col span={12}>
                  <Title level={4}>8M+</Title>
                  <p>Khách hàng hài lòng</p>
                </Col>
              </Row>
              <Button type="default" className="mt-3">
                Khám phá các điểm đến
              </Button>
            </Col>
            <Col xl={14}>
              <img
                src="/assets/images/about/about-page.jpg"
                alt="About Us"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* --- Team Area --- */}
      <section className="about-team-area pb-70">
        <div className="container">
          <div className="text-center mb-5">
            <Title level={2}>
              Gặp gỡ những hướng dẫn viên du lịch giàu kinh nghiệm của chúng tôi
            </Title>
            <p>
              Website <span className="count-text plus bgc-primary">34500</span>{" "}
              trải nghiệm đáng nhớ
            </p>
          </div>
          <Row justify="center" gutter={[24, 24]}>
            {[
              {
                name: "NGUYEN MINH DIEN",
                role: "Founder",
                img: "/assets/images/team/guide-dien.jpg",
              },
              {
                name: "BAO NGAN",
                role: "Co-founder",
                img: "/assets/images/team/guide-ngan.jpg",
              },
            ].map((guide, idx) => (
              <Col key={idx} xl={4} lg={6} md={8} sm={12}>
                <div className="team-item">
                  <img
                    src={guide.img}
                    alt={guide.name}
                    style={{ width: "100%" }}
                  />
                  <div className="content">
                    <h6>{guide.name}</h6>
                    <span>{guide.role}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* --- Features Area 2 --- */}
      <section className="about-feature-two pt-100 pb-45 bg-black text-white">
        <div className="container">
          <div className="text-center mb-50">
            <Title level={2} style={{ color: "white" }}>
              Làm thế nào để hưởng lợi từ các chuyến du lịch của chúng tôi
            </Title>
            <p>
              Website <span className="count-text plus">34500</span> trải nghiệm
              đáng nhớ
            </p>
          </div>
          <Row gutter={[24, 24]}>
            {features.map((feature, idx) => (
              <Col key={idx} xl={6} md={12}>
                <div className="feature-item text-center">
                  <div className="icon mb-20">{feature.icon}</div>
                  <div className="content">
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* --- Client Logos --- */}
      <div className="client-logo-area mb-100">
        <div className="container text-center">
          <Title level={4}>Chúng tôi được giới thiệu bởi:</Title>
          <Row justify="center" gutter={[24, 24]}>
            {[1, 2, 3, 4, 5].map((num) => (
              <Col key={num} md={4} sm={6} xs={8}>
                <img
                  src={`/assets/images/client-logos/client-logo${num}.png`}
                  alt={`Logo ${num}`}
                  style={{ width: "100%" }}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default AboutPage;
