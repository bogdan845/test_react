import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {gallerySelector} from "../../../../store/gallery/gallerySelector";
import {gallery} from "../../../../store/gallery/sagas/galleryActions";
import {GalleryModel} from "../../../../utils/models/Gallery/GalleryModel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export function Gallery() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(gallery());
    }, [dispatch]);


    const {data} = useSelector(gallerySelector);
    const carouselResponsive = {
        desktop: {
            breakpoint: {max: 3000, min: 960},
            items: 5
        },
        tablet: {
            breakpoint: {max: 960, min: 464},
            items: 3
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    }


    const renderGallery = data.map((item, index) => {
        const slide = new GalleryModel(item);
        return (
            <img key={slide.id} src={slide.img} alt=""/>
        )
    });


    return (
        <section className="gallery">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <h2 className="gallery__title">Our gallery</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus ex in laborum
                            magnam minus perspiciatis, temporibus. Ab cumque dolor dolore, eveniet fuga illum nam quas
                            reiciendis, velit veniam voluptates?
                        </p>
                    </div>
                </div>
            </div>
            <div className="gallery-box">
                <Carousel
                    responsive={carouselResponsive}
                    infinite={true}
                    swipeable={true}
                >
                    {renderGallery}
                </Carousel>
            </div>
        </section>

    )
}