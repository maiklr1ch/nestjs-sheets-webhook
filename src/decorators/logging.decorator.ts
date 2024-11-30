import { SetMetadata, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Logger } from '@nestjs/common';

export const Logging = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    // Вивід URL, методу та коду відповіді
    const logger = new Logger('Logging');
    logger.log(`URL: ${request.url}`);
    logger.log(`Method: ${request.method}`);
    logger.log(`Response status code: ${response.statusCode}`);

    // Повертаємо оригінальний об'єкт запиту
    return request;
  },
);