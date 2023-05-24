import { $string } from "@/common/utils/string";
import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Controller("tokens")
export class TokenController {
  constructor(private jwtService: JwtService) {}

  @TypedRoute.Post()
  async create() {
    const accessToken = this.jwtService.sign({
      sub: 1,
    });

    const randomString = $string().random(100);

    return { accessToken, randomString: randomString };
  }
}
