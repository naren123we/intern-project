import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const CarouselPage = () => {
      return (
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} transitionTime={1000} useKeyboardArrows={true}>
                  <div>
                        <img
                              className='w-[100vw]'
                              src='https://media.istockphoto.com/id/187241544/photo/black-rice.jpg?b=1&s=170667a&w=0&k=20&c=mdaeYHk5djrreikzEbnRCDQcNuZiNewz7LOYAdIsYlo='
                        />
                  </div>
                  <div>
                        <img
                              className='w-[100vw]'
                              src='https://media.istockphoto.com/id/1434453585/photo/close-up-of-black-rice-in-the-field.jpg?b=1&s=170667a&w=0&k=20&c=hC-qxYIJg1nmJsYCjnXjJW2Ssk7OPjz4sCJsL-mN3LE='
                        />
                  </div>
                  <div>
                        <img
                              className='w-[100vw]'
                              src='https://media.istockphoto.com/id/1026396226/photo/black-indian-salt-crystals-and-powder.jpg?b=1&s=170667a&w=0&k=20&c=l-4PFVlmgoeHnIkjuqZZHeGoKmqei7uCgmd14X1wfxg='
                        />
                  </div>
            </Carousel>
      );
};

export default CarouselPage;