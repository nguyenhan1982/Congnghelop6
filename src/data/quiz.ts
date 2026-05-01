export interface Question {
  id: number;
  question: string;
  options?: string[];
  answer: string | boolean[];
  type: 'multiple-choice' | 'true-false';
  subQuestions?: string[];
}

export const quizData: Question[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Nguồn điện sinh hoạt của nước ta phổ biến là bao nhiêu?",
    options: ["120V", "320V", "220V", "240V"],
    answer: "220V"
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "Nồi cơm điện biến:",
    options: ["điện năng thành cơ năng", "điện năng thành nhiệt năng", "điện năng thành quang năng", "điện năng thành điện năng"],
    answer: "điện năng thành nhiệt năng"
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Có mấy bóng đèn được đề cập đến trong bài học (Bài 11)?",
    options: ["1", "2", "3", "4"],
    answer: "4"
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Mâm nhiệt có dạng:",
    options: ["hình đĩa", "hình trụ", "hình vuông", "hình chữ nhật"],
    answer: "hình đĩa"
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "Nồi cơm có mấy bộ phận có chức năng bao kín và giữ nhiệt?",
    options: ["2", "3", "4", "5"],
    answer: "2"
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "Trong các bóng đèn sau, bóng đèn nào tiêu tốn điện năng nhiều nhất?",
    options: ["Compact", "Huỳnh quang", "Sợi đốt", "Led"],
    answer: "Sợi đốt"
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "Muốn đồ dùng điện được an toàn và hoạt động bình thường cần chú ý đến:",
    options: ["điện áp", "thể tích", "hiệu suất", "điều kiện"],
    answer: "điện áp"
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: "Ánh sáng của bóng đèn huỳnh quang phụ thuộc vào:",
    options: ["hai điện cực", "bóng đèn", "sợi đốt", "lớp bột huỳnh quang"],
    answer: "lớp bột huỳnh quang"
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "Sợi đốt trong bóng đèn sợi đốt được làm bằng vật liệu gì?",
    options: ["Vonfram", "Nikencrom", "Đồng", "Nhôm"],
    answer: "Vonfram"
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: "Nếu gia đình có 5 người ăn, thì cần chọn nồi cơm có dung tích bao nhiêu?",
    options: ["0.6 lít", "1 lít", "1.8 – 2 lít", "2 – 2.5 lít"],
    answer: "1.8 – 2 lít"
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: "Đặc điểm của bóng đèn huỳnh quang là gì?",
    options: ["Hiệu suất phát quang thấp", "Tuổi thọ thấp", "Tiêu tốn nhiều điện năng", "Có hiện tượng nhấp nháy"],
    answer: "Có hiện tượng nhấp nháy"
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: "Lumen là đơn vị đo:",
    options: ["công suất", "điện áp", "dòng điện", "độ sáng"],
    answer: "độ sáng"
  },
  {
    id: 13,
    type: 'multiple-choice',
    question: "Hình dạng của bóng đèn compact thường là:",
    options: ["hình dài", "hình tròn", "hình chữ U", "hình đa dạng"],
    answer: "hình chữ U"
  },
  {
    id: 14,
    type: 'multiple-choice',
    question: "Ai là người phát minh ra bóng đèn sợi đốt?",
    options: ["Ăngghen", "Newton", "Edison", "Darwin"],
    answer: "Edison"
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: "Bộ phận nào của bóng đèn sợi đốt phát ra ánh sáng?",
    options: ["Đuôi đèn", "Sợi đốt", "Bóng đèn", "Điện cực"],
    answer: "Sợi đốt"
  },
  {
    id: 16,
    type: 'multiple-choice',
    question: "Đại lượng nào thể hiện mức độ tiêu thụ điện năng?",
    options: ["Điện áp", "Công suất", "Hiệu suất", "Điện năng"],
    answer: "Công suất"
  },
  {
    id: 17,
    type: 'multiple-choice',
    question: "Bóng đèn led có thông số sau: 220V - 25W. Hỏi đèn có công suất định mức là bao nhiêu?",
    options: ["220V hoặc 25W", "25W", "220V và 25W", "220V"],
    answer: "25W"
  },
  {
    id: 18,
    type: 'multiple-choice',
    question: "Bóng đèn điện biến điện năng thành:",
    options: ["cơ năng", "nhiệt năng", "quang năng", "điện năng"],
    answer: "quang năng"
  },
  {
    id: 19,
    type: 'true-false',
    question: "Sơ đồ nguyên lí làm việc của nồi cơm điện nào đúng?",
    subQuestions: [
      "a. Nguồn điện -> bộ phận sinh nhiệt -> bộ phận điều khiển -> nồi nấu",
      "b. Nguồn điện -> nồi nấu -> bộ phận sinh nhiệt -> bộ phận điều khiển",
      "c. Nguồn điện -> bộ phận điều khiển -> bộ phận sinh nhiệt -> nồi nấu",
      "d. Nguồn điện -> bộ phận điều khiển -> nồi nấu -> bộ phận sinh nhiệt"
    ],
    answer: [false, false, true, false]
  },
  {
    id: 20,
    type: 'true-false',
    question: "Điện áp định mức là:",
    subQuestions: [
      "a. mức độ tiêu thụ điện năng của đồ dùng điện",
      "b. mức điện áp để đồ dùng điện hoạt động bình thường và an toàn",
      "c. đơn vị là vôn kí hiệu là V",
      "d. sức chứa tối đa mà vật có thể chứa đựng một khối chất khác"
    ],
    answer: [false, true, true, false]
  }
];
