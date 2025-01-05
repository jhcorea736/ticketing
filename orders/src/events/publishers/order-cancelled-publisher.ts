import { Subjects, Publisher, OrderCancelledEvent } from "@jhcorea736_/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
