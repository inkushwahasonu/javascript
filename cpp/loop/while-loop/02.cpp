#include<iostream>
using namespace std;
int main (){
  int num, sum=0;
  cout << " enter a number " << endl ;
  cin >> num ;
  while(int i >0){
    sum += num;
    cout << "Enter second number" << endl;
    cin >> num ;
  }
  return 0;
}