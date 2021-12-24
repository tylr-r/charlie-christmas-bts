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
        <img src="/TR_Logo-600x600.png" className="logo" />
        <Header title="Welcome to the BTS!" />
        <p className="description">
          The Fractal sequence has been created using the Mandelbrot equation:
        </p>
        <br />
        <h2>z=z^7+c</h2>
        <p className="description">This is mirrored over both horizontally and vertically.</p>
      </main>

        <img src="/RenderSnap.png" className="img" />

      <section className="downloads">
        <b>Downloads</b>
        <a href="/01CharlieChristmas.mp4" target="_blank" download><p>Download the video</p></a>
        </section>

      <Footer />
    </div>
  );
}
