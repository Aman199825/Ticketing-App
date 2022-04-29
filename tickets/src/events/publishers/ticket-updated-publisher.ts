import { Publisher, Subjects, TicketUpdatedEvent } from '@aman_personal/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
