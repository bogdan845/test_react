import React from "react";
import {AboutUsItem} from "../../../../utils/interface/aboutUs/AboutUsItem";
import {ABOUT_US} from "../../../../utils/constants/aboutUs/aboutUs";

export function AboutUs() {

    const renderAboutUsItems = ABOUT_US.map((item, index) => (
        <AboutUsItem
            key={index}
            img={item.img}
            label={item.label}
        />
    ))

    return (
        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="about-us__img-wrapper">
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="about-us__content-wrapper">
                            <h3 className="about-us__title">
                                About us
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias fugit impedit laboriosam
                                possimus sint veniam?
                            </p>
                        </div>

                        <div className="row pt-3 mx-0">
                            {renderAboutUsItems}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}