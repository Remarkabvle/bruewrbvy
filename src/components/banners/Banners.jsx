import React from 'react'
import "./banner.scss"

const Banner = ({ title, desc, btn, item}) => {
    let listItem = item?.map((item) => (
        <li className='banner__item' key={item}><a href="#" className='banner__link'>{item}</a></li>
    ))
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='banner__wrapper'>
                        <div className='banner__top-info'>
                            <h2 className='banner__title'>{title}</h2>
                            <div className='banner__box'>
                                <ul className='banner__list'>
                                    {listItem}
                                </ul>
                            </div>
                        </div>
                        <div className='m'>
                            m
                        </div>
                        <div className='banner__bottom-info'>
                            <p className='banner__desc'>{desc}</p>
                            <button className='banner__btn'>{btn}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner