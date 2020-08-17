/// default argument

#include<iostream>
using namespace std;

void display( char c = '*', int count = 3){
  for (int i = 1; i <= count; ++i)
  {
    cout << c ;
  }
  cout << endl;
  
}
int main(){
  int count = 5;
  cout << "no argument passed : ";
  display();
  cout << " first argument passed : ";
  display('#');
  cout << " both argument passed : ";
  display('$', count);
  return 0;
}