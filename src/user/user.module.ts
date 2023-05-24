import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TokenController } from "./token.controller";

@Module({
  imports: [
    JwtModule.register({
      secret: "SECRET",
      signOptions: { expiresIn: "1y" },
    }),
  ],
  controllers: [TokenController],
})
export class UserModule {}
