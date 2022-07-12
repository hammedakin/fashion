import { useState } from 'react';
import './Testing.css'



const Testing = () => {

  // the value that holds the category
  const [key, setkey] = useState('');


  // the array of items
  const item = [
    {

      id: 1,
      title: "Badachro, UK",
      category: "beach",
      price: "199 CHF",
      description: "5,754 kilometers away Nov 12-17"
    },

    {
      id: 2,
      title: "Sali Croatia",
      category: "beach",
      description: "4,316 kilometers away Sep 19 – 24",
      price: "147 CHF"

    },

    {
      id: 3,
      title: "Murter, Croatia",
      category: "beach",
      description: "4,323 kilometers away Oct 16 – 23",
      price: "159 CHF"

    },
    {
      id: 13,
      category: "artic",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/4_arctic.webp?alt=media&token=a83fa3cd-d9a2-43dd-a7f9-6ee884b3d87b",
      title: "Vis, Croatia",
      description: "4,262 kilometers away Jul 13 – 19",
      price: "1,520 CHF"
    },
    {
      id: 14,
      category: "artic",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/5_arctic.webp?alt=media&token=c66aacf3-abc8-4315-8bcb-47ad4bbd161d",
      title: "Angra dos Reis, Brazil",
      description: "6,135 kilometers away Jul 22 – 27",
      price: "681 CHF"


    },
    {
      id: 15,
      category: "artic",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/8_arctic.webp?alt=media&token=174155d7-2dd8-4d84-912f-cf5857164f13",
      title: "Općina Lastovo, Croatia",
      description: "4,236 kilometers away Sep 1 – 7",
      price: "124 CHF"


    },
    {
      id: 22,
      category: "breakfast",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/4_breakfast.webp?alt=media&token=30e9991d-0dc6-4c5c-892b-326c81f71678",
      title: "Vis, Croatia",
      description: "4,262 kilometers away Jul 13 – 19",
      price: "1,520 CHF",
    },
    {
      id: 23,
      category: "breakfast",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/5_breakfast.webp?alt=media&token=18e4654f-20f2-434b-8573-7c00d7d4620c",
      title: "Angra dos Reis, Brazil",
      description: "6,135 kilometers away Jul 22 – 27",
      price: "681 CHF"

    },
    {
      id: 24,
      category: "breakfast",
      img: "https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/5_breakfast.webp?alt=media&token=18e4654f-20f2-434b-8573-7c00d7d4620c",
      title: "Općina Lastovo, Croatia",
      description: "4,236 kilometers away Sep 1 – 7",
      price: "124 CHF"


    },


  ]
  // the array of items

  // the array of catergory
  const allcategory = [
    { name: 'All', key: '', image: "" },
    { name: 'Beach', key: 'beach', image: "" },
    { name: 'Artic', key: 'artic', image: "" },
    { name: 'Brealfast', key: 'breakfast', image: "" },
  ]

  // the array of catergory



  // the function to set the filter key
  function filter(key) {
    setkey(key)
  }
  // the function to set the filter key


  // The filtering and mapping of items
  const filtered = item.filter((x) => x.category
    .includes(key.toLowerCase()))
    .map(
      ({ id, category, img, price, title, description }, i) => {
        return (
          <div className='Cards'>
            <img src={img} alt='' />
            <div>
              <h2>{title}</h2>
              <h4>  Category: {category}</h4>
              <h4>{description}</h4>
              <h3>{price}</h3>
            </div>
          </div>)
      }
    )
  // The filtering and mapping of items


  // The mapping of category of each access

  const category = allcategory.map(({ name, key }, i) => {
    return (
      <button className='btn'
        onClick={() => filter(key)}
      >
        {name}
      </button>
    )
  })

  // The mapping of category of each access


  return (
    <>
      {/* All the Category */}

      <div className="testing">
        <h1>AIRBNB</h1>
        <div style={{ textAlign: "center" }}>
          {category}
        </div>

        {/* All the Category */}
        {/* All the Category */}


        {/* All the Items */}
        <div className="row">
          {filtered}
        </div>
        {/* {result} */}

      </div>

      {/* All the Items */}




    </>
  );
}

export default Testing;