import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Sizi asla üzmeyecek, cebinizi yakmayacak, adam gibi adam
            yemek tarifleri için doğru yerdesiniz
          </h1>
          <p>
            Siz de dış güçlerin uyguladığı zamlardan bıkmış durumda,
            çocuğunuzun rızkını at yarışında piç etmiş iseniz
            bu siteye bayılacaksınız.
          </p>

          <p>Yağsız, doğalgazsız, soğansız yemek yapmaya hemen başlayın!</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/emine_erdogan_geniuskender_mutfakta.png"
          alt="emine erdogan ile yemek tarifleri"
          width={2300 / 2}
          height={1280 / 2}
        />
      </div>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/yagsizlogo.png"
          alt="yagsiz logomuz"
          width={2300 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  )
}

export default HomePage
