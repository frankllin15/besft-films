import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        slidesToSlide: 2
    }
};


export default function MultiCarousel({ data }) {
    

    return (
        <>
             <Carousel
                style={{backgroundColor: 'red'}}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={6000}
            
                // transitionDuration={500}
                ssr={true}
                centerMode={true}
                containerClass="carousel-container"
                customTransition="transform 1000ms ease-in-out"
                infinite={true}>
                    
                {data.map((item, id) => (
                    <Card key={id} item={item} id={id}/>

                ))
                }
               
               {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
                 */}
            </Carousel>
    
        </>
    )
}