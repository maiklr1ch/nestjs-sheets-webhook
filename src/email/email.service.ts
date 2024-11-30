import { Injectable } from '@nestjs/common';
import { MailDataRequired } from '@sendgrid/mail';
import { SendGridClient } from './sendgrid-client';

@Injectable()
export class EmailService {
  constructor(private readonly sendGridClient: SendGridClient) {}

  async send(recipient: string, body: string) {
    const mail: MailDataRequired = {
      to: recipient,
      from: 'nestjs-sheets-webhook@noreply.com',
      subject: 'noreply',
      content: [{ type: 'text/plain', value: body }],
    };
    await this.sendGridClient.send(mail);
  }
}