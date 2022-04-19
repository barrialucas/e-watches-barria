import Carousel from 'react-bootstrap/Carousel'
import TAG from "../../img/1.jpg"
import BULOVA from "../../img/2.jpg"
import TISSOT from "../../img/3.jpg"

export const Car=()=>{
    return(
    <div>
      <Carousel>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src={TAG}
            alt="tagheuer"
            height={"700px"}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src={BULOVA}
            alt="bulova"
            height={"700px"}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 tissot"
            src={TISSOT}
            alt="tissot"
            height={"700px"}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='d-flex justify-content-center my-5'>
        <i class="fas fa-chevron-down flecha__izq"></i>
        <h2 className='prod'>Todos los productos!</h2>
        <i class="fas fa-chevron-down flecha__der"></i>
      </div>
     
    </div>
    )
}