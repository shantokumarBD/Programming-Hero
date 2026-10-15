function calculateCartTotal(items, taxRate) {
    const subtotal = items.reduce((total, item)=>{
        const orginalPrice =  item.price * item.quantity

        const disCountAmount = orginalPrice * (item.discount / 100)

        const totalItem = orginalPrice - disCountAmount

        return total + totalItem
    },0)

    const taxAmount = subtotal * (taxRate / 100)

    const finalTotal = subtotal + taxAmount

    return Math.round(finalTotal * 100) / 100
}
console.log(calculateCartTotal([
  { price: 100, quantity: 2, discount: 10 },
  { price: 50, quantity: 1, discount: 0 }
], 10)); 
// Output: 253