import Head from 'next/head'
import Bouton from '../components/Atomes/Bouton'

import { theme } from '../theme'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>eddocs</title>
      </Head>
      <main className="main" >
         <Bouton />
      </main>

    </div>
  )
}
