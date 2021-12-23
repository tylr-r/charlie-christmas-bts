import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Merry Christmas 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the BTS!" />
        <p className="description">
          The Fractal sequence has been created using the Mandelbrot equation:
        </p>
        <br />
        <b>z=z^7+c</b>
        <p>This is mirrored over both horizontally and vertically.</p>
      </main>

      <section className="main">
        <img src="/RenderSnap.png" className="img" />
      </section>

      <section className="downloads">
        <b>Downloads</b>
        <a href="/01CharlieChristmas.mp4"><p>Download the video</p></a>
        </section>

      <Footer />
    </div>
  );
}
