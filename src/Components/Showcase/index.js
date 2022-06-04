import ArticleCard from '../ArticleCard'
import Footer from '../Footer'
import Header from '../Header'

const products = [
    {
      id: 1,
      name: "Café rarísimo",
      image:
        "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
      direction: 'Pavas',
    },
    {
      id: 2,
      name: "Café rarísimo",
      image:
        "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
      direction: 'Pavas',
    },
    {
      id: 3,
      name: "Café rarísimo",
      image:
        "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
      direction: 'Pavas',
    },
    {
      id: 4,
      name: "Café rarísimo",
      image:
        "https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg",
      direction: 'Pavas',
    },
    
  ];

export default function index() {

    return (
        <>
            <Header />
            <div className='w-full flex justify-end flex-wrap gap-8 sm:px-6 md:px-8 lg:px-16 py-4'>
                {
                    products.map(item => <ArticleCard imageSource={item.image} id={item.id} name={item.name} direction={item.direction} key={`article_${item.id}`} /> )
                }
            </div>
            <Footer />
        </>
    )
}
