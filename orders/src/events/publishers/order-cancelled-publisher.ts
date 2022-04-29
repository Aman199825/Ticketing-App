import { Subjects, Publisher, OrderCancelledEvent } from '@aman_personal/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
