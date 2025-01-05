import { Subjects, Publisher, PaymentCreatedEvent } from "@jhcorea736_/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
