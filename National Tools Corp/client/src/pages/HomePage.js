import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox, Radio } from 'antd'
import { Prices } from '../components/Prices'
import { useCart } from '../context/cart'
import axios from 'axios'
import toast from 'react-hot-toast'
import Layout from './../components/Layout/Layout'
import { AiOutlineReload } from 'react-icons/ai'
import Banner from '../product-images/A32.jpg'
import wallpaper from '../product-images/wallpaper.jpg'
import Amazon from '../product-images/amazon.webp'
import '../styles/Homepage.css'

const HomePage = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useCart()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [checked, setChecked] = useState([])
  const [radio, setRadio] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category')
      if (data?.success) {
        setCategories(data?.category)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCategory()
    getTotal()
  }, [])
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`)
      setLoading(false)
      setProducts(data.products)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get('/api/v1/product/product-count')
      setTotal(data?.total)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (page === 1) return
    loadMore()
  }, [page])
  //load more
  const loadMore = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`)
      setLoading(false)
      setProducts([...products, ...data?.products])
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked]
    if (value) {
      all.push(id)
    } else {
      all = all.filter((c) => c !== id)
    }
    setChecked(all)
  }
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts()
  }, [checked.length, radio.length])

  useEffect(() => {
    if (checked.length || radio.length) filterProduct()
  }, [checked, radio])

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post('/api/v1/product/product-filters', {
        checked,
        radio,
      })
      setProducts(data?.products)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout title={'National Tools Corp '}>
      {/* banner image */}
      <div className="banner-logo">
        <img
          // src="/images/banner.png"
          src={wallpaper}
          className="banner-img"
          alt="bannerimage"
          //  width={'100%'}
          // height={'500px'}
        />
      </div>

      {/* banner image */}

      {/* Card */}
      <h1 className="text-center">Online Services</h1>
      {/* <div className="container-fluid">
        <div className="row justify-content-centre">
          <div className="col-4">
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title">
                  Make your <span>choice</span> right now!
                </h3>
                <p className="card-hover__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia quisquam doloremque nostrum laboriosam, blanditiis
                  libero corporis nulla a aut?
                </p>
                <a href="#" className="card-hover__link">
                  <span>Learn How</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
                <h4>
                  Learn <span>now</span> and get <span>40%</span> discount!
                </h4>
              </div>
              <img
                src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                alt
              />
            </div>
          </div>

          <div className="col-4">
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title">
                  Make your <span>choice</span> right now!
                </h3>
                <p className="card-hover__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia quisquam doloremque nostrum laboriosam, blanditiis
                  libero corporis nulla a aut?
                </p>
                <a
                  href="https://www.w3schools.com"
                  className="card-hover__link"
                >
                  <span>Learn How</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
                <h4>
                  Learn <span>now</span> and get <span>40%</span> discount!
                </h4>
              </div>
              <div className="online-amazon">
                <img
                  src="https://www.seekpng.com/png/detail/20-208910_amazon-ico-file-amazon-square-logo-png.png"
                  alt
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title">
                  Make your <span>choice</span> right now!
                </h3>
                <p className="card-hover__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia quisquam doloremque nostrum laboriosam, blanditiis
                  libero corporis nulla a aut?
                </p>
                <a href="#" className="card-hover__link">
                  <span>Learn How</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
                <h4>
                  Learn <span>now</span> and get <span>40%</span> discount!
                </h4>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png"
                alt
              />
            </div>
          </div>
        </div>
      </div> */}

      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                src="https://business.amazon.com/assets/global/images/social/homepage-social-graphic2.jpg.transform/1450x664/image.jpg"
                alt
              />
            </figure>
            <div className="article-body">
              <h2>Amzaon Bussiness</h2>
              <p>
              Amazon Due to the basic functions hand tools support in businesses it is necessary to keep a few essential hand tools onsite.
              </p>
              <a href="https://www.amazon.in/National-Clamp-Swivel-Quality-Weight/dp/B0BQHWYNM8/ref=sr_1_1?crid=2Z9989HE1LROG&keywords=national+baby+vice&qid=1681396947&sprefix=national+baby+vice%2Caps%2C436&sr=8-1" className="read-more">
                CLICK ME{' '}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-2015-present.jpg"
                alt
              />
            </figure>
            <div className="article-body">
              <h2>Flipkart</h2>
              <p>
              Flipkart Business provides a vast selection of hand tools for maintenance, repair, & operations (MRO) application. Due to the basic functions hand tools support in businesses it is necessary to keep a few essential hand tools onsite.
              </p>
              <a href="https://www.flipkart.com/nationaltools-baby-vice-bench-type-swivel-base-weight-875gm-size-70mm-multi-vise-tool/p/itm186d16073404f?pid=MVTGMY3CHVA9D5XS&lid=LSTMVTGMY3CHVA9D5XS4QYVBW&marketplace=FLIPKART&q=baby+vice&store=search.flipkart.com&srno=s_2_43&otracker=search&otracker1=search&fm=Search&iid=7f75ca2d-07d1-4d09-b33f-8b745cc3d3c5.MVTGMY3CHVA9D5XS.SEARCH&ppt=sp&ppn=sp&ssid=ja8kjwbzps0000001681396377773&qH=ba45bc869e935ca0" className="read-more">
                CLICK ME{' '}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                src="https://pbs.twimg.com/profile_images/1145744319250198533/tr7UcEpX_400x400.png"
                alt
              />
            </figure>
            <div className="article-body">
              <h2>Ebay</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className="read-more">
                CLICK ME{' '}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* Card End */}

      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>

          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p])
                        localStorage.setItem(
                          'cart',
                          JSON.stringify([...cart, p]),
                        )
                        toast.success('Item Added to cart')
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault()
                  setPage(page + 1)
                }}
              >
                {loading ? (
                  'Loading ...'
                ) : (
                  <>
                    {' '}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
