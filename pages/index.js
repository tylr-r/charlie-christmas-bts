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
          The original fractal sequence has been created using the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Mandelbrot_set"
            target="_blank"
          >
            Mandelbrot
          </a>{' '}
          equation below, being mirrored both horizontally and vertically.
        </p>
        <br />
        <h2>z=z^7+c</h2>
        {/*  <p className="description">
          This is mirrored over both horizontally and vertically.
        </p> */}
      </main>

      <img src="/RenderSnap.png" className="img" />

      <section className="downloads">
        <p className="descritpion">
          <b>Music Base</b>
          <a href="https://youtu.be/XB8EAWKXHsw" target="_blank">
            <br />
            D.I.Y tuning - Vangelis - Blade Runner Blues 432Hz
          </a>
        </p>
        <p>
          <b>Downloads:</b>
          <br />
          <a href="/01CharlieChristmas.mp4" target="_blank" download>
            Download the fractal video
          </a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
