// add two numbers by using function

#include<iostream>
using namespace std;
int add(int a, int b){
  return (a +b);
}
int main (){
  int sum;
  sum = add(34,23);
  cout << "34 + 23 = " << sum <<endl;
  return 0;
}