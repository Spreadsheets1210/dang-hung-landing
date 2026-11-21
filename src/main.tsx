import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { brands, products, type Brand, type Product } from './catalog-data';
import { projects } from './project-data';
import { companyContact, companyProfile } from './profile-data';
import { CompanyPage, ContactCallout, HomePortfolio, ProjectDetailPage, ProjectsPage } from './profile-pages';
import './fonts.css';
import './styles.css';

const brandOrder = ['fasla', 'roger', 'homegy', 'philips', 'am-thanh'];
const orderedBrands = [...brands].sort((a, b) => brandOrder.indexOf(a.id) - brandOrder.indexOf(b.id));
const orderedProducts = orderedBrands.flatMap(brand => products.filter(product => product.brandId === brand.id));
const brandLink = (brand: Brand) => '#thuong-hieu/' + brand.id;
const productLink = (product: Product) => '#san-pham/' + product.id;

function Icon({ name }: { name: 'search' | 'menu' | 'next' | 'prev' | 'arrow' | 'phone' | 'close' }) {
  const paths = {
    search: 'M20 20l-4.1-4.1 M17.5 10.8a6.7 6.7 0 1 1-13.4 0 6.7 6.7 0 0 1 13.4 0Z',
    menu: 'M4 7h16M4 12h16M4 17h16',
    next: 'm9 4 8 8-8 8',
    prev: 'm15 4-8 8 8 8',
    arrow: 'M4 12h15m-6-6 6 6-6 6',
    phone: 'M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2c-3-1.3-5.7-4-7-7l2-2-2-5Z',
    close: 'm5 5 14 14M19 5 5 19',
  };
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]}/></svg>;
}

function Identity() {
  return <a className="identity" href="#" aria-label="Đăng Hưng Technology — Trang chủ">
    <img src="/assets/dang-hung-mark.png" width="35" height="39" alt=""/>
    <span>ĐĂNG HƯNG<small>TECHNOLOGY</small></span>
  </a>;
}

function BrandNavLink({ brand, current, onClick }: { brand: Brand; current?: Brand; onClick?: () => void }) {
  return <a href={brandLink(brand)} className="brand-nav-link" aria-label={brand.name} aria-current={current?.id === brand.id ? 'page' : undefined} onClick={onClick}>
    {brand.logo ? <img src={brand.logo} alt={brand.name} width="96" height="30"/> : brand.name}
  </a>;
}

function searchable(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]/g, '');
}

function Header({ current }: { current?: Brand }) {
  const menu = useRef<HTMLDialogElement>(null);
  const search = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState('');
  const normalized = searchable(query);
  const results = normalized ? orderedProducts.filter(item => {
    const brand = brands.find(entry => entry.id === item.brandId)!;
    return searchable([item.name, item.category, brand.name, brand.group].join(' ')).includes(normalized);
  }) : [];
  return <>
    <header className="site-header">
      <div className="header-inner">
        <button className="icon-button mobile-menu" type="button" aria-label="Menu" onClick={() => menu.current?.showModal()}><Icon name="menu"/></button>
        <Identity/>
        <nav className="main-nav" aria-label="Điều hướng chính">
          <a href="#ve-chung-toi" aria-current={window.location.hash === '#ve-chung-toi' ? 'page' : undefined}>Giới thiệu</a>
          <a href="#cong-trinh" aria-current={window.location.hash.startsWith('#cong-trinh') ? 'page' : undefined}>Công trình</a>
          <a href="#san-pham" aria-current={window.location.hash.startsWith('#san-pham') || !!current ? 'page' : undefined}>Sản phẩm</a>
          <a href="#lien-he">Liên hệ</a>
        </nav>
        <div className="header-right">
          <a className="header-call" href={companyContact.phoneHref}>Gọi tư vấn</a>
          <button className="icon-button search-trigger" type="button" aria-label="Tìm sản phẩm" onClick={() => { setQuery(''); search.current?.showModal(); }}><Icon name="search"/></button>
        </div>
      </div>
      <nav className="header-brand-nav" aria-label="Thương hiệu sản phẩm">
        {orderedBrands.map(brand => <BrandNavLink key={brand.id} brand={brand} current={current}/>)}
      </nav>
    </header>
    <dialog ref={menu} className="overlay" aria-labelledby="menu-title" onClick={event => { if (event.target === event.currentTarget) menu.current?.close(); }}>
      <div className="overlay-body">
        <div className="overlay-heading"><h2 id="menu-title">{companyProfile.name}</h2><button type="button" className="icon-button" aria-label="Đóng menu" onClick={() => menu.current?.close()}><Icon name="close"/></button></div>
        <nav className="menu-items" aria-label="Danh mục chính">
          <p className="menu-label">Hồ sơ năng lực</p>
          <a href="#ve-chung-toi" onClick={() => menu.current?.close()}>Giới thiệu <Icon name="arrow"/></a>
          <a href="#cong-trinh" onClick={() => menu.current?.close()}>Công trình <Icon name="arrow"/></a>
          <a href="#san-pham" onClick={() => menu.current?.close()}>Sản phẩm <Icon name="arrow"/></a>
          <a href="#lien-he" onClick={() => menu.current?.close()}>Liên hệ <Icon name="arrow"/></a>
          <p className="menu-label">Thương hiệu</p>
          {orderedBrands.map(brand => <a key={brand.id} href={brandLink(brand)} onClick={() => menu.current?.close()}>{brand.name}<Icon name="arrow"/></a>)}
        </nav>
      </div>
    </dialog>
    <dialog ref={search} className="overlay" aria-labelledby="search-title" onClick={event => { if (event.target === event.currentTarget) search.current?.close(); }}>
      <div className="overlay-body">
        <div className="overlay-heading"><h2 id="search-title">Tìm sản phẩm</h2><button type="button" className="icon-button" aria-label="Đóng tìm kiếm" onClick={() => search.current?.close()}><Icon name="close"/></button></div>
        <label className="visually-hidden" htmlFor="product-search">Tên, mã mẫu hoặc thương hiệu</label>
        <input id="product-search" type="search" autoFocus placeholder="Tên, mã mẫu hoặc thương hiệu" value={query} onChange={event => setQuery(event.target.value)}/>
        {normalized && <p className="result-count" aria-live="polite">{results.length ? results.length + ' sản phẩm' : 'Không tìm thấy sản phẩm phù hợp.'}</p>}
        <div className="search-results">
          {results.map(product => <a key={product.id} href={productLink(product)} onClick={() => search.current?.close()}>
            <ProductVisual product={product}/>
            <span>{product.name}<small>{brands.find(brand => brand.id === product.brandId)?.name} · {product.category}</small></span>
            <Icon name="arrow"/>
          </a>)}
        </div>
      </div>
    </dialog>
  </>;
}

function Hero({ current }: { current?: Brand }) {
  const [slide, setSlide] = useState(0);
  const brand = current ?? orderedBrands[slide];
  const advance = (offset: number) => setSlide(index => (index + orderedBrands.length + offset) % orderedBrands.length);
  const nextLink = current ? '#san-pham' : brandLink(brand);
  return <section className="hero" aria-label={current ? brand.name : 'Thương hiệu nổi bật'}>
    <img className="hero-image" src={brand.hero} alt="" fetchPriority="high" style={{ objectPosition: brand.heroPosition ?? 'center 50%' }}/>
    <div className="hero-content" aria-live="polite">
      <p>{current ? brand.group : brand.name}</p>
      <h1 id="page-heading" tabIndex={-1}>{current ? brand.name : brand.group}</h1>
      <a className="button outline-light" href={nextLink} onClick={event => {
        if (current) {
          event.preventDefault();
          document.getElementById('san-pham')?.scrollIntoView();
        }
      }}>{current ? 'Xem sản phẩm' : 'Khám phá sản phẩm'} <Icon name="arrow"/></a>
    </div>
    {!current && <>
      <button type="button" className="hero-arrow hero-prev" aria-label="Thương hiệu trước" onClick={() => advance(-1)}><Icon name="prev"/></button>
      <button type="button" className="hero-arrow hero-next" aria-label="Thương hiệu tiếp theo" onClick={() => advance(1)}><Icon name="next"/></button>
      <div className="hero-dots" aria-label="Chọn thương hiệu nổi bật">
        {orderedBrands.map((entry, index) => <button type="button" aria-label={entry.name} aria-pressed={index === slide} key={entry.id} onClick={() => setSlide(index)}/>)}
      </div>
    </>}
  </section>;
}

function ProductVisual({ product, eager = false }: { product: Product; eager?: boolean }) {
  return product.image
    ? <img className="product-picture" src={product.image} alt={product.imageAlt ?? product.name} loading={eager ? 'eager' : 'lazy'} width="430" height="430"/>
    : <div className="model-tile" aria-hidden="true">
        <span>{brands.find(brand => brand.id === product.brandId)?.name}</span>
        <strong>{product.name}</strong>
        <small>{product.category}</small>
      </div>;
}

function ProductCard({ product, showBrand }: { product: Product; showBrand: boolean }) {
  const brand = brands.find(entry => entry.id === product.brandId)!;
  return <a className="product-card" href={productLink(product)}>
    <div className="product-visual"><ProductVisual product={product}/><span className="product-arrow"><Icon name="arrow"/></span></div>
    <div className="product-label">
      <h3>{product.name}</h3>
      <p>{showBrand ? brand.name + ' · ' : ''}{product.category}</p>
    </div>
  </a>;
}

function ProductGrid({ current }: { current?: Brand }) {
  const [filter, setFilter] = useState('');
  const pool = current ? orderedProducts.filter(item => item.brandId === current.id) : orderedProducts;
  const filters = current
    ? [...new Set(pool.map(item => item.category))].map(item => ({ id: item, name: item }))
    : orderedBrands.map(brand => ({ id: brand.id, name: brand.name }));
  const items = filter ? pool.filter(item => (current ? item.category : item.brandId) === filter) : pool;
  return <section id="san-pham" className="catalog" aria-labelledby="catalog-heading">
    <div className="container">
      <h2 id="catalog-heading">Sản phẩm</h2>
      <div className="filters" aria-label={current ? 'Lọc theo nhóm sản phẩm' : 'Lọc theo thương hiệu'} role="group">
        <button type="button" aria-pressed={filter === ''} onClick={() => setFilter('')}>Tất cả</button>
        {filters.map(item => <button type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)} key={item.id}>{item.name}</button>)}
      </div>
      <p className="catalog-count" aria-live="polite">{items.length} sản phẩm</p>
      <div className="product-grid">
        {items.map(product => <ProductCard key={product.id} product={product} showBrand={!current}/>)}
      </div>
    </div>
  </section>;
}

function BrandIntro({ current }: { current?: Brand }) {
  return <section className="brand-intro container" aria-label="Giới thiệu bộ sưu tập">
    <h2>{current?.name ?? 'Thương hiệu phân phối'}</h2>
    {current ? <p>{current.description}</p> : <nav className="brand-directory" aria-label="Bộ sưu tập theo thương hiệu">
      {orderedBrands.map(brand => <BrandNavLink key={brand.id} brand={brand}/>)}
    </nav>}
  </section>;
}

function Detail({ product }: { product: Product }) {
  const brand = brands.find(entry => entry.id === product.brandId)!;
  const [activeImage, setActiveImage] = useState(0);
  const photos = [
    ...(product.image ? [{ src: product.image, alt: product.imageAlt ?? product.name }] : []),
    ...(product.gallery ?? []),
  ].filter((photo, index, list) => list.findIndex(entry => entry.src === photo.src) === index);
  const related = orderedProducts.filter(entry => entry.brandId === product.brandId && entry.id !== product.id);
  related.sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category));
  return <div className="detail container">
    <nav className="breadcrumbs" aria-label="Đường dẫn">
      <a href="#san-pham">Sản phẩm</a><Icon name="next"/><a href={brandLink(brand)}>{brand.name}</a><Icon name="next"/><span aria-current="page">{product.name}</span>
    </nav>
    <div className="detail-grid">
      <div>
        <div className="detail-image">
          {photos.length ? <img className="product-picture" src={photos[activeImage].src} alt={photos[activeImage].alt} width="600" height="600"/> : <ProductVisual product={product} eager/>}
        </div>
        {product.imageNote && <p className="image-note">{product.imageNote}</p>}
        {photos.length > 1 && <div className="thumbnails" aria-label="Ảnh sản phẩm">
          {photos.map((photo, index) => <button type="button" key={photo.src} aria-pressed={index === activeImage} aria-label={photo.alt} onClick={() => setActiveImage(index)}><img src={photo.src} alt="" width="72" height="72"/></button>)}
        </div>}
      </div>
      <div className="detail-copy">
        <a className="product-brand" href={brandLink(brand)}>{brand.name}</a>
        <h1 id="page-heading" tabIndex={-1}>{product.name}</h1>
        <p className="detail-category">{product.category}</p>
        {product.description && <p>{product.description}</p>}
        {!!product.specs?.length && <dl className="specs">
          {product.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>}
        <a className="button dark" href={companyContact.phoneHref}>Tư vấn sản phẩm <Icon name="arrow"/></a>
        <a className="detail-back" href={brandLink(brand)}><Icon name="prev"/> Xem bộ sưu tập {brand.name}</a>
      </div>
    </div>
    {!!related.length && <section className="related" aria-labelledby="related-heading">
      <h2 id="related-heading">Cùng thương hiệu</h2>
      <div className="product-grid">{related.slice(0, 4).map(item => <ProductCard key={item.id} product={item} showBrand={false}/>)}</div>
    </section>}
  </div>;
}

function Footer() {
  return <footer id="lien-he" className="site-footer">
    <div className="container footer-grid">
      <div><Identity/><p>Công ty TNHH Công nghệ số Platinum</p><address>57 Lê Hồng Phong, phường Thành Sen, Hà Tĩnh</address></div>
      <div><h2>Khám phá</h2><a href="#ve-chung-toi">Giới thiệu</a><a href="#cong-trinh">Công trình</a><a href="#san-pham">Tất cả sản phẩm</a><a href="/docs/HoSoNangLuc_Platinum_v3.pdf" target="_blank" rel="noreferrer">Hồ sơ năng lực · PDF</a></div>
      <div><h2>Liên hệ</h2><a href={companyContact.phoneHref}>{companyContact.phone}</a><a href={companyContact.secondaryPhoneHref}>{companyContact.secondaryPhone}</a><a href={'mailto:' + companyContact.email}>{companyContact.email}</a><span className="footer-profile-website">Website trong hồ sơ: www.danghung.vn</span></div>
    </div>
    <div className="container footer-end">© {new Date().getFullYear()} Đăng Hưng Technology</div>
  </footer>;
}

function App() {
  const [hash, setHash] = useState(window.location.hash);
  const main = useRef<HTMLElement>(null);
  const initialized = useRef(false);
  const target = hash.split('/')[1];
  const product = hash.startsWith('#san-pham/') ? products.find(entry => entry.id === target) : undefined;
  const project = hash.startsWith('#cong-trinh/') ? projects.find(entry => entry.id === target) : undefined;
  const current = brands.find(brand => brand.id === (product?.brandId ?? (hash.startsWith('#thuong-hieu/') ? target : undefined)));
  const showProjects = hash === '#cong-trinh';
  const showAbout = hash === '#ve-chung-toi';

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  useEffect(() => {
    document.title = (product?.name ?? project?.name ?? current?.name ?? (showProjects ? 'Công trình' : showAbout ? 'Giới thiệu' : 'Giải pháp công nghệ')) + ' | Đăng Hưng Technology';
    const section = hash === '#san-pham' || hash === '#lien-he' || hash === '#cong-trinh-noi-bat' ? document.getElementById(hash.slice(1)) : null;
    if (section) {
      section.scrollIntoView();
    } else if (initialized.current || hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (initialized.current) main.current?.querySelector<HTMLElement>('#page-heading')?.focus({ preventScroll: true });
    }
    initialized.current = true;
  }, [hash, current, product, project, showProjects, showAbout]);

  return <>
    <a href="#noi-dung" className="skip-link" onClick={event => { event.preventDefault(); main.current?.focus(); main.current?.scrollIntoView(); }}>Đến nội dung chính</a>
    <Header current={current}/>
    <main id="noi-dung" ref={main} tabIndex={-1}>
      {project ? <ProjectDetailPage project={project} key={project.id}/> : product ? <Detail product={product} key={product.id}/> : showProjects ? <ProjectsPage/> : showAbout ? <CompanyPage/> : current ? <>
        <Hero key={'hero-' + (current?.id ?? 'home')} current={current}/>
        <BrandIntro current={current}/>
        <ProductGrid key={'products-' + (current?.id ?? 'all')} current={current}/>
        <ContactCallout/>
      </> : <HomePortfolio ProductGrid={ProductGrid}/>}
    </main>
    <Footer/>
    <a className="quick-phone" href={companyContact.phoneHref} aria-label="Gọi Đăng Hưng Technology"><Icon name="phone"/></a>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
