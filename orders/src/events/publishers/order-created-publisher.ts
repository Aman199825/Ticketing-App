import { Publisher, OrderCreatedEvent, Subjects } from '@aman_personal/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
