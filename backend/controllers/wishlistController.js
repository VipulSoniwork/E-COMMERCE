import userModel from "../models/userModel.js"

const addToWishlist = async (req, res) => {
    try {
        const { userId, productId } = req.body
        const userData = await userModel.findById(userId)
        
        if (!userData.wishlist.includes(productId)) {
            userData.wishlist.push(productId)
            await userModel.findByIdAndUpdate(userId, { wishlist: userData.wishlist })
            res.json({ success: true, message: "Added to Wishlist" })
        } else {
            res.json({ success: false, message: "Already in Wishlist" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const removeFromWishlist = async (req, res) => {
    try {
        const { userId, productId } = req.body
        const userData = await userModel.findById(userId)
        
        userData.wishlist = userData.wishlist.filter(id => id !== productId)
        await userModel.findByIdAndUpdate(userId, { wishlist: userData.wishlist })
        res.json({ success: true, message: "Removed from Wishlist" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const getWishlist = async (req, res) => {
    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId)
        res.json({ success: true, wishlist: userData.wishlist })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addToWishlist, removeFromWishlist, getWishlist } 