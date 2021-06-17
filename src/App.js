import React from 'react'
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="navbar-collapse">
          <nav class="stroke">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Beranda
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/tentangsaya">
                  Tentang Saya
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/karya">
                  Karya
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/kontak">
                  Kontak
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/list">
                  List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <div>
        <p><Utama/></p>
      </div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright <i class="fa fa-copyright"></i> 2020 All Rights Reserved by <b> Ferdi </b>
              </p>
            </div>
          </div>
        </div>
  </footer>
    </div>
  );
  }
}

export default App;
