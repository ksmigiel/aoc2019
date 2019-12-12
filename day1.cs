using System;
using System.IO;
using System.Linq;

namespace Day1
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var input = File.ReadLines("input.txt")
                .Select(int.Parse)
                .ToList();

            var part1 = input.Sum(i => i / 3 - 2);
            var part2 = 0;

            foreach (var line in input)
            {
                var fuel = line;
                
                while ((fuel / 3) - 2 > 0)
                {
                    fuel = (fuel / 3) - 2;
                    part2 += fuel;
                }
            }

            Console.WriteLine(part2);
        }
    }
}
