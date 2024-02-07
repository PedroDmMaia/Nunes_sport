import BarraLateral from '../../containers/BarraLateral'
import ListaProdutos from '../../containers/Lista_produtos'

const Home = () => (
  <>
    <BarraLateral mostraBarra={true} />
    <ListaProdutos />
  </>
)

export default Home
