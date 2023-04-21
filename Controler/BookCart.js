const BookCart = require("./BookCartSchema");

const AddToCart = async (req, res) => {
  const { BookName } = req.body;

  try {
    // Check if the book is already in the cart
    const cartItem = await BookCart.findOne({ BookName });

    // If the book is already in the cart, increment the quantity
    if (cartItem) {
      cartItem.quantity += 1;
      await cartItem.save();
      res.json(cartItem);
    } else {
      // If the book is not in the cart, create a new cart item
      const newCartItem = new BookCart({
        BookName,
        quantity: 1,
      });
      await newCartItem.save();
      res.json(newCartItem);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { AddToCart };
