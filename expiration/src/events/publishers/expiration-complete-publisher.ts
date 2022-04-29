import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@aman_personal/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
