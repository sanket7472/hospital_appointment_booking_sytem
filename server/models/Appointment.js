import { Schema, model } from "mongoose";
const appointmentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    appointmentDate: {
        type: Date,
        default: Date.now
    },
    appointmentReason: {
        type: String,
        dafault: 'Regular Checkup'

    },
    appointmentType: {
        type: String,
        enum: ['First Visit', 'Follow up-1','Follow up-2', 'Follow up-3','Routine Checkup'],
        default: 'First Visit'
    },
    status:{
        type:String,
        enum: ['Pending','In Progress', 'Completed','Cancelled'],
        default: 'Pending'
    },
    completedAt:{
        type:Date

    },
    cancelledAt:{
        type:Date
    },
    note:{
        type:String
    }
}, {
    timestamps: true
})

const Appointment =model('Appointment',appointmentSchema)
export default Appointment