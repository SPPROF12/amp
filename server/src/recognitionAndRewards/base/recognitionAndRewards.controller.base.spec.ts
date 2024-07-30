import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { RecognitionAndRewardsController } from "../recognitionAndRewards.controller";
import { RecognitionAndRewardsService } from "../recognitionAndRewards.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activity: "true",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  recognitionTitle: "exampleRecognitionTitle",
  rewardAmount: 42.42,
  rewardDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  activity: "true",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  recognitionTitle: "exampleRecognitionTitle",
  rewardAmount: 42.42,
  rewardDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    activity: "true",
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    recognitionTitle: "exampleRecognitionTitle",
    rewardAmount: 42.42,
    rewardDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  activity: "true",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  recognitionTitle: "exampleRecognitionTitle",
  rewardAmount: 42.42,
  rewardDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createRecognitionAndRewards() {
    return CREATE_RESULT;
  },
  recognitionAndRewardsItems: () => FIND_MANY_RESULT,
  recognitionAndRewards: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("RecognitionAndRewards", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RecognitionAndRewardsService,
          useValue: service,
        },
      ],
      controllers: [RecognitionAndRewardsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /recognitionAndRewards", async () => {
    await request(app.getHttpServer())
      .post("/recognitionAndRewards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        rewardDate: CREATE_RESULT.rewardDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /recognitionAndRewards", async () => {
    await request(app.getHttpServer())
      .get("/recognitionAndRewards")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          rewardDate: FIND_MANY_RESULT[0].rewardDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /recognitionAndRewards/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recognitionAndRewards"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /recognitionAndRewards/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recognitionAndRewards"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        rewardDate: FIND_ONE_RESULT.rewardDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /recognitionAndRewards existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/recognitionAndRewards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        rewardDate: CREATE_RESULT.rewardDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/recognitionAndRewards")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
