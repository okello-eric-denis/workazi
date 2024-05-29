import Link from "next/link";
import React, { useState } from 'react';
import App from "next/app";
import { addToProduct, specificItem } from '../../redux/features/productSlice';
const categoryData = [
   {
      id: 1,
      img: 'assets/img/icon/catagory/website.jpg',
      title: 'Web development',
      desc:"Customise your website with Us"
   },
   {
      id: 2,
      img: 'assets/img/icon/catagory/apps.jpg',
      title: 'App development',
      desc:"Get a best responsive App for your business"
   },
   {
      id: 3,
      img: 'assets/img/icon/catagory/logo.jpg',
      title: 'Logo Designing',
      desc:"Build your Brand"
   },
   {
      id: 4,
      img: 'assets/img/icon/catagory/brochures.jpg',
      title: 'Brochures',
      desc:"Setup your business with brochures"
   },
   {
      id: 5,
      img: 'assets/img/icon/catagory/flyers.jpg',
      title: 'Custom Flyers',
      desc:"Advertise your business with custom flyers"
   },
   {
      id: 6,
      img: 'assets/img/icon/catagory/branding.jpg',
      title: 'Branding',
      desc:"Customise your website with Us"
   },
]
const handleCategory = (category) => {
   const newProduct = products.filter(product => product.category === category);
   setFilterProducts(newProduct);
 }
const CategoryArea = () => {
   return (
      <>
         <section className="category__area pt-105 pb-135" id="CategoryArea">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title"  >Our Design services</h2>
                        {/*<p>Find over 7000 website templates and themes.</p>*/}
                        <p>The goal of this event is to bring leaders in information technology together fromacross the globe.</p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {/*
                     categoryData.map((category, index) => {
                        return <div key={index} className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">/}
                        <div className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-2">{/*category__icon mb-25/}
                                 <a href="/product"><img src={category.img} alt="" /></a>
                              </div>
                              <div className="category__content">
                                 <h3 className="category__title">
                                   {//} <Link href="./product"><a>{category.title}</a></Link>
                                 </h3>
                                 <p>
                                    {category.desc}
                                 </p>
                                 <Link href="">
                                    <a className="link-btn">
         
                                    <i className="far fa-long-arrow-right"></i>
                                      
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>*/}
                                  {/*Web development*/}
                        <div className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-2">{/*category__icon mb-25*/}
                                 <a href="/product"><img src="assets/img/icon/catagory/website.jpg" alt="" /></a>
                              </div>
                              <div className="category__content">
                                 <h3 className="category__title">
                                   {/**/} <Link href="./product"><a>Web development</a></Link>
                                 </h3>
                                 <p>
                                 Customise your website with Us
                                 </p>
                                 <Link href="">
                                    <a className="link-btn">
         
                                    <i className="far fa-long-arrow-right"></i>
                                      
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>

                                         {/*Mobile App*/}
                        <div className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-2">{/*category__icon mb-25*/}
                                 <a href="/product"><img src='assets/img/icon/catagory/apps.jpg' alt="" /></a>
                              </div>
                              <div className="category__content">
                                 <h3 className="category__title">
                                   {/**/} <Link href="./product"><a>App development</a></Link>
                                 </h3>
                                 <p>
                                 Get a best responsive App for your business
                                 </p>
                                 <Link href="">
                                    <a className="link-btn">
         
                                    <i className="far fa-long-arrow-right"></i>
                                      
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                                       {/*Logo*/}
                        <div className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-2">{/*category__icon mb-25*/}
                                 <a href="/product"><img src='assets/img/icon/catagory/logo.jpg' alt="" /></a>
                              </div>
                              <div className="category__content">
                                 <h3 className="category__title">
                                   {/**/} <Link href="./product"><a>Logo Design</a></Link>
                                 </h3>
                                 <p>
                                 Build your Brand
                                 </p>
                                 <Link href="">
                                    <a className="link-btn">
         
                                    <i className="far fa-long-arrow-right"></i>
                                      
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>

                                       {/*Brochures*/}
                                       <div className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-2">{/*category__icon mb-25*/}
                                 <a href="/product"><img src='assets/img/icon/catagory/brochures.jpg' alt="" /></a>
                              </div>
                              <div className="category__content">
                                 <h3 className="category__title">
                                   {/**/} <Link href="./product"><a>Brochures</a></Link>
                                 </h3>
                                 <p>
                                 Setup your business with brochures
                                 </p>
                                 <Link href="">
                                    <a className="link-btn">
         
                                    <i className="far fa-long-arrow-right"></i>
                                      
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>

                        
                                       {/*Custom Flyers*/}
                                       <div className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-2">{/*category__icon mb-25*/}
                                 <a href="/product"><img src='assets/img/icon/catagory/flyers.jpg' alt="" /></a>
                              </div>
                              <div className="category__content">
                                 <h3 className="category__title">
                                   {/**/} <Link href="./product"><a>Custom Flyers</a></Link>
                                 </h3>
                                 <p>
                                 Build your Brand
                                 </p>
                                 <Link href="">
                                    <a className="link-btn">
         
                                    <i className="far fa-long-arrow-right"></i>
                                      
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>

                       
                                       {/*Branding*/}
                                       <div className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">
                           <div className="category__item transition-3 text-center white-bg mb-30 wow fadeInUp" data-wow-delay=".3s" >
                              <div className="category__icon mb-2">{/*category__icon mb-25*/}
                                 <a href="/product"><img src='assets/img/icon/catagory/branding.jpg' alt="" /></a>
                              </div>
                              <div className="category__content">
                                 <h3 className="category__title">
                                   {/**/} <Link href="./product"><a>Branding</a></Link>
                                 </h3>
                                 <p>
                                 Customise your website with Us
                                 </p>
                                 <Link href="">
                                    <a className="link-btn">
         
                                    <i className="far fa-long-arrow-right"></i>
                                      
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>
            

               </div>
               {/*<div className="row">
                  <div className="col-xxl-12">
                     <div className="category__more mt-30 text-center">
                        <Link href="/product">
                           <a className="m-btn m-btn-2"> <span></span> View all categories</a>
                        </Link>
                     </div>
                  </div>
               </div>*/}
            </div>
         </section>
      </>
   );
};

export default CategoryArea;