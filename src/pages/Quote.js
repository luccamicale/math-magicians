import '../modules-css/quote.css';
import libros from '../icons/libros.png';

const Quote = () => (
  <div className="main-container-quote">
    <div className="quote-container">
      <span className="span">
        Mathematics is not about numbers, equations, computations,
        or algorithms: it is about understanding.
        <hr style={{ marginLeft: '-30px' }} />
        <strong className="strong">- William Paul Thurston</strong>
      </span>
      <img src={libros} alt="libros" />
    </div>
  </div>
);

export default Quote;
