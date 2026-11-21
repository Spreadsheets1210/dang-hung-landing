export type Project = {
  id: string;
  name: string;
  location?: string;
  type?: string;
  summary?: string;
  items: string[];
  images: { src: string; alt: string }[];
  page: number;
};

export const projects: Project[] = [
  {
    "id": "dam-vinh-hung",
    "name": "DỰ ÁN NHÀ CA SĨ ĐÀM VĨNH HƯNG",
    "location": "TP. Hồ Chí Minh",
    "items": [
      "Giải pháp đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)"
    ],
    "images": [
      {
        "src": "/assets/projects/dam-vinh-hung-01.webp",
        "alt": "DỰ ÁN NHÀ CA SĨ ĐÀM VĨNH HƯNG — ảnh công trình 1, trang 16"
      },
      {
        "src": "/assets/projects/dam-vinh-hung-02.webp",
        "alt": "DỰ ÁN NHÀ CA SĨ ĐÀM VĨNH HƯNG — ảnh công trình 2, trang 16"
      },
      {
        "src": "/assets/projects/dam-vinh-hung-03.webp",
        "alt": "DỰ ÁN NHÀ CA SĨ ĐÀM VĨNH HƯNG — ảnh công trình 3, trang 16"
      }
    ],
    "page": 16
  },
  {
    "id": "anh-chien",
    "name": "DỰ ÁN NHÀ ANH CHIẾN",
    "location": "Khu đô thị Hà Mỹ Hưng",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Khóa điện tử (Philips)",
      "Đèn Dimming chiếu sáng nội thất cao cấp (Fasla)",
      "Đèn dẫn lối cầu thang, đèn sân vườn (Fasla)",
      "Giải pháp điện thông minh (Homegy)",
      "Hệ thống rèm tự động (Homegy)",
      "Camera an ninh (Hikvision)",
      "LED thông minh âm trần (Chiếu sáng LED)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-chien-01.webp",
        "alt": "DỰ ÁN NHÀ ANH CHIẾN — ảnh công trình 1, trang 17"
      },
      {
        "src": "/assets/projects/anh-chien-02.webp",
        "alt": "DỰ ÁN NHÀ ANH CHIẾN — ảnh công trình 2, trang 17"
      },
      {
        "src": "/assets/projects/anh-chien-03.webp",
        "alt": "DỰ ÁN NHÀ ANH CHIẾN — ảnh công trình 3, trang 17"
      },
      {
        "src": "/assets/projects/anh-chien-04.webp",
        "alt": "DỰ ÁN NHÀ ANH CHIẾN — ảnh công trình 4, trang 17"
      },
      {
        "src": "/assets/projects/anh-chien-05.webp",
        "alt": "DỰ ÁN NHÀ ANH CHIẾN — ảnh công trình 5, trang 17"
      }
    ],
    "page": 17
  },
  {
    "id": "chi-thuan",
    "name": "DỰ ÁN BIỆT THỰ CHỊ THUẬN",
    "location": "Khu Vincom",
    "items": [
      "Cổng tự động trượt (Roger Technology)",
      "Khóa điện tử HEXA (Philips)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "Giải pháp điện thông minh (Homegy)",
      "Hệ thống rèm tự động (Homegy)",
      "Âm thanh đa vùng (BOSE · ARYLIC)",
      "Camera an ninh (Hikvision)",
      "LED thông minh (cầu thang, âm trần, nội thất) (Chiếu sáng LED)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)"
    ],
    "images": [
      {
        "src": "/assets/projects/chi-thuan-01.webp",
        "alt": "DỰ ÁN BIỆT THỰ CHỊ THUẬN — ảnh công trình 1, trang 18"
      },
      {
        "src": "/assets/projects/chi-thuan-02.webp",
        "alt": "DỰ ÁN BIỆT THỰ CHỊ THUẬN — ảnh công trình 2, trang 18"
      },
      {
        "src": "/assets/projects/chi-thuan-03.webp",
        "alt": "DỰ ÁN BIỆT THỰ CHỊ THUẬN — ảnh công trình 3, trang 18"
      },
      {
        "src": "/assets/projects/chi-thuan-04.webp",
        "alt": "DỰ ÁN BIỆT THỰ CHỊ THUẬN — ảnh công trình 4, trang 18"
      },
      {
        "src": "/assets/projects/chi-thuan-05.webp",
        "alt": "DỰ ÁN BIỆT THỰ CHỊ THUẬN — ảnh công trình 5, trang 18"
      },
      {
        "src": "/assets/projects/chi-thuan-06.webp",
        "alt": "DỰ ÁN BIỆT THỰ CHỊ THUẬN — ảnh công trình 6, trang 18"
      },
      {
        "src": "/assets/projects/chi-thuan-07.webp",
        "alt": "DỰ ÁN BIỆT THỰ CHỊ THUẬN — ảnh công trình 7, trang 18"
      }
    ],
    "page": 18
  },
  {
    "id": "anh-duc-chi-huong",
    "name": "DỰ ÁN NHÀ ANH ĐỨC – CHỊ HƯƠNG",
    "location": "Khu Hà Mỹ Hưng",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Khóa điện tử (Philips)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED thông minh (cầu thang, âm trần, nội thất) (Chiếu sáng LED)",
      "Két sắt an toàn"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-duc-chi-huong-01.webp",
        "alt": "DỰ ÁN NHÀ ANH ĐỨC – CHỊ HƯƠNG — ảnh công trình 1, trang 19"
      },
      {
        "src": "/assets/projects/anh-duc-chi-huong-02.webp",
        "alt": "DỰ ÁN NHÀ ANH ĐỨC – CHỊ HƯƠNG — ảnh công trình 2, trang 19"
      },
      {
        "src": "/assets/projects/anh-duc-chi-huong-03.webp",
        "alt": "DỰ ÁN NHÀ ANH ĐỨC – CHỊ HƯƠNG — ảnh công trình 3, trang 19"
      },
      {
        "src": "/assets/projects/anh-duc-chi-huong-04.webp",
        "alt": "DỰ ÁN NHÀ ANH ĐỨC – CHỊ HƯƠNG — ảnh công trình 4, trang 19"
      },
      {
        "src": "/assets/projects/anh-duc-chi-huong-05.webp",
        "alt": "DỰ ÁN NHÀ ANH ĐỨC – CHỊ HƯƠNG — ảnh công trình 5, trang 19"
      },
      {
        "src": "/assets/projects/anh-duc-chi-huong-06.webp",
        "alt": "DỰ ÁN NHÀ ANH ĐỨC – CHỊ HƯƠNG — ảnh công trình 6, trang 19"
      },
      {
        "src": "/assets/projects/anh-duc-chi-huong-07.webp",
        "alt": "DỰ ÁN NHÀ ANH ĐỨC – CHỊ HƯƠNG — ảnh công trình 7, trang 19"
      }
    ],
    "page": 19
  },
  {
    "id": "ho-thanh",
    "name": "DỰ ÁN NHÀ ANH HỒ THÀNH",
    "location": "Đường Nguyễn Xí",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)",
      "Giải pháp nhà thông minh (Homegy)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)",
      "Khóa điện tử (Philips)",
      "Đèn trang trí"
    ],
    "images": [
      {
        "src": "/assets/projects/ho-thanh-01.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒ THÀNH — ảnh công trình 1, trang 20"
      },
      {
        "src": "/assets/projects/ho-thanh-02.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒ THÀNH — ảnh công trình 2, trang 20"
      },
      {
        "src": "/assets/projects/ho-thanh-03.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒ THÀNH — ảnh công trình 3, trang 20"
      },
      {
        "src": "/assets/projects/ho-thanh-04.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒ THÀNH — ảnh công trình 4, trang 20"
      },
      {
        "src": "/assets/projects/ho-thanh-05.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒ THÀNH — ảnh công trình 5, trang 20"
      },
      {
        "src": "/assets/projects/ho-thanh-06.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒ THÀNH — ảnh công trình 6, trang 20"
      }
    ],
    "page": 20
  },
  {
    "id": "anh-dieu",
    "name": "DỰ ÁN NHÀ ANH DIỆU",
    "location": "Đường Lê Văn Huân",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Khóa điện tử (Philips)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)",
      "Đèn trang trí",
      "Camera giám sát (IMOU)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-dieu-01.webp",
        "alt": "DỰ ÁN NHÀ ANH DIỆU — ảnh công trình 1, trang 21"
      },
      {
        "src": "/assets/projects/anh-dieu-02.webp",
        "alt": "DỰ ÁN NHÀ ANH DIỆU — ảnh công trình 2, trang 21"
      },
      {
        "src": "/assets/projects/anh-dieu-03.webp",
        "alt": "DỰ ÁN NHÀ ANH DIỆU — ảnh công trình 3, trang 21"
      },
      {
        "src": "/assets/projects/anh-dieu-04.webp",
        "alt": "DỰ ÁN NHÀ ANH DIỆU — ảnh công trình 4, trang 21"
      },
      {
        "src": "/assets/projects/anh-dieu-05.webp",
        "alt": "DỰ ÁN NHÀ ANH DIỆU — ảnh công trình 5, trang 21"
      }
    ],
    "page": 21
  },
  {
    "id": "bac-binh",
    "name": "DỰ ÁN NHÀ BÁC BÌNH",
    "location": "Hồ Bảy Mậu",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)",
      "Đèn trang trí",
      "Giải pháp nhà thông minh (Homegy)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)"
    ],
    "images": [
      {
        "src": "/assets/projects/bac-binh-01.webp",
        "alt": "DỰ ÁN NHÀ BÁC BÌNH — ảnh công trình 1, trang 22"
      },
      {
        "src": "/assets/projects/bac-binh-02.webp",
        "alt": "DỰ ÁN NHÀ BÁC BÌNH — ảnh công trình 2, trang 22"
      },
      {
        "src": "/assets/projects/bac-binh-03.webp",
        "alt": "DỰ ÁN NHÀ BÁC BÌNH — ảnh công trình 3, trang 22"
      },
      {
        "src": "/assets/projects/bac-binh-04.webp",
        "alt": "DỰ ÁN NHÀ BÁC BÌNH — ảnh công trình 4, trang 22"
      },
      {
        "src": "/assets/projects/bac-binh-05.webp",
        "alt": "DỰ ÁN NHÀ BÁC BÌNH — ảnh công trình 5, trang 22"
      },
      {
        "src": "/assets/projects/bac-binh-06.webp",
        "alt": "DỰ ÁN NHÀ BÁC BÌNH — ảnh công trình 6, trang 22"
      },
      {
        "src": "/assets/projects/bac-binh-07.webp",
        "alt": "DỰ ÁN NHÀ BÁC BÌNH — ảnh công trình 7, trang 22"
      },
      {
        "src": "/assets/projects/bac-binh-08.webp",
        "alt": "DỰ ÁN NHÀ BÁC BÌNH — ảnh công trình 8, trang 22"
      }
    ],
    "page": 22
  },
  {
    "id": "chi-tam",
    "name": "DỰ ÁN NHÀ CHỊ TÂM",
    "location": "Đường Trung Tiết",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Khóa điện tử (Philips)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)",
      "Đèn chùm trang trí thông tầng"
    ],
    "images": [
      {
        "src": "/assets/projects/chi-tam-01.webp",
        "alt": "DỰ ÁN NHÀ CHỊ TÂM — ảnh công trình 1, trang 23"
      },
      {
        "src": "/assets/projects/chi-tam-02.webp",
        "alt": "DỰ ÁN NHÀ CHỊ TÂM — ảnh công trình 2, trang 23"
      },
      {
        "src": "/assets/projects/chi-tam-03.webp",
        "alt": "DỰ ÁN NHÀ CHỊ TÂM — ảnh công trình 3, trang 23"
      },
      {
        "src": "/assets/projects/chi-tam-04.webp",
        "alt": "DỰ ÁN NHÀ CHỊ TÂM — ảnh công trình 4, trang 23"
      },
      {
        "src": "/assets/projects/chi-tam-05.webp",
        "alt": "DỰ ÁN NHÀ CHỊ TÂM — ảnh công trình 5, trang 23"
      }
    ],
    "page": 23
  },
  {
    "id": "anh-quan",
    "name": "DỰ ÁN NHÀ ANH QUÂN",
    "location": "Đường Nguyễn Thiếp",
    "summary": "Chủ khách sạn Đại Bàng",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Khóa điện tử (Philips)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED thông minh (cầu thang, âm trần, nội thất) (Chiếu sáng LED)",
      "Âm thanh đa vùng (BOSE · ARYLIC)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-quan-01.webp",
        "alt": "DỰ ÁN NHÀ ANH QUÂN — ảnh công trình 1, trang 24"
      },
      {
        "src": "/assets/projects/anh-quan-02.webp",
        "alt": "DỰ ÁN NHÀ ANH QUÂN — ảnh công trình 2, trang 24"
      },
      {
        "src": "/assets/projects/anh-quan-03.webp",
        "alt": "DỰ ÁN NHÀ ANH QUÂN — ảnh công trình 3, trang 24"
      },
      {
        "src": "/assets/projects/anh-quan-04.webp",
        "alt": "DỰ ÁN NHÀ ANH QUÂN — ảnh công trình 4, trang 24"
      }
    ],
    "page": 24
  },
  {
    "id": "anh-phu-lan-anh",
    "name": "DỰ ÁN NHÀ ANH PHÚ LAN ANH",
    "items": [
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "Giải pháp nhà thông minh (Homegy)",
      "Âm thanh đa vùng (BOSE · ARYLIC)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-phu-lan-anh-01.webp",
        "alt": "DỰ ÁN NHÀ ANH PHÚ LAN ANH — ảnh công trình 1, trang 25"
      },
      {
        "src": "/assets/projects/anh-phu-lan-anh-02.webp",
        "alt": "DỰ ÁN NHÀ ANH PHÚ LAN ANH — ảnh công trình 2, trang 25"
      }
    ],
    "page": 25
  },
  {
    "id": "anh-nam-chi-huong",
    "name": "DỰ ÁN NHÀ ANH NAM – CHỊ HƯƠNG",
    "location": "Khu Vincom",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)",
      "Giải pháp nhà thông minh (Homegy)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-nam-chi-huong-01.webp",
        "alt": "DỰ ÁN NHÀ ANH NAM – CHỊ HƯƠNG — ảnh công trình 1, trang 26"
      },
      {
        "src": "/assets/projects/anh-nam-chi-huong-02.webp",
        "alt": "DỰ ÁN NHÀ ANH NAM – CHỊ HƯƠNG — ảnh công trình 2, trang 26"
      }
    ],
    "page": 26
  },
  {
    "id": "anh-nam",
    "name": "DỰ ÁN NHÀ ANH NAM",
    "location": "Khu Sông Đà",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)",
      "Giải pháp nhà thông minh (Homegy)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-nam-01.webp",
        "alt": "DỰ ÁN NHÀ ANH NAM — ảnh công trình 1, trang 27"
      },
      {
        "src": "/assets/projects/anh-nam-02.webp",
        "alt": "DỰ ÁN NHÀ ANH NAM — ảnh công trình 2, trang 27"
      },
      {
        "src": "/assets/projects/anh-nam-03.webp",
        "alt": "DỰ ÁN NHÀ ANH NAM — ảnh công trình 3, trang 27"
      },
      {
        "src": "/assets/projects/anh-nam-04.webp",
        "alt": "DỰ ÁN NHÀ ANH NAM — ảnh công trình 4, trang 27"
      },
      {
        "src": "/assets/projects/anh-nam-05.webp",
        "alt": "DỰ ÁN NHÀ ANH NAM — ảnh công trình 5, trang 27"
      },
      {
        "src": "/assets/projects/anh-nam-06.webp",
        "alt": "DỰ ÁN NHÀ ANH NAM — ảnh công trình 6, trang 27"
      }
    ],
    "page": 27
  },
  {
    "id": "anh-hong",
    "name": "DỰ ÁN NHÀ ANH HỒNG",
    "location": "Thạch Kênh",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "Giải pháp nhà thông minh (Homegy)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-hong-01.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒNG — ảnh công trình 1, trang 28"
      },
      {
        "src": "/assets/projects/anh-hong-02.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒNG — ảnh công trình 2, trang 28"
      },
      {
        "src": "/assets/projects/anh-hong-03.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒNG — ảnh công trình 3, trang 28"
      },
      {
        "src": "/assets/projects/anh-hong-04.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒNG — ảnh công trình 4, trang 28"
      },
      {
        "src": "/assets/projects/anh-hong-05.webp",
        "alt": "DỰ ÁN NHÀ ANH HỒNG — ảnh công trình 5, trang 28"
      }
    ],
    "page": 28
  },
  {
    "id": "anh-tuan-chi-thom",
    "name": "DỰ ÁN NHÀ ANH TUẤN – CHỊ THƠM",
    "location": "Đường Nguyễn Tuấn Thiện",
    "items": [
      "Cổng tự động trượt (Roger Technology)",
      "Khóa điện tử HEXA (Philips)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED thông minh (cầu thang, âm trần, nội thất) (Chiếu sáng LED)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-tuan-chi-thom-01.webp",
        "alt": "DỰ ÁN NHÀ ANH TUẤN – CHỊ THƠM — ảnh công trình 1, trang 29"
      },
      {
        "src": "/assets/projects/anh-tuan-chi-thom-02.webp",
        "alt": "DỰ ÁN NHÀ ANH TUẤN – CHỊ THƠM — ảnh công trình 2, trang 29"
      },
      {
        "src": "/assets/projects/anh-tuan-chi-thom-03.webp",
        "alt": "DỰ ÁN NHÀ ANH TUẤN – CHỊ THƠM — ảnh công trình 3, trang 29"
      },
      {
        "src": "/assets/projects/anh-tuan-chi-thom-04.webp",
        "alt": "DỰ ÁN NHÀ ANH TUẤN – CHỊ THƠM — ảnh công trình 4, trang 29"
      },
      {
        "src": "/assets/projects/anh-tuan-chi-thom-05.webp",
        "alt": "DỰ ÁN NHÀ ANH TUẤN – CHỊ THƠM — ảnh công trình 5, trang 29"
      },
      {
        "src": "/assets/projects/anh-tuan-chi-thom-06.webp",
        "alt": "DỰ ÁN NHÀ ANH TUẤN – CHỊ THƠM — ảnh công trình 6, trang 29"
      },
      {
        "src": "/assets/projects/anh-tuan-chi-thom-07.webp",
        "alt": "DỰ ÁN NHÀ ANH TUẤN – CHỊ THƠM — ảnh công trình 7, trang 29"
      }
    ],
    "page": 29
  },
  {
    "id": "chu-vinh-kim-hoa",
    "name": "DỰ ÁN NHÀ CHÚ VINH KIM HOA",
    "location": "Đường Lý Tự Trọng",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)",
      "Đèn trang trí"
    ],
    "images": [
      {
        "src": "/assets/projects/chu-vinh-kim-hoa-01.webp",
        "alt": "DỰ ÁN NHÀ CHÚ VINH KIM HOA — ảnh công trình 1, trang 30"
      },
      {
        "src": "/assets/projects/chu-vinh-kim-hoa-02.webp",
        "alt": "DỰ ÁN NHÀ CHÚ VINH KIM HOA — ảnh công trình 2, trang 30"
      },
      {
        "src": "/assets/projects/chu-vinh-kim-hoa-03.webp",
        "alt": "DỰ ÁN NHÀ CHÚ VINH KIM HOA — ảnh công trình 3, trang 30"
      },
      {
        "src": "/assets/projects/chu-vinh-kim-hoa-04.webp",
        "alt": "DỰ ÁN NHÀ CHÚ VINH KIM HOA — ảnh công trình 4, trang 30"
      }
    ],
    "page": 30
  },
  {
    "id": "anh-bau-ha",
    "name": "DỰ ÁN NHÀ ANH BÁU HÀ",
    "location": "Khu iSchool",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-bau-ha-01.webp",
        "alt": "DỰ ÁN NHÀ ANH BÁU HÀ — ảnh công trình 1, trang 31"
      },
      {
        "src": "/assets/projects/anh-bau-ha-02.webp",
        "alt": "DỰ ÁN NHÀ ANH BÁU HÀ — ảnh công trình 2, trang 31"
      },
      {
        "src": "/assets/projects/anh-bau-ha-03.webp",
        "alt": "DỰ ÁN NHÀ ANH BÁU HÀ — ảnh công trình 3, trang 31"
      },
      {
        "src": "/assets/projects/anh-bau-ha-04.webp",
        "alt": "DỰ ÁN NHÀ ANH BÁU HÀ — ảnh công trình 4, trang 31"
      },
      {
        "src": "/assets/projects/anh-bau-ha-05.webp",
        "alt": "DỰ ÁN NHÀ ANH BÁU HÀ — ảnh công trình 5, trang 31"
      },
      {
        "src": "/assets/projects/anh-bau-ha-06.webp",
        "alt": "DỰ ÁN NHÀ ANH BÁU HÀ — ảnh công trình 6, trang 31"
      }
    ],
    "page": 31
  },
  {
    "id": "anh-hung",
    "name": "DỰ ÁN NHÀ ANH HÙNG",
    "location": "Thạch Hà",
    "items": [
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-hung-01.webp",
        "alt": "DỰ ÁN NHÀ ANH HÙNG — ảnh công trình 1, trang 32"
      },
      {
        "src": "/assets/projects/anh-hung-02.webp",
        "alt": "DỰ ÁN NHÀ ANH HÙNG — ảnh công trình 2, trang 32"
      },
      {
        "src": "/assets/projects/anh-hung-03.webp",
        "alt": "DỰ ÁN NHÀ ANH HÙNG — ảnh công trình 3, trang 32"
      },
      {
        "src": "/assets/projects/anh-hung-04.webp",
        "alt": "DỰ ÁN NHÀ ANH HÙNG — ảnh công trình 4, trang 32"
      }
    ],
    "page": 32
  },
  {
    "id": "anh-khoa",
    "name": "DỰ ÁN NHÀ ANH KHOA",
    "location": "Đường Hà Huy Tập",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn chiếu sáng nội, ngoại thất, sân vườn (Fasla)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-khoa-01.webp",
        "alt": "DỰ ÁN NHÀ ANH KHOA — ảnh công trình 1, trang 33"
      },
      {
        "src": "/assets/projects/anh-khoa-02.webp",
        "alt": "DỰ ÁN NHÀ ANH KHOA — ảnh công trình 2, trang 33"
      },
      {
        "src": "/assets/projects/anh-khoa-03.webp",
        "alt": "DỰ ÁN NHÀ ANH KHOA — ảnh công trình 3, trang 33"
      }
    ],
    "page": 33
  },
  {
    "id": "anh-hoa-chi-hai",
    "name": "DỰ ÁN NHÀ ANH HÓA – CHỊ HẢI",
    "location": "Đường Lê Văn Huân",
    "items": [
      "Cổng tự động âm sàn (Roger Technology)",
      "Đèn Dimming chiếu sáng nội thất cao cấp (Fasla)",
      "LED trang trí âm trần (Chiếu sáng LED)",
      "Giải pháp nhà thông minh (Homegy)",
      "Điều khiển giọng nói (điều hòa, âm thanh, ánh sáng) (Voice control)",
      "Âm thanh đa vùng (BOSE · ARYLIC)"
    ],
    "images": [
      {
        "src": "/assets/projects/anh-hoa-chi-hai-02.webp",
        "alt": "DỰ ÁN NHÀ ANH HÓA – CHỊ HẢI — ảnh công trình 2, trang 34"
      }
    ],
    "page": 34
  }
];

