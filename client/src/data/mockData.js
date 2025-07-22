// src/data/mockData.js
export const tours = [
  {
    tourId: 1,
    title: "Tour Hà Giang 3N2Đ",
    destination: "hg",
    rating: 5,
    images: ["/assets/images/gallery-tours/bien-dao-3n2d-con-dao-5.jpg"],
    time: "3 ngày 2 đêm",
    quantity: 20,
    priceAdult: 2590000,
    description:
      "Khám phá vẻ đẹp hoang sơ của Hà Giang với tour 3 ngày 2 đêm. Tham quan các điểm du lịch nổi tiếng như Đồng Văn, Mèo Vạc, và trải nghiệm văn hóa độc đáo của người dân địa phương.",
  },
  {
    tourId: 2,
    title: "Tour Đà Nẵng 4N3Đ",
    destination: "dn",
    rating: 4,
    images: ["/assets/images/gallery-tours/bien-dao-3n2d-con-dao-4.jpg"],
    time: "4 ngày 3 đêm",
    quantity: 15,
    priceAdult: 3190000,
    description:
      "Thưởng thức vẻ đẹp của Đà Nẵng với tour 4 ngày 3 đêm. Tham quan Bà Nà Hills, Hội An, và các bãi biển tuyệt đẹp. Trải nghiệm ẩm thực phong phú và văn hóa địa phương.",
  },
  {
    tourId: 3,
    title: "Camping Ba Vì 1 ngày",
    destination: "ha",
    rating: 3,
    images: [
      "/assets/images/gallery-tours/mien-trung-4n3d-da-nang-hoi-an-ba-na-hue-2.png",
    ],
    time: "1 ngày",
    quantity: 25,
    priceAdult: 150000,
    description:
      "Trải nghiệm cắm trại tại Ba Vì với tour 1 ngày. Thưởng thức không khí trong lành, tham gia các hoạt động ngoài trời và khám phá thiên nhiên tươi đẹp.",
  },
];

export const services = [
  {
    id: 1,
    title: "Cho thuê lều, bếp, đèn",
    description:
      "Chúng tôi cung cấp các thiết bị cắm trại như lều ngủ, bếp gas mini, đèn pin, đèn cắm trại với giá phải chăng.",
    icon: "fa-campground",
  },
  {
    id: 2,
    title: "Xe đưa đón",
    description:
      "Dịch vụ xe đưa đón tận nơi từ sân bay, khách sạn hoặc địa điểm bạn yêu cầu, với tài xế thân thiện và chuyên nghiệp.",
    icon: "fa-shuttle-van",
  },
  {
    id: 3,
    title: "Tổ chức teambuilding",
    description:
      "Dịch vụ tổ chức các hoạt động teambuilding cho công ty, lớp học hoặc nhóm bạn, bao gồm MC, trò chơi, âm thanh ánh sáng.",
    icon: "fas fa-users",
  },
];
