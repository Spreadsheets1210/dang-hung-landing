export type BrandId = 'roger' | 'fasla' | 'homegy' | 'philips' | 'am-thanh';

export type Brand = {
  id: BrandId;
  name: string;
  group: string;
  description: string;
  logo?: string;
  hero: string;
  heroPosition?: string;
};

export type Product = {
  id: string;
  brandId: BrandId;
  name: string;
  category: string;
  image?: string;
  imageAlt?: string;
  imageNote?: string;
  description?: string;
  specs?: Array<[string, string]>;
  gallery?: Array<{ src: string; alt: string }>;
};

// Source: HoSoNangLuc_Platinum_v3.pdf, pp. 7, 9–13. Brand cover images depict projects.
const catalog = '/assets/catalog/';

// Brand photos have been matched to the model or series in the supplier sources
// recorded in public/assets/catalog/provenance.json.
const verifiedProductPhotos = new Set([
  'roger-r21-351',
  'roger-br21-351',
  'roger-br21-351-hs',
  'roger-br21-362',
  'roger-monos4',
  'roger-smarty5',
  'roger-smarty7',
  'roger-r20',
  'roger-be20',
  'roger-h30',
  'roger-bh30',
  'roger-bm30',
  'roger-r30',
  'roger-g30',
  'philips-ddl609-5hs',
  'philips-ddl615-5hbs',
  'philips-ddl801-5hbs',
  'philips-ddl709-7hws',
  'philips-ddl720-fvp',
  'philips-ddl720-mvp',
  'philips-ddl611s-5hbs',
  'philips-ddl610-5hbs',
  'philips-ddl902-mvp-11hws',
  'philips-7300',
  'philips-alpha',
]);

function verifiedPhoto(id: string, imageAlt: string): Pick<Product, 'image' | 'imageAlt'> {
  return verifiedProductPhotos.has(id) ? { image: catalog + id + '.webp', imageAlt } : {};
}

export const brands: Brand[] = [
  {
    id: 'roger',
    name: 'Roger Technology',
    group: 'Motor cổng tự động',
    description: 'Motor âm sàn, tay đòn và cổng trượt của Roger Technology (Ý). Đăng Hưng là chi nhánh phân phối khu vực miền Trung.',
    logo: catalog + 'logo-roger.webp',
    hero: '/assets/hero-gate-evening.webp',
    heroPosition: 'center 56%',
  },
  {
    id: 'fasla',
    name: 'Fasla',
    group: 'Đèn LED âm trần',
    description: 'Đèn âm trần cho chiếu sáng chung và chiếu điểm, với nhiều góc chiếu và nhiệt độ màu. Đăng Hưng phân phối đèn Fasla chính hãng.',
    logo: catalog + 'logo-fasla.webp',
    hero: '/assets/hero-living-vincom.webp',
    heroPosition: 'center 31%',
  },
  {
    id: 'homegy',
    name: 'Homegy',
    group: 'Công tắc thông minh',
    description: 'Dòng công tắc BLE Luxury kết nối Bluetooth Mesh, với lựa chọn mặt vuông và chữ nhật. Đăng Hưng là đối tác chiến lược của Homegy.',
    logo: catalog + 'logo-homegy.webp',
    hero: '/assets/hero-stair-lighting.webp',
    heroPosition: 'center 43%',
  },
  {
    id: 'philips',
    name: 'Philips',
    group: 'Khóa cửa thông minh',
    description: 'Các mẫu khóa điện tử Philips với phương thức mở khóa khác nhau theo từng model. Đăng Hưng phân phối khóa Philips tại khu vực miền Trung.',
    logo: catalog + 'logo-philips.webp',
    hero: '/assets/hero-villa-trung-tiet.webp',
    heroPosition: 'center 54%',
  },
  {
    id: 'am-thanh',
    name: 'Bose Professional',
    group: 'Loa Bose FreeSpace',
    description: 'Loa âm trần và loa treo Bose FreeSpace cho hệ âm thanh đa vùng. Dòng loa hệ 70 V / 100 V sử dụng kèm ampli chuyên dụng.',
    logo: catalog + 'logo-bose.webp',
    hero: '/assets/hero-living-vincom.webp',
    heroPosition: 'center 55%',
  },
];

const rogerSeriesIllustrations = new Set(['r20', 'be20', 'h30', 'bh30', 'bm30', 'r30', 'g30']);

function motor(
  slug: string,
  name: string,
  category: string,
  load: string,
  motorType: string,
  description?: string,
): Product {
  const id = 'roger-' + slug;
  const isSeriesIllustration = rogerSeriesIllustrations.has(slug);
  const imageAlt = isSeriesIllustration
    ? 'Hình minh họa dòng motor ' + name + ' từ Roger Technology'
    : category + ' Roger Technology ' + name;
  return {
    id,
    brandId: 'roger',
    name,
    category,
    ...verifiedPhoto(id, imageAlt),
    imageNote: isSeriesIllustration ? 'Ảnh minh họa dòng sản phẩm.' : undefined,
    description,
    specs: [
      ['Tải trọng', load + ' kg'],
      ['Động cơ', motorType],
    ],
  };
}

const underground = 'Motor âm sàn';
const swing = 'Motor tay đòn';
const sliding = 'Motor trượt';
const brushless24 = '24 V · Brushless · Encoder';
const brushless36 = '36 V · Brushless · Encoder';

function light(
  name: string,
  category: string,
  description: string,
  watts: string,
  beam: string,
  temperature: string,
  size: string,
): Product {
  return {
    id: 'fasla-' + name.toLowerCase(),
    brandId: 'fasla',
    name,
    category,
    image: catalog + 'fasla-' + name.toLowerCase() + '.webp',
    imageAlt: category + ' Fasla ' + name,
    description,
    specs: [
      ['Công suất', watts],
      ['Góc chiếu', beam],
      ['Nhiệt độ màu', temperature],
      ['Kích thước', size],
    ],
  };
}

function wallSwitch(
  slug: string,
  name: string,
  description: string,
  finish: string,
  model?: string,
): Product {
  const id = 'homegy-' + slug;
  const square = {
    src: catalog + id + '-square.webp',
    alt: 'Công tắc Homegy ' + name + ' mặt vuông 95 × 95 mm',
  };
  return {
    id,
    brandId: 'homegy',
    name,
    category: 'Công tắc BLE',
    image: square.src,
    imageAlt: square.alt,
    description,
    specs: [
      ...(model ? [['Mã dòng', model] as [string, string]] : []),
      ['Màu mặt', finish],
      ['Kích thước', 'Vuông 95 × 95 mm · Chữ nhật 122 × 80 mm'],
      ['Kết nối', 'Bluetooth Mesh · Hoạt động ngoại tuyến, không cần bộ điều khiển trung tâm'],
      ['Điện áp', '100–250 V AC · Tổng tải dưới 4.000 W'],
      ['Tải mỗi kênh', '3.000 W tải thuần trở · Đèn LED tối đa 300 W'],
      ['Độ bền', '100.000 lần bấm · Khóa trẻ em · Nhớ trạng thái'],
      ['Tùy chọn', 'CSC1–4 (1–4 nút công suất cao) · RE1 / RE2 (rèm đơn / đôi) · CC (cửa cuốn, cổng) · CBCT (cảm biến cầu thang)'],
    ],
    gallery: [
      square,
      {
        src: catalog + id + '-rectangle.webp',
        alt: 'Công tắc Homegy ' + name + ' mặt chữ nhật 122 × 80 mm',
      },
    ],
  };
}

function lock(
  name: string,
  methods: string,
  description: string,
  connectivity?: string,
): Product {
  const id = 'philips-' + name.toLowerCase();
  const seriesLabel = name === 'Alpha' ? 'Alpha Wi-Fi' : name === '7300' ? '7300 Bluetooth' : undefined;
  const imageAlt = seriesLabel
    ? 'Hình minh họa dòng khóa Philips ' + seriesLabel
    : 'Khóa cửa thông minh Philips ' + name;
  return {
    id,
    brandId: 'philips',
    name,
    category: 'Khóa điện tử',
    ...verifiedPhoto(id, imageAlt),
    imageNote: seriesLabel ? 'Ảnh minh họa dòng sản phẩm.' : undefined,
    description,
    specs: [
      ['Phương thức mở khóa', methods],
      ...(connectivity ? [['Kết nối', connectivity] as [string, string]] : []),
    ],
  };
}

const basicLockMethods = 'Vân tay · Mã số · Thẻ từ · Chìa cơ';

function speaker(
  slug: string,
  name: string,
  category: string,
  watts: string,
  impedance: string,
  certifications: string,
): Product {
  return {
    id: 'bose-' + slug,
    brandId: 'am-thanh',
    name,
    category,
    image: catalog + 'bose-' + slug + '.webp',
    imageAlt: category + ' Bose FreeSpace ' + name + ' màu đen',
    description: category + ' FreeSpace màu đen, sử dụng kèm ampli chuyên dụng cho hệ 70 V / 100 V.',
    specs: [
      ['Công suất', watts],
      ['Điện áp', '70 V / 100 V'],
      ['Trở kháng', impedance],
      ['Tiêu chuẩn', certifications],
    ],
  };
}

export const products: Product[] = [
  // Roger Technology, p. 9
  motor('r21-351', 'R21/351', underground, '800', '230 V', 'Motor âm sàn cho cổng tải trọng lớn.'),
  motor('br21-351', 'BR21/351', underground, '800', brushless36, 'Motor âm sàn điện áp 36 V cho cổng tải trọng 800 kg.'),
  motor('br21-351-hs', 'BR21/351/HS', underground, '400', brushless36, 'Motor âm sàn có tốc độ đóng mở nhanh.'),
  motor('br21-362', 'BR21/362', underground, '1.000', brushless36, 'Motor âm sàn 36 V cho cổng tải trọng lớn.'),
  motor('r20', 'R20', swing, '400', '230 V'),
  motor('be20', 'BE20', swing, '300', brushless24, 'Motor tay đòn vận hành êm.'),
  motor('monos4', 'MonoS4', swing, '450', brushless24),
  motor('smarty5', 'Smarty5', swing, '600', brushless36),
  motor('smarty7', 'Smarty7', swing, '1.400', brushless36, 'Motor tay đòn cho cổng nặng, tải trọng 1.400 kg.'),
  motor('h30', 'H30', sliding, '600', '230 V', 'Motor cổng trượt bền bỉ, tải trọng 600 kg.'),
  motor('bh30', 'BH30', sliding, '600', brushless24, 'Motor cổng trượt vận hành êm.'),
  motor('bm30', 'BM30', sliding, '400', brushless24),
  motor('r30', 'R30', sliding, '1.200', '230 V'),
  motor('g30', 'G30', sliding, '2.200', '230 V', 'Motor cổng trượt cho tải trọng 2.200 kg.'),

  // Fasla, p. 12
  light('JK-12W', 'Đèn âm trần', 'Đèn âm trần không viền, mặt trắng và thân đen.', '12 W', '60°', '4.000 K · Tùy chọn điều chỉnh 2.700–6.000 K', 'Ø75/83/H90 mm'),
  light('FX510', 'Đèn âm trần', 'Đèn LED âm trần, mặt trắng và thân xám.', '12 W', '36° / 50°', '4.000 K / 6.000 K · Tùy chọn điều chỉnh 2.700–6.000 K', 'Ø75/85/H85 mm · Ø95/105/H93 mm'),
  light('FA206', 'Đèn âm trần', 'Đèn âm trần mini, mặt trắng và thân đen.', '6 W / 12 W', '15° / 24° / 36°', '3.000 K / 4.000 K', 'Ø35/40/H82,5 mm · Ø45/50/H91 mm'),
  light('F7265', 'Đèn chiếu điểm', 'Đèn spotlight âm trần vỏ trắng.', '10 W', '36°', '4.000 K', 'Lỗ khoét Ø83 mm'),
  light('F7121', 'Đèn âm trần', 'Đèn downlight âm trần chóa sâu, vỏ trắng.', '10 W', '36°', '4.000 K', 'Lỗ khoét Ø83 mm'),

  // Homegy, p. 10
  wallSwitch('ble-luxury', 'BLE Luxury', 'Viền và nút bấm nhôm CNC nguyên khối, anode hóa và phun cát mịn. Thân PC chống cháy V2.', 'Ghi', 'HGY-BLE-LNP-…'),
  wallSwitch('ble-luxury-kinh-lom', 'BLE Luxury kính lõm', 'Mặt kính cường lực chống vân tay, viền nhôm CNC nguyên khối anode hóa và thân PC chống cháy V2.', 'Đen / Trắng', 'HGY-BLE-LKL-…'),
  wallSwitch('ble-luxury-nhom-phang', 'BLE Luxury nhôm phẳng', 'Mặt kính phẳng, viền nhôm CNC màu vàng hồng và nút cảm ứng viền tròn.', 'Đen / Trắng'),

  // Philips, p. 11
  lock('DDL902-MVP-11HWS', 'Tĩnh mạch · Khuôn mặt · ' + basicLockMethods, 'Hỗ trợ mở khóa bằng tĩnh mạch, khuôn mặt và vân tay.', 'Wi-Fi · Gateway'),
  lock('DDL720-MVP', 'Tĩnh mạch · ' + basicLockMethods, 'Hỗ trợ mở khóa bằng tĩnh mạch và vân tay.', 'Wi-Fi'),
  lock('DDL720-FVP', 'Khuôn mặt · ' + basicLockMethods, 'Hỗ trợ mở khóa bằng khuôn mặt và vân tay.', 'Wi-Fi'),
  lock('DDL801-5HBS', basicLockMethods, 'Mở khóa bằng vân tay, mã số, thẻ từ hoặc chìa cơ.', 'Gateway'),
  lock('DDL611S-5HBS', basicLockMethods + ' · Điều khiển từ xa (remote)', 'Hỗ trợ điều khiển từ xa bằng remote.', 'Gateway'),
  lock('DDL610-5HBS', basicLockMethods, 'Mở khóa bằng vân tay, mã số, thẻ từ hoặc chìa cơ.', 'Gateway'),
  lock('DDL615-5HBS', basicLockMethods, 'Mở khóa bằng vân tay, mã số, thẻ từ hoặc chìa cơ.', 'Gateway'),
  lock('DDL609-5HS', basicLockMethods, 'Mở khóa bằng vân tay, mã số, thẻ từ hoặc chìa cơ.'),
  lock('DDL709-7HWS', 'Khuôn mặt · ' + basicLockMethods, 'Hỗ trợ mở khóa bằng khuôn mặt và vân tay.', 'Wi-Fi'),
  lock('7300', basicLockMethods, 'Hỗ trợ kết nối Bluetooth và mở khóa bằng vân tay.', 'Bluetooth'),
  lock('Alpha', basicLockMethods, 'Hỗ trợ kết nối Wi-Fi và mở khóa bằng vân tay.', 'Wi-Fi'),

  // Bose Professional, p. 13
  speaker('ds-40f', 'DS 40F', 'Loa âm trần', '40 W · Tap 2,5–40 W', '8 Ω', 'UL 1480 · BS5839 · CE'),
  speaker('ds-16f', 'DS 16F', 'Loa âm trần', '16 W · Tap 1–16 W', '8 Ω', 'UL 1480 · CE'),
  speaker('fs2p', 'FS2P', 'Loa treo', '16 W · Tap 1–16 W', '16 Ω', 'UL 1480A · EN 54-24 · CE'),
];
