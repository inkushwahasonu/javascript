// display array alements
#include<iostream>
using namespace std;
int main(){
  int numbers[5] = { 7,5,6,12,35};
  cout << " the numbers are : ";
  for(const int &n : numbers){
    cout << n << " ";
  }
  cout << "\n the numbers are :";
  for ( int i =0; i < 5; ++i){
    cout << numbers[i] << " ";
  }
  return 0;
}