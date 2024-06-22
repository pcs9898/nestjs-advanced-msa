import { EventPattern, Payload } from '@nestjs/microservices';
import { MailService } from './mail.service';
import { Controller } from '@nestjs/common';
import { IMailServiceSendUserAuthCode } from './interface/mail-service.interface';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @EventPattern('sendUserAuthCode')
  async sendUserAuthCode(
    @Payload() message: IMailServiceSendUserAuthCode,
  ): Promise<void> {
    this.mailService.sendUserAuthCode(message);
  }
}