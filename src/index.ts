import { AppModule } from './app'
import { NestFactory } from '@nestjs/core'
import { load as getConfig } from '@katheryne/commons'

async function bootstrap() {
  const { server } =  await getConfig()

  const app = await NestFactory.create(AppModule)

  app.listen(server?.port ?? 7789)
}

bootstrap()
