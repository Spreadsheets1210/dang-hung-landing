import React, { useState } from 'react';
import { brands } from './catalog-data';
import { companyCommitments, companyContact, companyDifferentiators, companyProcess, companyProfile, companyServices } from './profile-data';
import { projects, type Project } from './project-data';

function Arrow() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>;
}

function Pin() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M19 10c0 6-7 11-7 11S5 16 5 10a7 7 0 1 1 14 0Zm-4 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>;
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const image = project.images[0];
  const name = project.name.replace(/^DỰ ÁN\s+/i, '');
  return <a className={'project-card' + (featured ? ' project-card-featured' : '')} href={'#cong-trinh/' + project.id}>
    <div className="project-card-image">
      <img src={image.src} alt={image.alt} width="720" height="520" loading="lazy"/>
      <span className="project-count">{project.items.length} hạng mục</span>
      <span className="project-open"><Arrow/></span>
    </div>
    <div className="project-card-copy">
      <p className="eyebrow">DỰ ÁN TIÊU BIỂU · TRANG {project.page}</p>
      <h3>{name}</h3>
      {project.location && <p className="project-location"><Pin/>{project.location}</p>}
      <p className="project-card-scope">{project.items.slice(0, 2).join(' · ')}{project.items.length > 2 ? ' · …' : ''}</p>
    </div>
  </a>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>;
}

function ProjectGrid({ items, featured = false }: { items: Project[]; featured?: boolean }) {
  return <div className={'project-grid' + (featured ? ' project-grid-featured' : '')}>{items.map(project => <ProjectCard key={project.id} project={project} featured={featured}/>)}</div>;
}

export function HomePortfolio({ ProductGrid }: { ProductGrid: React.ComponentType }) {
  const featured = projects.slice(0, 4);
  return <>
    <section className="portfolio-hero">
      <img src="/assets/hero-villa-modern.webp" alt="" fetchPriority="high"/>
      <div className="portfolio-hero-shade"/>
      <div className="portfolio-hero-copy container">
        <p className="eyebrow">ĐĂNG HƯNG TECHNOLOGY · HÀ TĨNH · TỪ 2013</p>
        <h1 id="page-heading">Giải pháp công nghệ.<br/><span>Trọn vẹn công trình.</span></h1>
        <p className="portfolio-hero-text">Tư vấn, phân phối và thi công cổng tự động, nhà thông minh, khóa điện tử, chiếu sáng, âm thanh và an ninh cho nhà ở, biệt thự, công trình dân dụng và thương mại.</p>
        <div className="portfolio-hero-actions"><a className="button accent" href="#cong-trinh-noi-bat">Xem công trình <Arrow/></a><a className="button outline-light" href="#ve-chung-toi">Khám phá năng lực <Arrow/></a></div>
      </div>
      <div className="portfolio-hero-note">Một đầu mối · Nhiều hạng mục · Vận hành đồng bộ</div>
    </section>
    <div className="portfolio-brands container">
      <p>Thương hiệu & giải pháp</p>
      <nav aria-label="Thương hiệu sản phẩm">{brands.map(brand => <a key={brand.id} href={'#thuong-hieu/' + brand.id}>{brand.logo ? <img src={brand.logo} alt={brand.name}/> : brand.name}</a>)}</nav>
    </div>
    <section className="profile-proof">
      <div className="container proof-items">
        <div><strong>13+</strong><span>Năm hoạt động<br/>từ 2013</span></div>
        <div><strong>19</strong><span>Dự án tiêu biểu<br/>trong hồ sơ</span></div>
        <div><strong>05</strong><span>Thương hiệu &<br/>giải pháp chính</span></div>
        <a href="#ve-chung-toi">Xem đầy đủ năng lực <Arrow/></a>
      </div>
      
    </section>
    <section className="home-about container" aria-labelledby="home-about-title">
      <div className="home-about-photo"><img src={companyProfile.image.src} alt={companyProfile.image.alt} width="800" height="600" loading="lazy"/><span>Đội ngũ Đăng Hưng Technology</span></div>
      <div className="home-about-copy">
        <p className="eyebrow">01 / GIỚI THIỆU ĐĂNG HƯNG</p>
        <h2 id="home-about-title">{companyProfile.legalName}<small>Thương hiệu Đăng Hưng Technology</small></h2>
        {companyProfile.introduction.slice(0, 2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <a className="text-link" href="#ve-chung-toi">Tìm hiểu doanh nghiệp và năng lực <Arrow/></a>
      </div>
    </section>
    <section id="cong-trinh-noi-bat" className="home-projects section-shell">
      <div className="container">
        <div className="section-heading-row"><SectionHeading eyebrow="02 / CÔNG TRÌNH THỰC TẾ" title={<>Năng lực thể hiện qua<br/>từng hạng mục thi công.</>} description="Hồ sơ năng lực giới thiệu 19 dự án cùng ảnh công trình và danh sách hạng mục đã triển khai."/><a className="text-link" href="#cong-trinh">Xem cả 19 công trình <Arrow/></a></div>
        <ProjectGrid items={featured} featured/>
        <a className="button dark project-all-button" href="#cong-trinh">Xem tất cả dự án <Arrow/></a>
      </div>
    </section>
    <section className="home-capabilities container">
      <SectionHeading eyebrow="03 / LĨNH VỰC HOẠT ĐỘNG" title={<>Một đầu mối cho<br/>nhiều hạng mục công nghệ.</>} description="Từ giải pháp chính đến các hệ thống bổ trợ, được phối hợp theo hiện trạng và nhu cầu của từng công trình."/>
      <div className="home-capability-grid">{companyServices.slice(0, 5).map((service,index)=><article key={service.id}><span>0{index+1}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
      <a className="text-link" href="#ve-chung-toi">Xem toàn bộ năng lực và quy trình <Arrow/></a>
    </section>
    <section className="home-products-section container">
      <div className="section-heading-row"><SectionHeading eyebrow="04 / THƯƠNG HIỆU & SẢN PHẨM" title={<>Thiết bị phù hợp<br/>với từng công trình.</>}/><a className="text-link" href="#san-pham">Mở danh mục sản phẩm <Arrow/></a></div>
      <ProductGrid/>
    </section>
    <ContactCallout/>
  </>;
}

export function CompanyPage() {
  return <div className="company-page">
    <section className="company-page-hero"><div className="container"><p className="eyebrow">HỒ SƠ NĂNG LỰC · GIỚI THIỆU DOANH NGHIỆP</p><h1 id="page-heading" tabIndex={-1}>Đăng Hưng Technology.<br/><span>Tận tâm – Chuyên nghiệp – Chính hãng.</span></h1><p>{companyProfile.introduction[0]}</p></div></section>
    <section className="container about-story">
      <img src={companyProfile.image.src} alt={companyProfile.image.alt} width="800" height="580"/>
      <div><p className="eyebrow">PHÁP NHÂN & THƯƠNG HIỆU</p><h2>{companyProfile.legalName}</h2>{companyProfile.introduction.slice(1).map(text=><p key={text}>{text}</p>)}
        <p className="signature">Thiều Đăng Hưng<br/><span>Giám đốc · theo hồ sơ năng lực</span></p>
      </div>
    </section>
    <section className="company-letter container">
      <p className="eyebrow">THƯ NGỎ TỪ BAN GIÁM ĐỐC</p>
      <h2>Kính gửi Quý khách hàng<br/>và Quý đối tác.</h2>
      <div>
        <p>Lời đầu tiên, Công ty TNHH Công nghệ số Platinum – thương hiệu Đăng Hưng Technology – xin gửi tới Quý khách hàng và Quý đối tác lời chào trân trọng, lời chúc sức khỏe và thành công.</p>
        <p>Được thành lập từ năm 2013, chúng tôi chọn con đường đồng hành cùng những gia chủ mong muốn một không gian sống an toàn, tiện nghi và đẳng cấp. Hơn mười năm qua, Đăng Hưng đã trở thành chi nhánh phân phối Roger Technology (Italy) và khóa điện tử Philips khu vực miền Trung, nhà phân phối đèn Fasla và đối tác chiến lược của Homegy.</p>
        <p>Mỗi công trình là tâm huyết của gia chủ. Vì vậy, từ tư vấn, thiết kế đến thi công và hậu mãi, Đăng Hưng luôn đặt chữ “Tín” lên hàng đầu: sản phẩm chính hãng, giải pháp đồng bộ, dịch vụ tận tâm.</p>
        <p>Trân trọng cảm ơn Quý khách đã dành thời gian tìm hiểu hồ sơ năng lực này. Rất mong có cơ hội được hợp tác và phục vụ!</p>
        <p className="signature">Thiều Đăng Hưng<br/><span>Giám đốc</span></p>
      </div>
    </section>
    <section className="company-facts"><div className="container">
      <SectionHeading eyebrow="THÔNG TIN DOANH NGHIỆP" title={<>Nền tảng pháp lý<br/>và kinh nghiệm.</>}/>
      <dl>{companyProfile.facts.map(fact=><div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
      <p className="source-note">Thông tin pháp nhân, ngày đăng ký và vốn điều lệ được trích nguyên theo hồ sơ năng lực 2026. Vốn điều lệ được ghi theo nội dung tài liệu, không phải dữ liệu xác minh trực tiếp từ cơ sở đăng ký.</p>
    </div></section>
    <section className="company-vision container">
      <article><p className="eyebrow">TẦM NHÌN</p><h2>Đồng hành cùng không gian sống miền Trung.</h2><p>{companyProfile.vision}</p></article>
      <article><p className="eyebrow">SỨ MỆNH</p><h2>Một đầu mối.<br/>Trọn công trình.</h2><p>{companyProfile.mission}</p></article>
    </section>
    <section className="company-values"><div className="container"><SectionHeading eyebrow="GIÁ TRỊ CỐT LÕI" title={<>Nguyên tắc trong<br/>từng công trình.</>}/><div className="company-values-grid">{companyProfile.values.map((value,i)=><article key={value.title}><span>0{i+1}</span><h3>{value.title}</h3><p>{value.description}</p></article>)}</div></div></section>
    <section className="company-credentials container"><SectionHeading eyebrow="HỆ SINH THÁI SẢN PHẨM & ĐỐI TÁC" title={<>Mỗi thương hiệu,<br/>một thế mạnh riêng.</>} description="Phân biệt rõ vai trò phân phối, chi nhánh khu vực, đối tác chiến lược và giải pháp sản phẩm."/><div className="credentials-grid">{companyProfile.credentials.filter(x=>x.title!=='Đăng ký doanh nghiệp').map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
    <section className="company-services"><div className="container"><SectionHeading eyebrow="MẢNG HOẠT ĐỘNG" title={<>05 giải pháp cốt lõi.<br/>05 nhóm giải pháp bổ trợ.</>} description="Các nội dung dưới đây được tổng hợp từ hồ sơ năng lực, gồm giải pháp cốt lõi và các hạng mục phụ trợ."/><div className="company-services-grid">{companyServices.map((service,index)=><article className="service-card" key={service.id}><span className="service-index">{String(index+1).padStart(2,'0')} · {service.kind==='core'?'CỐT LÕI':'BỔ TRỢ'}</span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.details.map(detail=><li key={detail}>{detail}</li>)}</ul>{service.brands && <small>Thương hiệu: {service.brands.join(' · ')}</small>}</article>)}</div></div></section>
    <section className="company-differentiators container"><SectionHeading eyebrow="VÌ SAO CHỌN ĐĂNG HƯNG?" title={<>Kinh nghiệm, showroom<br/>và đội ngũ triển khai.</>}/><div className="differentiator-grid">{companyDifferentiators.map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><p className="source-note">Hồ sơ năng lực tự ghi 19 khách hàng và 86 hạng mục; đây là số liệu của tài liệu. Tổng dòng hạng mục ghi trong 19 trang dự án là 93, vì vậy chúng tôi không gộp hay sửa hai số này.</p></section>
    <section className="company-process"><div className="container"><SectionHeading eyebrow="QUY TRÌNH TRIỂN KHAI" title={<>Sáu bước, từ khảo sát<br/>đến hậu mãi.</>} description="Quy trình chuẩn hóa theo hồ sơ năng lực Đăng Hưng Technology."/><ol className="process-list">{companyProcess.map((step,index)=><li className="process-step" key={step.title}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{step.title}</h3><p>{step.description}</p><ul>{step.details.map(detail=><li key={detail}>{detail}</li>)}</ul></div></li>)}</ol><div className="commitments-grid">{companyCommitments.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <ContactCallout/>
  </div>;
}

export function ProjectsPage() {
  const [query,setQuery]=useState('');
  const normalized=query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
  const filtered=normalized?projects.filter(project=>[project.name,project.location??'',...project.items].join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').includes(normalized)):projects;
  return <section className="projects-page"><div className="container">
    <div className="projects-page-heading"><p className="eyebrow">HỒ SƠ NĂNG LỰC · DỰ ÁN TIÊU BIỂU</p><h1 id="page-heading" tabIndex={-1}>Công trình thực tế</h1><p>19 công trình tiêu biểu theo thứ tự trong hồ sơ. Mở từng dự án để xem ảnh và toàn bộ hạng mục đã thi công.</p></div>
    <div className="project-search"><label htmlFor="project-search">Tìm công trình, địa điểm hoặc hạng mục</label><input id="project-search" type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Ví dụ: cổng tự động, chiếu sáng, Vincom"/><p aria-live="polite">{filtered.length} / {projects.length} công trình</p></div>
    <ProjectGrid items={filtered}/>
    {filtered.length===0&&<p className="empty-state">Chưa tìm thấy công trình phù hợp.</p>}
    <p className="source-note">Lưu ý số liệu: bìa hồ sơ ghi 86 hạng mục; danh sách chi tiết cộng được 93 dòng. Trang này trình bày từng dòng đúng nơi xuất hiện trong tài liệu, không tự điều chỉnh số liệu.</p>
  </div></section>;
}

export function ProjectDetailPage({ project }: { project: Project }) {
  const [active,setActive]=useState(0);
  const name=project.name.replace(/^DỰ ÁN\s+/i,'');
  return <div className="project-detail container">
    <nav className="breadcrumbs" aria-label="Đường dẫn"><a href="#cong-trinh">Công trình</a><span aria-hidden="true">›</span><span aria-current="page">{name}</span></nav>
    <div className="project-detail-heading"><div><p className="eyebrow">DỰ ÁN TIÊU BIỂU · HỒ SƠ TRANG {project.page}</p><h1 id="page-heading" tabIndex={-1}>{name}</h1></div>{project.location&&<p className="project-location"><Pin/>{project.location}</p>}</div>
    <div className="project-detail-grid">
      <div className="project-gallery"><figure><img src={project.images[active].src} alt={project.images[active].alt} width="1200" height="850"/><figcaption>{project.images[active].alt}</figcaption></figure><div className="project-thumbnails" aria-label="Hình ảnh công trình">{project.images.map((image,index)=><button type="button" key={image.src} aria-label={'Xem ảnh công trình '+(index+1)} aria-pressed={active===index} onClick={()=>setActive(index)}><img src={image.src} alt="" width="96" height="72" loading="lazy"/></button>)}</div></div>
      <aside className="project-scope"><p className="eyebrow">CÁC HẠNG MỤC ĐĂNG HƯNG ĐÃ THI CÔNG</p><h2>{project.items.length} hạng mục</h2><ol>{project.items.map(item=><li key={item}>{item}</li>)}</ol><a className="button dark" href="#lien-he">Trao đổi về công trình <Arrow/></a></aside>
    </div>
    <p className="source-note">Tên dự án, địa điểm, hạng mục và hình ảnh trích theo hồ sơ năng lực Đăng Hưng Technology.</p>
    <a className="text-link" href="#cong-trinh">Quay lại danh sách công trình <Arrow/></a>
  </div>;
}

export function ContactCallout() {
  return <section className="contact-callout"><div className="container contact-callout-inner"><div><p className="eyebrow">ĐỒNG HÀNH CÙNG CÔNG TRÌNH CỦA BẠN</p><h2>Khảo sát, tư vấn<br/>và thiết kế giải pháp.</h2><p>Trao đổi với Đăng Hưng về nhu cầu, kiến trúc và ngân sách công trình.</p></div><div className="contact-actions"><a className="button accent" href={companyContact.phoneHref}>{companyContact.phone} <Arrow/></a><a className="button outline-light" href={'mailto:'+companyContact.email}>{companyContact.email} <Arrow/></a></div></div></section>;
}
