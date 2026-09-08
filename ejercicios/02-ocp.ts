interface PaymentMethod {
  pagar(amount: number): void;
}

class Card implements PaymentMethod {
  pagar(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }
}

class Cash implements PaymentMethod {
  pagar(amount: number): void {
    console.log(`Pagando $${amount} con efectivo`);
  }
}

class Transfer implements PaymentMethod {
  pagar(amount: number): void {
    console.log(`Pagando $${amount} con tranferencia`);
  }
}

class PaymentProcessor {
  pay(type: PaymentMethod, amount: number): void {
    type.pagar(amount)
  }
}

const card = new Card();
const cash = new Cash();
const transfer = new Transfer();
new PaymentProcessor().pay(card, 100);

//para agregar un pago con transferencia hay que crear una clase que implemente la interface PaymentMethod e instanciarla.

// todos los metodos de pago tienen en comun el comportamiento de pagar