import { Controller, Get } from "@nestjs/common";

@Controller()
export class PingController {
    @Get()
    async ping(): Promise<string> {
        return 'Node is running';
    }
}
