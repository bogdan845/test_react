import React from "react";

interface IProps {
    title: string;
}

export function Placeholder({title}: IProps) {
    return (
        <section className="r-placeholder">
            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <h2 className="r-placeholder__title">{title}</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            Eaque ipsa maxime odio officia placeat quibusdam suscipit!
                            Aliquid asperiores doloribus eveniet hic ipsum mollitia nihil
                            pariatur perspiciatis porro ut. Beatae, ea.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}