import { PaymentCreatedEvent, Publisher, Subjects } from "@aman_personal/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject:Subjects.PaymentCreated=Subjects.PaymentCreated;
}