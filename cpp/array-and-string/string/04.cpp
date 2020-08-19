// passing string to a function
#include<iostream>
using namespace std;
void display(char *);
void display(string);
int main(){
  string str1;
  char str[100];
  cout << "enter a string : ";
  getline(cin, str1);
  cout << " enter another string : ";
  cin.get(str, 100, '\n');
  display(str1);
  display(str);
  return 0;
}
void display(char s[]){
  cout << " entered char array is : "<< s << endl;
}
void display(string s)
{
  cout << " entered string is : "<< s << endl;
}