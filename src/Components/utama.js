import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';
import List from './list';

const Utama = () => (
  <Switch>
    <Route exact path="/" component={Beranda} />
    <Route exact path="/tentangsaya" component={TentangSaya} />
    <Route exact path="/karya" component={Karya} />
    <Route exact path="/kontak" component={Kontak} />
    <Route exact path="/list" component={List} />
  </Switch>
)

export default Utama;
