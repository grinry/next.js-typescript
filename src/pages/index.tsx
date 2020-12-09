import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 flex flex-col items-center flex-1">
        <h1 className="text-center">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-blue-600 hover:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-2xl my-6 text-center">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid grid-cols-2 gap-8 max-width-800 mt-12">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="border-t py-18 flex justify-center w-full">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-center items-center"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="w-16 h-16 ml-2" />
        </a>
      </footer>
    </>
  );
}
