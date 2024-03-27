using System;
					
public class Program
{
	public class Display
    {
        public string Show(string value1)
        {
            return "Displaying a single value: " + value1;
        }
    
        public int Show(string value1, string value2)
        {
            return ("Displaying two values: " + value1 + ", " + value2).Length;
        }
    }
	public static void Main()
	{
		Console.WriteLine("Hello World");
        Display d = new Display();
        string result1 = d.Show("Hello"); // Displaying a single value: Hello
        int result2 = d.Show("Hello", "World"); // Length of the string "Displaying two values: Hello, World"
		Console.WriteLine(result1);
		Console.WriteLine(result2);
	}
}