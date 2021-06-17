import React from 'react'

class Kontak extends React.Component {
  render() {
    return(
      <div>
          <section class="sec-main">
           <h2 class="kontak"> Kontak </h2>
           </section>

         <div class="container">
           <section class="kontak2">
              <i class="fa fa-envelope"></i> <a>ferdinaufal@gmail.com</a>
              <hr />
             <i class="fa fa-twitter"></i> <a href="">@ferdinaufal</a> <p />
             <hr />
             <i class="fa fa-instagram"></i> <a href="">@ferdinaufal</a>
           </section>
         </div>
      </div>
    )
  }
}

export default Kontak;
