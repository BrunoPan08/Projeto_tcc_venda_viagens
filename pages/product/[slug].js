import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/stateContext';

const ProductDetails = ({product, products}) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const { decreaseQty, increaseQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image[index])} className='product-detail-image'/>
          </div>
          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img 
                key={i} 
                src={urlFor(item)} 
                className={i === index ? 'small-image selected-image' : 'small-image'} 
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
          </div>
          <p>
            (20)
          </p>
          <h4>Detalhes: </h4>
          <p>{details}</p>
          <p className='price'>R${price}</p>
          <div className='quantity'>
            <h3>Quantidade de pessoas:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decreaseQty}><AiOutlineMinus/></span>
              <span className='num' >{qty}</span>
              <span className='plus' onClick={increaseQty}><AiOutlinePlus/></span>
            </p>
          </div>
          <div className="date-pickers">
            <h3>Escolha as datas:</h3>
            <div>
              <p>Data de ida:</p>
              <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} />
            </div>
            <div>
              <p>Data de chegada:</p>
              <DatePicker selected={arrivalDate} onChange={(date) => setArrivalDate(date)} />
            </div>
          </div>
          <div className="buttons">
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == 'product'] {
    slug {
      current
    }
  }
  `;
  const product = await client.fetch(query);

  const paths = product.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ( { params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  console.log(product)

  return {
    props: {products, product}
  }
}

export default ProductDetails