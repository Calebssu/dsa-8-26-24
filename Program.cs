namespace dsa_8_26_24;

class Program
{
    static void Main(string[] args)
    {
        static void FiboReC(int c, int n, int y){
            int n1 = n;
            int n2 = y;
            int count = c;
            int val;

            // Console.WriteLine(n1);
            // Console.WriteLine(n2);
            if(count <= 20){
                count += 1;
                val = n1+n2;
                n1=n2;
                n2=val;
                Console.WriteLine(val);
                FiboReC(count, n1, n2);
            }
        }

        FiboReC(0, 1, 0);
    }
}