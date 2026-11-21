export type CompanyFact = {
  label: string;
  value: string;
  sourcePages: number[];
};

export type CompanyProfile = {
  name: string;
  legalName: string;
  tagline: string;
  introduction: string[];
  vision: string;
  mission: string;
  values: Array<{ title: string; description: string; sourcePages: number[] }>;
  facts: CompanyFact[];
  highlights: Array<{ label: string; value: string; sourcePages: number[] }>;
  credentials: Array<{ title: string; description: string; sourcePages: number[] }>;
  image: { src: string; alt: string };
  sourcePages: number[];
};

export type CompanyService = {
  id: string;
  kind: 'core' | 'supplementary';
  title: string;
  description: string;
  details: string[];
  brands?: string[];
  sourcePages: number[];
};

export type CompanyProcessStep = {
  title: string;
  description: string;
  details: string[];
  sourcePages: number[];
};

export type CompanyContact = {
  phone: string;
  phoneHref: string;
  secondaryPhone: string;
  secondaryPhoneHref: string;
  email: string;
  addresses: Array<{ label: string; value: string; sourcePages: number[] }>;
  website: string;
  websiteNote: string;
  sourcePages: number[];
};

export const companyProfile: CompanyProfile = {
  name: 'Đăng Hưng Technology',
  legalName: 'Công ty TNHH Công nghệ số Platinum',
  tagline: 'Tận tâm – Chuyên nghiệp – Chính hãng',
  introduction: [
    'Công ty TNHH Công nghệ số Platinum, thương hiệu Đăng Hưng Technology, được thành lập năm 2013 và hoạt động tại Hà Tĩnh. Công ty tư vấn, phân phối và thi công giải pháp công nghệ cho nhà ở, biệt thự, công trình dân dụng và thương mại.',
    'Từ cổng tự động, nhà thông minh, khóa điện tử, chiếu sáng đến âm thanh và an ninh, Đăng Hưng kết nối các hạng mục thành giải pháp phù hợp với kiến trúc và nhu cầu sử dụng. Đội ngũ đồng hành từ khảo sát, tư vấn, lắp đặt đến nghiệm thu, bàn giao và hậu mãi.',
    'Đăng Hưng là chi nhánh phân phối Roger Technology và khóa điện tử Philips tại miền Trung, nhà phân phối Fasla, đối tác chiến lược Homegy; đồng thời cung cấp giải pháp âm thanh Bose và Arylic.',
  ],
  vision:
    'Trở thành đơn vị hàng đầu khu vực miền Trung trong phân phối và thi công công nghệ cho nhà ở, là lựa chọn đầu tiên của khách hàng khi muốn nâng tầm không gian sống thông minh, an toàn và sang trọng.',
  mission:
    'Đưa công nghệ chính hãng, tiêu chuẩn quốc tế đến gần hơn với gia đình Việt. Cung cấp giải pháp đồng bộ “một đầu mối – trọn công trình”, giúp gia chủ tiết kiệm thời gian, chi phí và an tâm sử dụng lâu dài.',
  values: [
    {
      title: 'Chính hãng',
      description: 'Sản phẩm có nguồn gốc rõ ràng, bảo hành theo tiêu chuẩn của hãng.',
      sourcePages: [5],
    },
    {
      title: 'Tận tâm',
      description: 'Lắng nghe nhu cầu, tư vấn đúng và đủ, phù hợp với ngân sách gia chủ.',
      sourcePages: [5],
    },
    {
      title: 'Chuyên nghiệp',
      description: 'Đội ngũ kỹ thuật được đào tạo và thi công theo quy trình.',
      sourcePages: [5],
    },
    {
      title: 'Đồng bộ',
      description: 'Một đầu mối phụ trách nhiều hạng mục để các hệ thống vận hành nhất quán.',
      sourcePages: [5],
    },
    {
      title: 'Bền vững',
      description: 'Hậu mãi dài hạn, đồng hành cùng khách hàng trong vòng đời sản phẩm.',
      sourcePages: [5],
    },
  ],
  facts: [
    { label: 'Tên pháp nhân', value: 'Công ty TNHH Công nghệ số Platinum', sourcePages: [4] },
    { label: 'Thương hiệu', value: 'Đăng Hưng Technology', sourcePages: [3, 4] },
    { label: 'Mã số doanh nghiệp', value: '3001679848', sourcePages: [4, 7] },
    { label: 'Ngày đăng ký lần đầu', value: '16/05/2013', sourcePages: [7] },
    { label: 'Năm thành lập', value: '2013', sourcePages: [3, 4] },
    { label: 'Vốn điều lệ ghi trong hồ sơ', value: '3 tỷ đồng', sourcePages: [7] },
    { label: 'Người đại diện', value: 'Ông Thiều Đăng Hưng', sourcePages: [3, 4] },
  ],
  highlights: [
    { label: 'Kinh nghiệm', value: '13+ năm', sourcePages: [4, 15] },
    { label: 'Thương hiệu chính', value: '05', sourcePages: [4] },
    { label: 'Khách hàng', value: '19', sourcePages: [2] },
    { label: 'Hạng mục đã thi công', value: '86', sourcePages: [2, 15] },
  ],
  credentials: [
    {
      title: 'Đăng ký doanh nghiệp',
      description:
        'Mã số doanh nghiệp 3001679848; đăng ký lần đầu ngày 16/05/2013. Hồ sơ năng lực ghi vốn điều lệ 3 tỷ đồng.',
      sourcePages: [4, 7],
    },
    {
      title: 'Roger Technology · Italy',
      description: 'Chi nhánh phân phối Roger Technology khu vực miền Trung.',
      sourcePages: [3, 7],
    },
    {
      title: 'Philips Door Lock',
      description: 'Nhà phân phối khóa điện tử Philips khu vực miền Trung; triển khai cho nhà ở, căn hộ, khách sạn và dự án.',
      sourcePages: [3, 6, 7],
    },
    {
      title: 'Fasla Lighting',
      description: 'Nhà phân phối đèn chiếu sáng Fasla.',
      sourcePages: [7],
    },
    {
      title: 'Homegy',
      description: 'Đối tác chiến lược về giải pháp nhà thông minh.',
      sourcePages: [3, 7],
    },
  ],
  image: {
    src: '/assets/team-showroom.webp',
    alt: 'Đội ngũ Đăng Hưng Technology tại showroom ở Hà Tĩnh',
  },
  sourcePages: [3, 4, 5, 7, 15],
};

export const companyServices: CompanyService[] = [
  {
    id: 'roger-automatic-gates',
    kind: 'core',
    title: 'Cổng tự động Roger Technology',
    description: 'Tư vấn, cung cấp và lắp đặt hệ thống cổng tự động cho công trình nhà ở và thương mại.',
    details: ['Motor âm sàn', 'Motor tay đòn', 'Motor cổng trượt hoặc cổng lùa', 'Các dòng Brushless và Encoder'],
    brands: ['Roger Technology'],
    sourcePages: [3, 6, 8],
  },
  {
    id: 'homegy-smart-home',
    kind: 'core',
    title: 'Điện thông minh Homegy',
    description: 'Thiết kế, cung cấp và lắp đặt hệ thống smarthome trọn gói.',
    details: ['Công tắc cảm ứng', 'Rèm tự động', 'Kịch bản ngữ cảnh', 'Điều khiển bằng giọng nói'],
    brands: ['Homegy'],
    sourcePages: [6, 8],
  },
  {
    id: 'philips-electronic-locks',
    kind: 'core',
    title: 'Khóa điện tử Philips',
    description: 'Phân phối và thi công khóa điện tử cho nhà ở, căn hộ, khách sạn và dự án.',
    details: ['Mở khóa bằng vân tay, mật mã và thẻ', 'Mở khóa qua ứng dụng', 'Két sắt an toàn', 'Giải pháp khóa cho khách sạn và căn hộ'],
    brands: ['Philips Door Lock'],
    sourcePages: [6, 8],
  },
  {
    id: 'fasla-lighting',
    kind: 'core',
    title: 'Chiếu sáng Fasla',
    description: 'Giải pháp đèn dân dụng, nội thất, sân vườn và cảnh quan.',
    details: ['Đèn âm trần và ray nam châm', 'Đèn dimming nội thất', 'Đèn sân vườn và cảnh quan', 'Đèn dẫn lối cầu thang'],
    brands: ['Fasla Lighting'],
    sourcePages: [6, 8],
  },
  {
    id: 'security-cameras',
    kind: 'core',
    title: 'Camera an ninh',
    description: 'Thi công, bảo trì và triển khai giải pháp giám sát tổng thể.',
    details: ['Khảo sát vị trí lắp đặt', 'Thi công hệ thống', 'Bảo trì và hỗ trợ vận hành'],
    sourcePages: [6],
  },
  {
    id: 'smart-stair-lighting',
    kind: 'supplementary',
    title: 'LED cầu thang thông minh',
    description: 'Hệ đèn cầu thang sử dụng cảm biến bước chân và hiệu ứng sáng chạy theo.',
    details: ['Cảm biến bước chân', 'Hiệu ứng đèn chạy theo từng bước'],
    sourcePages: [6],
  },
  {
    id: 'multiroom-audio',
    kind: 'supplementary',
    title: 'Âm thanh đa vùng',
    description: 'Giải pháp multi-room audio cho phòng khách, phòng ngủ, sân vườn và không gian giải trí gia đình.',
    details: ['Loa âm trần và âm tường', 'Loa sân vườn', 'Multi-room audio', 'Rạp hát gia đình'],
    brands: ['Bose', 'Arylic'],
    sourcePages: [6, 8],
  },
  {
    id: 'automated-gates-doors-curtains',
    kind: 'supplementary',
    title: 'Cổng, cửa và rèm tự động',
    description: 'Điều khiển thiết bị từ xa, hẹn giờ hoặc tích hợp với nhà thông minh.',
    details: ['Điều khiển từ xa', 'Thiết lập lịch và hẹn giờ', 'Kết nối kịch bản nhà thông minh'],
    sourcePages: [6],
  },
  {
    id: 'video-doorbells',
    kind: 'supplementary',
    title: 'Chuông hình và chuông báo khách',
    description: 'Quan sát, đàm thoại và mở cửa từ xa.',
    details: ['Quan sát khách tại cửa', 'Đàm thoại từ xa', 'Điều khiển mở cửa'],
    sourcePages: [6],
  },
  {
    id: 'custom-integrated-solutions',
    kind: 'supplementary',
    title: 'Giải pháp tùy chỉnh theo công trình',
    description: 'Thiết kế riêng theo kiến trúc và ngân sách của từng công trình.',
    details: ['Khảo sát nhu cầu và hiện trạng', 'Phối hợp nhiều hạng mục công nghệ', 'Đề xuất cấu hình phù hợp kiến trúc và ngân sách'],
    sourcePages: [6, 15],
  },
];

export const companyProcess: CompanyProcessStep[] = [
  {
    title: 'Tiếp nhận và khảo sát',
    description: 'Lắng nghe nhu cầu và khảo sát hiện trạng công trình miễn phí.',
    details: ['Ghi nhận yêu cầu sử dụng', 'Khảo sát hiện trạng và các hạng mục cần kết nối'],
    sourcePages: [14],
  },
  {
    title: 'Tư vấn và thiết kế giải pháp',
    description: 'Đề xuất giải pháp đồng bộ và bố trí thiết bị phù hợp với kiến trúc.',
    details: ['Phối hợp các hạng mục cần thiết', 'Chọn vị trí và phương án thiết bị'],
    sourcePages: [14],
  },
  {
    title: 'Báo giá và hợp đồng',
    description: 'Lập báo giá chi tiết, minh bạch theo từng hạng mục và thống nhất bằng hợp đồng.',
    details: ['Làm rõ phạm vi công việc', 'Thống nhất chi phí và điều kiện triển khai'],
    sourcePages: [14],
  },
  {
    title: 'Thi công và lắp đặt',
    description: 'Đội ngũ kỹ thuật chuyên trách thi công đúng tiến độ, gọn gàng và an toàn.',
    details: ['Lắp đặt theo phương án đã thống nhất', 'Phối hợp với các hạng mục công trình'],
    sourcePages: [14],
  },
  {
    title: 'Nghiệm thu và bàn giao',
    description: 'Chạy thử, nghiệm thu cùng gia chủ và hướng dẫn sử dụng chi tiết.',
    details: ['Kiểm tra hoạt động của thiết bị', 'Hướng dẫn sử dụng sau khi bàn giao'],
    sourcePages: [14],
  },
  {
    title: 'Bảo hành và bảo trì',
    description: 'Bảo hành chính hãng, hỗ trợ kỹ thuật và bảo trì định kỳ.',
    details: ['Hỗ trợ kỹ thuật nhanh', 'Theo dõi và bảo trì trong quá trình sử dụng'],
    sourcePages: [14],
  },
];

export const companyCommitments: Array<{ title: string; description: string; sourcePages: number[] }> = [
  {
    title: 'Sản phẩm chính hãng',
    description: '100% sản phẩm có nguồn gốc rõ ràng, phân phối trực tiếp và bảo hành theo tiêu chuẩn hãng.',
    sourcePages: [5, 14],
  },
  {
    title: 'Giá cạnh tranh',
    description: 'Áp dụng chính sách giá nhà phân phối.',
    sourcePages: [14],
  },
  {
    title: 'Đúng tiến độ',
    description: 'Thống nhất và cam kết thời gian thi công.',
    sourcePages: [14],
  },
  {
    title: 'Hậu mãi tận tâm',
    description: 'Hỗ trợ nhanh và đồng hành lâu dài.',
    sourcePages: [14],
  },
];

export const companyDifferentiators: Array<{ title: string; description: string; sourcePages: number[] }> = [
  {
    title: 'Mối quan hệ phân phối và đối tác',
    description:
      'Chi nhánh phân phối Roger Technology và khóa điện tử Philips tại miền Trung; nhà phân phối Fasla và đối tác chiến lược Homegy.',
    sourcePages: [7, 15],
  },
  {
    title: 'Kinh nghiệm tại miền Trung',
    description: 'Hoạt động từ năm 2013, am hiểu đặc điểm khí hậu, kiến trúc và nhu cầu gia chủ trong khu vực.',
    sourcePages: [4, 15],
  },
  {
    title: 'Giải pháp tổng thể',
    description: 'Kết nối cổng, khóa, chiếu sáng, điện thông minh, rèm, âm thanh và camera qua một đầu mối.',
    sourcePages: [6, 15],
  },
  {
    title: 'Showroom trải nghiệm',
    description: 'Trải nghiệm thực tế Roger, Fasla, Homegy và Philips tại showroom trước khi lựa chọn.',
    sourcePages: [15],
  },
  {
    title: 'Đội ngũ kỹ thuật riêng',
    description: 'Nhân sự kỹ thuật chuyên trách được hãng đào tạo; thi công chú trọng thẩm mỹ và tiêu chuẩn.',
    sourcePages: [15],
  },
  {
    title: 'Khách hàng và hạng mục',
    description: 'Hồ sơ ghi 19 khách hàng và 86 hạng mục đã thi công.',
    sourcePages: [2, 15],
  },
];

export const companyContact: CompanyContact = {
  phone: '081.666.3666',
  phoneHref: 'tel:0816663666',
  secondaryPhone: '0888.795.558',
  secondaryPhoneHref: 'tel:0888795558',
  email: 'cns.platinum@gmail.com',
  addresses: [
    {
      label: 'Showroom và văn phòng',
      value: 'Số 57 đường Lê Hồng Phong, phường Thành Sen, tỉnh Hà Tĩnh',
      sourcePages: [4, 35],
    },
  ],
  website: 'https://www.danghung.vn',
  websiteNote: 'Được liệt kê trong hồ sơ năng lực 2026; tình trạng hiện hành chưa được xác minh.',
  sourcePages: [4, 35],
};

// Editorial cautions for copy and publishing; these are not customer-facing claims.
export const profileEditorialNotes: Array<{ note: string; sourcePages: number[] }> = [
  {
    note:
      'Tách tên pháp nhân Công ty TNHH Công nghệ số Platinum khỏi thương hiệu Đăng Hưng Technology. Hồ sơ ghi website danghung.vn nhưng chưa xác minh trang hiện hành.',
    sourcePages: [4, 35],
  },
  {
    note:
      'Hồ sơ gọi 05 thương hiệu là nhóm chính, nhưng nêu vai trò riêng: Roger và Philips là chi nhánh phân phối khu vực miền Trung, Fasla là nhà phân phối, Homegy là đối tác chiến lược; Bose được trình bày là giải pháp âm thanh. Không mô tả cả năm là nhà phân phối.',
    sourcePages: [4, 7, 8],
  },
  {
    note:
      'Mã số doanh nghiệp, ngày đăng ký và vốn điều lệ được chép theo hồ sơ năng lực; nên đối chiếu lại nguồn đăng ký hiện hành trước khi dùng làm xác nhận pháp lý.',
    sourcePages: [7],
  },
  {
    note:
      'Con số 19 khách hàng và 86 hạng mục là số liệu trong hồ sơ năng lực, không xác định thời gian cập nhật từng công trình.',
    sourcePages: [2, 15],
  },
];
