class Entero:
    def __init__(self, Numero):
        self.Num = Numero

    def setNum(self):
        # Assuming you have a way to get the input value in Python
        input_value = input("Enter a number: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num

    def showNum(self):
        print(self.getNum())

    def showResultado(self, respuesta):
        print(respuesta)

    def incrementarNum(self):
        self.Num += 1

    def decrementarNum(self):
        self.Num -= 1

    def esParImpar(self):
        return (self.Num % 2 == 0)

    def menu(self):
        while True:
            print("\nMenú:")
            print("1. Establecer un nuevo número")
            print("2. Mostrar el número actual")
            print("3. Incrementar el número")
            print("4. Decrementar el número")
            print("5. Verificar si es par o impar")
            print("6. Salir")
            
            opcion = input("Ingrese una opción: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incrementarNum()
            elif opcion == '4':
                self.decrementarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El número es par.")
                else:
                    print("El número es impar.")
            elif opcion == '6':
                print("¡Hasta luego!")
                break
            else:
                print("Opción inválida. Intente nuevamente.")





# Crear un objeto de la clase Entero
numero = Entero(10)

# Iniciar el menú
numero.menu()