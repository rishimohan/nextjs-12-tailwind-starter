import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-200 to-pink-200 ">
          <div>
            <h1 className="font-black text-7xl">Make something great!</h1>
            <ul className="mt-10 space-y-2 font-mono text-4xl ">
              <li>- Next.js</li>
              <li>- TailwindCSS</li>
              <li>- SASS</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
