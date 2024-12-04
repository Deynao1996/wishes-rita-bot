import mongoose from 'mongoose'
let isConnected = false

export async function connectToDb() {
  try {
    if (isConnected) {
      console.log('Using existing connection')
      return
    }
    const db = await mongoose.connect('mongodb+srv://deynao1996:L2QIwPI3mjcV1a1l@cluster0.nnez2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    if (db.connections[0].readyState === 1) {
      console.log('Connection established')
      isConnected = true
    } else {
      console.log('Connection not established')
      isConnected = false
    }
  } catch (error: any) {
    console.log(error.message)
    throw new Error(error)
  }
}
