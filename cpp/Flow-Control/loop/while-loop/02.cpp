// sum of only posutive numbers



#include<iostream>
using namespace std;
int main (){
  int num, sum=0;
  cout << " enter a number " << endl ;
  cin >> num ;
  while(num >=0){
    sum += num;
    cout << "Enter second number" << endl;
    cin >> num ;
  }
  cout << " \nsum is : " << sum << endl ;
  return 0;
}