// function template to find the largest number

#include <iostream>
using namespace std;

template <class T>
T Large(T n1, T n2)
{
  return (n1 > n2) ? n1 : n2;
}
int main()
{
  int i1, i2;
  float f1, f2;
  char c1, c2;
  cout << "Enter two integers:\n";
  cin >> i1 >> i2;
  cout << Large(i1, i2) << " is larger." << endl;
  cout << "\nEnter two floating-point number: \n";
  cin >> f1 >> f2;
  cout << Large(f1, f2) << "is Larger. " << endl;
  cout << "\n Enter two charactors : \n";
  cin >> c1 >> c2;
  cout << Large(c1, c2) << " has larger ASCII value.";
  return 0;
}