namespace mi_primera_programa_en_c_;

class Program
{
    static void Main(string[] args)
    {
        //Primer metodo, mostrar un Hola Mundo
        HelloWorld();

        //Segundo metodo, mostrar la edad ingresada por el usuario
        ObtenerEdad();
    }

    public static void HelloWorld()
    {
        Console.WriteLine("Hello, World!");
    }

    public static void ObtenerEdad()
    {
        Console.WriteLine("Introduzca su edad:");
        string? edadInput = Console.ReadLine();
        if (string.IsNullOrEmpty(edadInput))
        {
            Console.WriteLine("Introduzca un valor");
        }
        else
        {
            int edadInteger = Int32.Parse(edadInput);
            Console.WriteLine("Tu Edad es: " + edadInteger);
        }
    }
}
