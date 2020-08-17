// default arguments

#include<iostream>
using namespace std ;

void display( char = '*', int = 3);
int main(){
  int count = 5 ;
  cout << "no argument passed : ";
  display ();
  cout << "first argument passed : ";
  display ('#');
  cout << "both argument passed : ";
  display( '$', count);
  return 0;
}
void display(char c, int count){
  for (int i = 1; i <=count; ++i)
  {
    cout << c;
  }
  cout << endl ;
  
}