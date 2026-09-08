interface User {
  username: string;
  email: string;
}

class UserValidator {
  isValid(email: string): boolean {
    if (email.includes("@")) {
      return true
    }

    return false }
}

//conexion a base de datos
class UserRepository{
  users: User[] = [];
  register(user: User) {
    this.users.push(user);
  }
}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

class UserRegistrationService {
  constructor(
    public userValidator: UserValidator,
    public userRepository: UserRepository,
    public emailService: EmailService
  ) {}

  newUser({username, email}: User) {
    if (!this.userValidator.isValid(email)) {
      throw new Error("El correo no es valido");
    }
    
    this.userRepository.register({username, email})

    this.emailService.sendWelcomeEmail(email)
  }
    
}


const validador = new UserValidator()
const repositorio = new UserRepository()
const email = new EmailService()

const userManager = new UserRegistrationService(validador, repositorio, email)

const nuevoUsuario = userManager.newUser({username: "pepe", email: "pepe@gmail.com"})

//userManager tiene la responsabilidad de validar los datos, registrar el usuario y enviar email