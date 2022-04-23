import Head from "next/head";
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import Styles from '../styles/Home.module.css'
import Image from "next/image";
import heroImage from "../public/img/pexels-thành-trần-3788363.webp"

import { loadStripe } from "@stripe/stripe-js";
export default function Home(props) {

  const products= props.products;

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  return (
   <>
      <Head>
      <meta charSet="UTF-8" />
      <title>Summit Outdoors Outfitters</title>
      </Head>
      <div className={Styles.container}>
      <PageTitle title="Summit Outdoors Outfitters" tag="Preparing you for all of life's adventures"/>
        <div className={Styles.hero}>
          <Image className={Styles.heroimage} src={heroImage} alt="man on summit" width={1920} height={1112} priority={true} />
        </div>
        <main className={Styles.main}>
          <h2 className={Styles.h2}>Featured Products</h2>
          {products.map(product =><ProductCard key={product.uid} product={product} />)}
        </main>
      </div>
   </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://storefront-c6754-default-rtdb.firebaseio.com/products.json');
  const productData = await res.json();
  const products = Object.values(productData);
  return{
    props:{
      products
    },
    revalidate:5
  }
}
