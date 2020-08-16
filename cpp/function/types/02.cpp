// no argument but a return value
// show number is prime or not
#include<iostream>
using namespace std;
int prime();
int main(){
  int num, i, flag = 0;
  num = prime ();
for(i = 2; i <= num/2; ++i){
  if ( num % i == 0){
    flag = 1 ;
    break;
  }
}
if(flag == 1){
  cout << num << " is not a prime number. "<<endl;
}
else{
  cout << num << " is a prime number ."<<endl ;
}
return 0;

}
int prime(){
  int n;
  cout << " Enter a positive integer to check : " << endl;
  cin >> n ;
  return n;
}