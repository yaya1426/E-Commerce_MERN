import mongoose, { Schema, ObjectId, Document } from "mongoose";

export interface IOrderItem {
  productTitle: string;
  productImage: string;
  unitPrice: number;
  quantity: number;
}

export interface IOrder extends Document {
  orderItems: IOrderItem[];
  total: number;
  address: string;
  userId: ObjectId | string;
}

const OrderItemSchema = new Schema<IOrderItem>({
  productTitle: { type: String, required: true },
  productImage: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const OrderSchema = new Schema<IOrder>({
  orderItems: [OrderItemSchema],
  total: { type: Number, required: true },
  address: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const orderModel = mongoose.model<IOrder>("Order", OrderSchema);
