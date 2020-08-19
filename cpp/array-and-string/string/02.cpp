// string to read a line of text

#include<iostream>
using namespace std;
int main(){
  char str[100];
  cout << "enter a string : ";
  cin.get(str, 100);
  cout << "you entered : " << str << endl;
  return 0;
}