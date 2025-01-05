import { Publisher, OrderCreatedEvent, Subjects } from "@jhcorea736_/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
