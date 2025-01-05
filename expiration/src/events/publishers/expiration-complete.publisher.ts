import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@jhcorea736_/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
