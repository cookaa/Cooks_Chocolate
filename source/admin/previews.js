const BlogPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const date = dayjs(data.date).format('DD-MM-YY')
  return (
    <div className="news-detail">
      <div className="container">
        <div className="row">
          <div className="title">
            <span className="date">{date}</span>
            <h1>{data.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="image">
            <img src={data.image}/>
          </div>
        </div>
        <div className="row content">{widgetFor('body')}</div>
      </div>
    </div>
  )
}

const ProductPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <div className="product-detail">
      <div className="image" style={{ backgroundImage: `url('${data.image}')` }}></div>
      <div className="content">
        <div className="meta">
          <h1>{data.title}</h1>
          <div className="weight">
            <span>{`${data.weight}kg`}</span>
          </div>
          <div className="price">
            <span>{`€${data.price}`}</span>
          </div>
        </div>
        <div className="body">{widgetFor('body')}</div>
      </div>
    </div>
  )
}

const HomePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    //adding in navbar
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  //end navbar
    <div>
      <section className="hero" style={{ backgroundImage: `url('${data.hero.image}')` }}>
        <div className="caption">
          <div className="row">
            <h1>{data.hero.title}</h1>
          </div>
        </div>
      </section>
      <section className="homepage-story">
        <div className="container">
          <div className="row">
            <div className="story-content">{widgetFor('story')}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

const NavigationPreview = ({ entry }) => {
  const data = entry.get('data').toJS()
  return (
    <header className="header-primary">
      <div className="logo">
        <a href="/">
          <img src="/images/logo.svg" alt="Kaldi"/>
        </a>
      </div>
      <a className="nav-button">
        <img src="/images/nav-open.svg" className="open"/>
      </a>
      <nav className="navigation" style={{ paddingRight: '40px' }}>
        <ul>
          {!data.nav_items ? null : data.nav_items.map((item, idx) => (
            <li key={idx}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

CMS.registerPreviewTemplate('blog', BlogPreview)
CMS.registerPreviewTemplate('product', ProductPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('navigation', NavigationPreview)
