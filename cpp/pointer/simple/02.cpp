// working of c++ pointer

#include<iostream>
using namespace std;

int main(){
  int var = 5;
  int* pointVar;
  pointVar = &var;
  cout << "var = " << var << endl;
  cout << " adderss of var (&var) = " << &var << endl << endl ;
  cout << " pointVar = " << pointVar << endl ;
  cout << "content of the address pointed to by pointVar (*pointVar) = "<< *pointVar << endl;
  return 0;

}