import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Buy from '../components/Buy';
import Footer from '../components/Footer'
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Earthlly- Sustainable kit App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='custom-img1'>
        <Hero heading='The Sustainable Living Starter Kit' message='The Earthlly sustainable living starter kit will be your perfect partner.' />
      </div>
      <Slider slides={SliderData} />
      <Buy/>
      <Footer/>
    </div>
  );
}