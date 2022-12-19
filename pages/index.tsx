import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Terapia para todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-screen flex-1 flex-col items-center justify-start sm:px-20 text-center bg-[#37A192]">
        <h1 className="text-4xl font-bold pt-10 sm:pt-20 sm:text-6xl text-white">
          Terapia para{' '}
          <span className="text-blue-900">
            todos
          </span>
        </h1>
        <div className="mt-12 flex w-full max-w-full h-[70vh] sm:h-[65vh] flex-row items-center justify-center">
          <iframe 
            src='https://v9zdn9aq0tn.typeform.com/to/FiKaxBTx'
            key={'formulario-principal'}
            height="100%"
            width="100%"
            className='rounded-2xl'
          />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="flex items-center justify-center gap-2 font-light">
          Você não precisa fazer tudo sozinha, estamos aqui.
        </p>
      </footer>
    </div>
  )
}

export default Home
