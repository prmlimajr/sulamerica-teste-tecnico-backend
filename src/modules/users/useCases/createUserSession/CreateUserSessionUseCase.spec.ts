import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserSessionUseCase } from "./CreateUserSessionUseCase";

let createUserSessionUseCase: CreateUserSessionUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Create user session", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserSessionUseCase = new CreateUserSessionUseCase(
      usersRepositoryInMemory
    );
  });

  it("should not be able to create a user if input is not valid", async () => {
    expect(async () => {
      const user = {
        name: "AA",
        email: "te",
      };

      await createUserSessionUseCase.execute({
        name: user.name,
        email: user.email,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to update a user name if email exists and user inputs different name", async () => {
    const user = {
      name: "Old name",
      email: "test@example.com",
    };

    await createUserSessionUseCase.execute({
      name: user.name,
      email: user.email,
    });

    await createUserSessionUseCase.execute({
      name: "New name",
      email: user.email,
    });

    const findUser = await usersRepositoryInMemory.findByEmail(user.email);

    expect(findUser.name).toBe("New name");
  });

  it("should be able to create a new user if the email wasn't used before", async () => {
    const user = {
      name: "Test",
      email: "test@example.com",
    };

    await createUserSessionUseCase.execute({
      name: user.name,
      email: user.email,
    });

    expect(usersRepositoryInMemory.users.length).toBe(1);
  });

  it("should be able to return a token upon user registration", async () => {
    const user = {
      name: "Test",
      email: "test@example.com",
    };

    const createdUser = await createUserSessionUseCase.execute({
      name: user.name,
      email: user.email,
    });

    expect(createdUser.token).toBeDefined();
  });
});
