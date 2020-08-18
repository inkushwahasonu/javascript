// take input from user and store them then print them

#include<iostream>
using namespace std;
int main(){
  int number[5];
  cout << " enter five numbers : " << endl;
  for(int i = 0; i < 5; ++i){
    cin>> number[i];
  }
  cout << " the numbers are : " << endl;
  for ( int n = 0; n <5 ; ++n){
    cout << number[n] << endl ;
  }
  return 0;
}