import React from 'react'
class Beranda extends React.Component {
  render() {
    return (<div>
      <section class="sec-main">
        <h2 class="beranda">
          Beranda
        </h2>
      </section>
      <main class="page-content">
        <div class="container">
          <h2 class="beranda2">
            Rekomendasi
          </h2>
          <hr/>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div class="card rounded-0 p-0 shadow-sm">
                <img src="./image/22.jpg" class="card-img-top rounded-0" alt="Angular pro sidebar"/>
                <div class="card-body text-center">
                  <h6 class="card-title">feugiat</h6>
                  <hr/>
                  <a href="">See More
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div class="card rounded-0 p-0 shadow-sm">
                <img src="./image/21.jpg" class="card-img-top rounded-0" alt="Angular pro sidebar"/>
                <div class="card-body text-center">
                  <h6 class="card-title">Angular Pro Sidebar</h6>
                  <hr/>
                  <a href="">See More
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>);
  }
}

export default Beranda;
