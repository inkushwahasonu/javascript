// switch case

#include<iostream>
using namespace std;
int main(){
  int num1, num2 ;
  char oper ;
  cout << "Enter any operator ( +, -, *, / )" <<endl;
  cin>> oper;
  cout << "enter two numbers : "<<endl;
  cin>> num1 >> num2 ;
  
  switch(oper){
    case '+' :
    cout << num1 << " + " << num2 << " = " << num1 + num2 <<endl;
    break;
    case '-' :
    cout << num1 << " - " << num2 << " = " << num1 - num2 <<endl;
    break;
    case '*' :
    cout << num1 << " * " << num2 << " = " << num1 * num2 <<endl;
    break;
    case '/' :
    cout << num1 << " / " << num2 << " = " << num1 / num2 <<endl;
    break;
    default :
    cout << " sory ! your operator is  nut correct ."<<endl;
    break;
  } 
  return 0;
}