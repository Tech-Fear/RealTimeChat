import Conversation from "../models/conversationModel.js"
import Message from "../models/messageModel.js"

export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body
        const {id:receiverId}=req.params
        const senderId=req.user._id
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
            }) 
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        //SOCkET IO IMPLEMENTATION


        // await newMessage.save()
        // await conversation.save()
        await Promise.all([newMessage.save(),conversation.save()]) //this will run in parallel
        res.status(200).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller:",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const getMessages=async(req,res)=>{
try {
    const {id:userToChatId}=req.params
    const senderId=req.user._id
    console.log(senderId)
    const conversation=await Conversation.findOne({
        participants:{$all:[senderId,userToChatId]},
    }).populate('messages') //Not refrencing the message model but the messages array in the conversation model

    if(!conversation) return res.status(200).json([])
    const messages=conversation.messages
    res.status(200).json(messages)
} catch (error) {
    console.log("Error in sendMessage controller:",error.message)
    res.status(500).json({message:"Internal Server Error"})
}
}