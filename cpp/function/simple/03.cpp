// function prototype
#include<iostream>
using namespace std;
int add(int , int);
int main(){
  int sum;
  sum = add(30,40);
  cout << "30+40 = " << sum <<endl;
  return 0;
}
int add(int a, int b){
  return(a+b);
}
