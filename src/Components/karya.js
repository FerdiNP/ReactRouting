import React from 'react'

class Karya extends React.Component {
  render() {
    return (<div>
      <section class="sec-main">
        <h2 class="karya">
          Karya
        </h2>
      </section>
      <div class="container">
        <section class="home-cards">
          <div>
            <img src="./image/5.jpg" alt=""/>
            <h3> Karya 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#"> Lihat <i class="fa fa-chevron-right"></i></a>
          </div>
          <div>
            <img src="./image/4.jpg" alt=""/>
            <h3> Karya 2</h3>
            <p>
              Eu mi bibendum neque egestas congue quisque egestas diam. Id donec ultrices tincidunt arcu non sodales neque sodales ut.
            </p>
            <a href="#">Lihat <i class="fa fa-chevron-right"></i></a>
          </div>
          <div>
            <img src="./image/6.jpg" alt=""/>
            <h3> Karya 3</h3>
            <p>
               Duis convallis convallis tellus id. Eu ultrices vitae auctor eu augue ut. Fringilla urna porttitor rhoncus dolor purus non.
            </p>
            <a href="#">Lihat <i class="fa fa-chevron-right"></i></a>
          </div>
          <div>
            <img src="./image/7.jpg" alt=""/>
            <h3>Karya 4</h3>
            <p>
              Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.
            </p>
            <a href="#">Lihat <i class="fa fa-chevron-right"></i></a>
          </div>
        </section>
      </div>
    </div>)
  }
}

export default Karya;
