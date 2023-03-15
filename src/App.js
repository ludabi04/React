import logo from './logo.svg';
import './App.css';

function App() {
  const productos = ['remera', 'pantalon', 'zapatillas'];
  const ids = [0, 1, 2]
  const categorias = [
    {idCategoria: 435,
    nombreCategoria : 'Verano'
  }, {
    idCategoria: 436,
    nombreCategoria: 'Invierno'
  }]
  return (
    <div className="App">
      <div>
        <ul>
          {
            ids.map(
              (idProducto) => {
                <li>
                  {productos[idProducto]}
                </li>
              }
            )
          }
        </ul>

      </div>
    </div>
  );
}

export default App;

