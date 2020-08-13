//sum of first n natural number

#include<iostream>
using namespace std;

int main(){
  int num, sum ;
  cout << " Entern a natural number : " << endl ;
  cin >> num ;
  for( int i=0; i<=num; ++i){
    sum += i;
  }
  cout << " Sum of " << num << " natural number is : " << sum << endl ;
  return 0;
}

