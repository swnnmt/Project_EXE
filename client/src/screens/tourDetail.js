import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./TourDetail.css";
import BannerHome from "../components/BannerHome";
const TourDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tour = location.state?.tour;

  if (!tour) {
    return (
      <div className="tour-detail-container">
        <p>
          Không tìm thấy thông tin chi tiết của tour. Hãy truy cập từ danh sách
          tour.
        </p>
        <button onClick={() => navigate(-1)} className="back-button">
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <>
      <BannerHome title="Chi tiết Tour" />

      <div className="tour-detail-container">
        <div className="tour-detail-card">
          <div className="tour-image-section">
            <img src={tour.images[0]} alt={tour.title} className="tour-image" />
          </div>

          <div className="tour-info-section">
            <h2 className="tour-title">{tour.title}</h2>

            <div className="tour-info">
              <p>
                <strong>📍 Địa điểm:</strong> {tour.destination}
              </p>
              <p>
                <strong>🕒 Thời gian:</strong> {tour.time}
              </p>
              <p>
                <strong>👥 Số lượng:</strong> {tour.quantity} người
              </p>
              <p>
                <strong>💰 Giá:</strong>{" "}
                {tour.priceAdult.toLocaleString("vi-VN")} VND / người
              </p>
              <p>
                <strong>⭐ Đánh giá:</strong> {tour.rating} / 5
              </p>
            </div>

            <button className="book-button">Đặt ngay</button>
          </div>
        </div>

        <div className="tour-description">
          <h3>Mô tả Tour</h3>
          <p>{tour.description || "Chưa có mô tả chi tiết cho tour này."}</p>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
