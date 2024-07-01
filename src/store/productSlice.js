import { createSlice } from "@reduxjs/toolkit";


const initialState ={
  products: [
    {
      id: 1,
      name: "Sunset Fedora",
      image: "1.jpg",
      description: "A stylish fedora with sunset hues, perfect for evening strolls.",
      completeDetails: "The Sunset Fedora is crafted from premium wool, ensuring both durability and comfort. The hat features a unique gradient pattern that mimics the beautiful hues of a sunset, transitioning from deep orange to soft purple. It is lightweight, making it perfect for long wear, and includes a breathable inner lining to keep your head cool. The hat's wide brim offers excellent sun protection, making it ideal for both casual and formal occasions. Whether you're attending an outdoor event or taking a leisurely walk, the Sunset Fedora adds a touch of elegance and style. Its classic design is enhanced with a modern twist, making it a versatile accessory for any wardrobe. Additionally, the hat is water-resistant, providing added protection against unexpected weather changes. The adjustable inner band ensures a snug and comfortable fit for various head sizes.",
      originalPrice: 49.99,
      discountPrice: 39.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 2,
      name: "Classic Panama",
      image: "2.jpg",
      description: "A classic Panama hat for a timeless look.",
      completeDetails: "The Classic Panama is handwoven from high-quality straw, offering a blend of durability and breathability. This hat is a quintessential summer accessory, perfect for shielding your face from the sun while keeping you cool. Its timeless design features a broad brim and a pinched front crown, adding a touch of sophistication to any outfit. The lightweight construction ensures comfort during extended wear, while the tightly woven straw provides ample protection against harmful UV rays. The hat is finished with a sleek black ribbon, giving it a polished and refined appearance. Ideal for outdoor events, beach outings, and garden parties, the Classic Panama is versatile enough to complement both casual and formal attire. Its natural color and simple yet elegant design make it a staple piece in any wardrobe. The hat is also easy to maintain, requiring only a gentle wipe with a damp cloth to keep it looking pristine. With its blend of style and functionality, the Classic Panama is an investment in timeless fashion.",
      originalPrice: 59.99,
      discountPrice: 47.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 3,
      name: "Vintage Trilby",
      image: "3.jpg",
      description: "A vintage trilby hat with a modern twist.",
      completeDetails: "This Trilby features a short brim and a distinctive band, making it a fashionable accessory for any occasion. Made from soft felt, it ensures all-day comfort. The Vintage Trilby is perfect for both casual outings and formal events. Its classic design is enhanced by modern materials and construction techniques, ensuring durability and style. The hat is available in a variety of colors to match any outfit. It includes a moisture-wicking inner band to keep you cool and dry, even on hot days. The brim provides just the right amount of shade, making it ideal for sunny days. This hat is also crushable and packable, so you can take it with you wherever you go without worrying about losing its shape. Whether you're dressing up for a night out or heading to a casual get-together, the Vintage Trilby is a versatile addition to your wardrobe.",
      originalPrice: 45.99,
      discountPrice: 36.79,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 4,
      name: "Beachcomber Straw Hat",
      image: "4.jpg",
      description: "Perfect for beach days, this straw hat provides excellent sun protection.",
      completeDetails: "Crafted from tightly woven straw, the Beachcomber Straw Hat is lightweight and breathable, ensuring comfort during long wear. The wide brim offers maximum shade and sun protection, making it ideal for beach outings and outdoor activities. The hat's natural color and simple design make it easy to pair with any summer outfit. It features an adjustable chin strap to keep it secure on windy days. The inner band is lined with a soft fabric for added comfort. This hat is also packable, so you can easily take it with you on your travels without worrying about damaging it. The Beachcomber Straw Hat is not only stylish but also functional, providing protection from harmful UV rays. It's easy to clean, requiring just a gentle wipe with a damp cloth. Whether you're lounging by the pool or exploring new places, this hat is a must-have accessory for the summer.",
      originalPrice: 34.99,
      discountPrice: 27.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 5,
      name: "Urban Snapback",
      image: "5.jpg",
      description: "An urban snapback hat for a trendy street style.",
      completeDetails: "The Urban Snapback is made from durable cotton, ensuring long-lasting wear. It features a flat brim and an adjustable strap for a perfect fit. The bold design makes it a standout accessory for any casual outfit. This hat is available in a variety of colors and designs, so you can choose the one that best matches your style. The breathable fabric ensures comfort, even on hot days. The Urban Snapback is perfect for everyday wear, whether you're heading to the gym, running errands, or just hanging out with friends. The hat's structured design helps it maintain its shape, while the adjustable strap allows for a custom fit. It's easy to care for, requiring just a gentle hand wash to keep it looking fresh. With its combination of style and comfort, the Urban Snapback is a must-have for any wardrobe.",
      originalPrice: 29.99,
      discountPrice: 23.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 6,
      name: "Elegant Cloche",
      image: "6.jpg",
      description: "An elegant cloche hat for a sophisticated look.",
      completeDetails: "The Elegant Cloche is made from high-quality felt, ensuring both durability and comfort. It features a decorative ribbon, adding a touch of vintage charm to any outfit. This hat is perfect for formal events, parties, and other special occasions. The cloche design is timeless, offering a sophisticated look that never goes out of style. The hat is available in a variety of colors, so you can choose the one that best matches your outfit. It includes a soft inner lining for added comfort. The brim provides just the right amount of shade, making it ideal for sunny days. The Elegant Cloche is easy to care for, requiring just a gentle wipe with a damp cloth to keep it looking pristine. With its blend of style and functionality, this hat is a versatile addition to any wardrobe. Whether you're dressing up for a special occasion or just want to add a touch of elegance to your everyday look, the Elegant Cloche is the perfect choice.",
      originalPrice: 55.99,
      discountPrice: 44.79,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 7,
      name: "Explorer's Safari Hat",
      image: "7.jpg",
      description: "A durable safari hat for all your outdoor adventures.",
      completeDetails: "The Explorer's Safari Hat is crafted from sturdy canvas, offering excellent durability and sun protection. It's perfect for hiking, camping, and exploring. The hat features a wide brim and a breathable mesh crown, ensuring comfort during long wear. It includes an adjustable chin strap to keep it secure on windy days. The inner band is lined with moisture-wicking fabric to keep you cool and dry. This hat is also packable, so you can easily take it with you on your travels without worrying about damaging it. The Explorer's Safari Hat is not only functional but also stylish, with a classic design that complements any outdoor outfit. It's easy to clean, requiring just a gentle wipe with a damp cloth. Whether you're exploring the wilderness or just spending time outdoors, this hat is a must-have accessory for any adventurer.",
      originalPrice: 39.99,
      discountPrice: 31.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 8,
      name: "Winter Beanie",
      image: "8.jpg",
      description: "A cozy beanie to keep you warm during the cold months.",
      completeDetails: "The Winter Beanie is made from soft, knitted wool, ensuring both warmth and comfort. It features a snug fit to keep out the chill, making it perfect for cold weather. This beanie is available in various colors, so you can choose the one that best matches your winter wardrobe. The hat includes a fold-over cuff for added warmth and style. It's lightweight and breathable, ensuring comfort during extended wear. The Winter Beanie is perfect for outdoor activities, such as skiing, snowboarding, and hiking. It's also great for everyday wear, keeping you warm and stylish during the winter months. The hat is easy to care for, requiring just a gentle hand wash to keep it looking fresh. With its combination of style and functionality, the Winter Beanie is a must-have accessory for the winter season.",
      originalPrice: 19.99,
      discountPrice: 15.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 9,
      name: "Retro Baseball Cap",
      image: "9.jpg",
      description: "A retro baseball cap for a sporty look.",
      completeDetails: "The Retro Baseball Cap features a curved brim and an adjustable strap for a comfortable fit. Made from durable cotton, this cap ensures long-lasting wear. The vintage design adds a touch of nostalgia to any casual outfit, making it perfect for everyday wear. This hat is available in a variety of colors and designs, so you can choose the one that best matches your style. The breathable fabric ensures comfort, even on hot days. The cap's structured design helps it maintain its shape, while the adjustable strap allows for a custom fit. It's easy to care for, requiring just a gentle hand wash to keep it looking fresh. Whether you're heading to a game, running errands, or just hanging out with friends, the Retro Baseball Cap is a versatile addition to your wardrobe. Its blend of style and comfort makes it a must-have accessory for any casual outfit.",
      originalPrice: 24.99,
      discountPrice: 19.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 10,
      name: "Summer Visor",
      image: "10.jpg",
      description: "A lightweight visor to keep you cool and shaded.",
      completeDetails: "The Summer Visor is perfect for outdoor activities, providing excellent sun protection while keeping you cool. Made from breathable fabric, this visor ensures comfort during long wear. It features an adjustable strap for a secure fit, making it ideal for sports and beach outings. The visor's wide brim provides ample shade, protecting your face from harmful UV rays. It's lightweight and packable, so you can easily take it with you on your travels. The Summer Visor is available in a variety of colors and designs, so you can choose the one that best matches your style. It's easy to care for, requiring just a gentle hand wash to keep it looking fresh. Whether you're playing tennis, golfing, or just lounging by the pool, this visor is a must-have accessory for the summer. Its blend of style and functionality makes it a versatile addition to any wardrobe.",
      originalPrice: 14.99,
      discountPrice: 11.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 11,
      name: "Rainy Day Bucket Hat",
      image: "11.jpg",
      description: "A waterproof bucket hat for rainy days.",
      completeDetails: "Stay dry and stylish with the Rainy Day Bucket Hat. Made from durable, waterproof material, this hat ensures protection from the rain while keeping you comfortable. The wide brim provides ample coverage, shielding your face and neck from the elements. The hat features a breathable inner lining, ensuring comfort during long wear. It's lightweight and packable, so you can easily take it with you on your travels. The Rainy Day Bucket Hat is available in a variety of colors and designs, so you can choose the one that best matches your style. It's easy to care for, requiring just a gentle wipe with a damp cloth to keep it looking fresh. Whether you're heading out for a walk, running errands, or just spending time outdoors, this hat is a must-have accessory for rainy days. Its blend of style and functionality makes it a versatile addition to any wardrobe.",
      originalPrice: 22.99,
      discountPrice: 18.39,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 12,
      name: "Festival Flower Crown",
      image: "12.jpg",
      description: "A whimsical flower crown perfect for festivals.",
      completeDetails: "The Festival Flower Crown is handmade with artificial flowers and greenery, providing a beautiful and lasting accessory for any festival or event. The crown features a variety of vibrant colors, adding a touch of whimsy and charm to any outfit. It's lightweight and comfortable, ensuring all-day wear without discomfort. The adjustable design allows for a secure and custom fit. This flower crown is perfect for music festivals, weddings, and other special occasions. It's also great for photoshoots and themed parties. The flowers and greenery are made from high-quality materials, ensuring durability and a realistic appearance. The crown is easy to care for, requiring just a gentle wipe with a damp cloth to keep it looking fresh. Whether you're dancing the night away or simply enjoying a sunny day, the Festival Flower Crown is a must-have accessory for any free-spirited fashionista.",
      originalPrice: 14.99,
      discountPrice: 11.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 13,
      name: "Sporty Visor",
      image: "13.jpg",
      description: "A sporty visor for active lifestyles.",
      completeDetails: "The Sporty Visor is made from moisture-wicking fabric, ensuring comfort during physical activities. It features an adjustable strap for a secure fit, making it perfect for running, tennis, and other sports. The visor's wide brim provides ample shade, protecting your face from harmful UV rays. It's lightweight and breathable, ensuring comfort during long wear. The Sporty Visor is available in a variety of colors and designs, so you can choose the one that best matches your style. It's easy to care for, requiring just a gentle hand wash to keep it looking fresh. Whether you're hitting the trails, the court, or just enjoying a day outdoors, this visor is a must-have accessory for any active lifestyle. Its blend of style and functionality makes it a versatile addition to any wardrobe.",
      originalPrice: 16.99,
      discountPrice: 13.59,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 14,
      name: "Bohemian Floppy Hat",
      image: "14.jpg",
      description: "A bohemian-style floppy hat for a relaxed look.",
      completeDetails: "The Bohemian Floppy Hat is made from soft, flexible material, ensuring comfort during long wear. It features a wide brim, providing excellent sun protection and a touch of bohemian charm. This hat is perfect for beach outings, festivals, and casual days out. The floppy design adds a relaxed and free-spirited vibe to any outfit. It's available in a variety of colors, so you can choose the one that best matches your style. The hat includes an adjustable inner band for a secure and comfortable fit. It's lightweight and packable, so you can easily take it with you on your travels. The Bohemian Floppy Hat is easy to care for, requiring just a gentle hand wash to keep it looking fresh. With its combination of style and functionality, this hat is a versatile addition to any wardrobe. Whether you're lounging by the pool or exploring new places, the Bohemian Floppy Hat is a must-have accessory for the summer.",
      originalPrice: 44.99,
      discountPrice: 35.99,
      discountPercentage: 20,
      quantity: 1
    },
    {
      id: 15,
      name: "Luxurious Velvet Beret",
      image: "15.jpg",
      description: "A luxurious velvet beret for a chic look.",
      completeDetails: "The Luxurious Velvet Beret is crafted from rich velvet, adding a touch of elegance to any ensemble. It features a classic beret design, perfect for adding a chic touch to your outfit. The hat is available in a variety of colors, so you can choose the one that best matches your style. The velvet material is soft and plush, ensuring comfort during long wear. The hat includes an adjustable inner band for a secure and comfortable fit. It's lightweight and packable, so you can easily take it with you on your travels. The Luxurious Velvet Beret is easy to care for, requiring just a gentle hand wash to keep it looking fresh. Whether you're dressing up for a special occasion or just want to add a touch of elegance to your everyday look, the Luxurious Velvet Beret is the perfect choice. With its blend of style and functionality, this hat is a versatile addition to any wardrobe.",
      originalPrice: 29.99,
      discountPrice: 23.99,
      discountPercentage: 20,
      quantity: 1
    }
  ],
  selectedProduct: null,

};

 
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
         find: (state,action) => {
          const product = state.products.find((product) => product.id === action.payload);
          state.selectedProduct = product;
         }
    }
})
export const { find } = productSlice.actions;

export default productSlice.reducer;