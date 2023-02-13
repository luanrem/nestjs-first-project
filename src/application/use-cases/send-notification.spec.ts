import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
    console.log(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', () => {
    const sendNotification = new SendNotification(notificationsRepository);

    sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
