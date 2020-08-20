// operator overloading

#include<iostream>
using namespace std;
class Test{
  private:
  int count;
  public:
  Test():count(5){}
  void operator ++()
  {
    count = count+1;
  }
  void Display() { cout<< "Count: " << count << endl ; }

};

int main()
{
  Test t;
  ++t;
  t.Display();
  return 0;
}