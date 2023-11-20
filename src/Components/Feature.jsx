import './Feature.css'
import fb from './fb.png'
import maps from './maps.png'
import about from './about.png'

export default function Feature(){

    return(
     < div class = "container marketing">
       
       <div class="row">
              <div class="col-lg-4">
              <img class="bd-placeholder-img rounded-circle" src={fb} alt="Facebook Logo" width="140" height="140" aria-label="Placeholder" focusable="false" />
              <h2 class="fw-normal">Facebook</h2>
                <p> To learn more about the school and to communicate them easier, click on the view details to connect with the academy.</p>
               <p><a class="btn btn-secondary" href="https://www.facebook.com/stlouisseacademy/" target="_blank">View details &raquo;</a></p>
            </div>
              <div class="col-lg-4">
              <img class="bd-placeholder-img rounded-circle" src={maps} alt="Facebook Logo" width="140" height="140" aria-label="Placeholder" focusable="false" />
              <h2 class="fw-normal">Location</h2>
                <p> To learn more about the location of the school and how to get there, click on the view details to know where.

                </p>
               <p><a class="btn btn-secondary" href="https://www.google.com/maps/place/St.+Louisse+Academy/@11.2519333,124.0005214,15z/data=!4m6!3m5!1s0x33a877ee56f14f3f:0xdab880fb584e5474!8m2!3d11.2519333!4d124.0005214!16s%2Fg%2F11mbxs63z_?entry=ttu" target="_blank">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
            <img class="bd-placeholder-img rounded-circle" src={about} alt="Facebook Logo" width="140" height="140" aria-label="Placeholder" focusable="false" />
            <h2 class="fw-normal">About</h2>
                <p> To learn more about the school and its mission towards the students, click on the view details to connect with the academy</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            </div>
     
     </div>

    )

}