import { Publisher, Subjects, TicketCreatedEvent } from "@jhcorea736_/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
