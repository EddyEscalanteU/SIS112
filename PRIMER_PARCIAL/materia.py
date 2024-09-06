class Materia:
    def __init__(self, nombreMateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadInscritos):
        self.nombreMateria = nombreMateria
        self.sigla = sigla
        self.docente = docente
        self.horarios = horarios
        self.aula = aula
        self.prerequisito = prerequisito
        self.carrera = carrera
        self.universidad = universidad
        self.cantidadInscritos = cantidadInscritos

    def modificar_atributo(self, atributo, valor):
        if hasattr(self, atributo):
            setattr(self, atributo, valor)
            print(f"El atributo '{atributo}' ha sido modificado con éxito.")
        else:
            print(f"El atributo '{atributo}' no existe.")

    def eliminar_atributo(self, atributo):
        if hasattr(self, atributo):
            delattr(self, atributo)
            print(f"El atributo '{atributo}' ha sido eliminado con éxito.")
        else:
            print(f"El atributo '{atributo}' no existe.")

    def __str__(self):
        return (f"Materia: {self.nombreMateria}\n"
                f"Sigla: {self.sigla}\n"
                f"Docente: {self.docente}\n"
                f"Horarios: {', '.join(self.horarios)}\n"
                f"Aula: {self.aula}\n"
                f"Prerequisito: {self.prerequisito}\n"
                f"Carrera: {self.carrera}\n"
                f"Universidad: {self.universidad}\n"
                f"Cantidad de Inscritos: {self.cantidadInscritos}")

materias = [
    Materia(
        nombreMateria="Cálculo 1",
        sigla="MAT-132",
        docente="Victor Hugo Aspiazu",
        horarios=["Lunes 7:30-9:00", "Miércoles 7:30-9:00"],
        aula="10 Aula A-N4",
        prerequisito="Matemática Básica",
        carrera="Ingeniería Industrial",
        universidad="Universidad Católica Boliviana",
        cantidadInscritos=36
    ),
    Materia(
        nombreMateria="Física 1",
        sigla="FIS-111",
        docente="Victor Hugo Lobo",
        horarios=["Lunes 9:10-10:40", "Miércoles 9:10-12:20"],
        aula="E 2-5",
        prerequisito=None,
        carrera="Ingeniería Industrial",
        universidad="Universidad Católica Boliviana",
        cantidadInscritos=47
    ),
    Materia(
        nombreMateria="Programación 1",
        sigla="SIS-112",
        docente="Eddy Escalante",
        horarios=["Lunes 10:50-12:20", "Viernes 9:10-11:35"],
        aula="C 2-2",
        prerequisito="Introducción a la Programación",
        carrera="Ingeniería Industrial",
        universidad="Universidad Católica Boliviana",
        cantidadInscritos=16
    ),
    Materia(
        nombreMateria="Manufactura y Mecanizado",
        sigla="IND-112",
        docente="Jorge Salvatierra",
        horarios=["Martes 7:30-9:10", "Jueves 7:30-9:10", "Viernes 7:30-9:10"],
        aula="12 Aula A-N4",
        prerequisito="Introducción al Diseño Industrial",
        carrera="Ingeniería Industrial",
        universidad="Universidad Católica Boliviana",
        cantidadInscritos=15
    ),
    Materia(
        nombreMateria="Probabilidad y Estadística 1",
        sigla="MAT-142",
        docente="Carmen Barca",
        horarios=["Martes 10:50-12:20", "Jueves 10:50-12:20"],
        aula="D 2-1",
        prerequisito="Cálculo 1",
        carrera="Ingeniería Industrial",
        universidad="Universidad Católica Boliviana",
        cantidadInscritos=31
    ),
    Materia(
        nombreMateria="Antropología y Valores",
        sigla="ANT-121",
        docente="Exalta De la Barra",
        horarios=["Martes 9:10-10:40", "Jueves 9:10-10:40"],
        aula="4 Aula A-N3",
        prerequisito=None,
        carrera="Ingeniería Industrial",
        universidad="Universidad Católica Boliviana",
        cantidadInscritos=61
    )
]

def mostrar_materias():
    print("Materias disponibles:")
    for i, materia in enumerate(materias):
        print(f"{i + 1}. {materia.nombreMateria}")
    print()

def seleccionar_materia():
    mostrar_materias()
    try:
        eleccion = int(input("Ingrese el número de la materia que desea seleccionar: ")) - 1
        if 0 <= eleccion < len(materias):
            return materias[eleccion]
        else:
            print("Selección inválida. Intente nuevamente.")
            return None
    except ValueError:
        print("Entrada no válida. Por favor, ingrese un número.")
        return None

def modificar_materia():
    materia = seleccionar_materia()
    if materia:
        atributo = input("Ingrese el atributo que desea modificar (ej: 'docente', 'aula', etc.): ")
        valor = input(f"Ingrese el nuevo valor para {atributo}: ")
        materia.modificar_atributo(atributo, valor)
        print("\nMateria actualizada:")
        print(materia)

def eliminar_atributo_materia():
    materia = seleccionar_materia()
    if materia:
        atributo = input("Ingrese el atributo que desea eliminar (ej: 'aula', 'prerequisito', etc.): ")
        materia.eliminar_atributo(atributo)
        print("\nMateria actualizada:")
        print(materia)

def ver_materia():
    materia = seleccionar_materia()
    if materia:
        print("\nDetalles de la materia seleccionada:")
        print(materia)

def mostrar_menu():
    while True:
        print("\nMenú de opciones:")
        print("1. Ver materia")
        print("2. Modificar materia")
        print("3. Eliminar atributo de materia")
        print("4. Salir")
        
        opcion = input("Seleccione una opción: ")

        if opcion == '1':
            ver_materia()
        elif opcion == '2':
            modificar_materia()
        elif opcion == '3':
            eliminar_atributo_materia()
        elif opcion == '4':
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Intente nuevamente.")

mostrar_menu()
