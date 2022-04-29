import { Publisher, Subjects, TicketCreatedEvent } from '@aman_personal/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
