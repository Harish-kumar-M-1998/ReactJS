// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F03%2Fapple-iphone-9-plus-rumors-000.jpg?w=960&cbr=1&q=90&fit=max",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ],
      quantity: 0
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://www.refurbished.store/cache/images/iphone-x-zilver-multiapple_1_600x600_BGresize_16777215-tj.png",
      "images": [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ],
      quantity: 0
  },
  {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://imageio.forbes.com/blogs-images/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.jpg?height=474&width=711&fit=bounds",
      "images": [
          "https://i.dummyjson.com/data/products/3/1.jpg"
      ],
      quantity: 0
  },
  {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://media.mobex.in/media/catalog/product/o/p/oppo_f19_pro_fantasy_purple_8gb_ram__1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
      "images": [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ],
      quantity: 0
  },
  {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://akm-img-a-in.tosshub.com/indiatoday/images/device/168329881660f4e8c22a47b-188x350_one_to_one.jpg?VersionId=fwXB1sX4pC__6._ZcjkjHtGKo0iHVTBY",
      "images": [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg"
      ],quantity: 0
  }
  ],
  totalQuantity: 0,
  totalAmount: 0
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increaseQuantity(state, action) {
      const { productId } = action.payload;
      const product = state.products.find(product => product.id === productId);
      if (product && product.stock > product.quantity) {
        product.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += product.price;
      }
    },
    decreaseQuantity(state, action) {
      const { productId } = action.payload;
      const product = state.products.find(product => product.id === productId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= product.price;
      }
    }
  }
});

export const { increaseQuantity, decreaseQuantity } = productSlice.actions;

export default configureStore({
  reducer: {
    products: productSlice.reducer
  }
});
