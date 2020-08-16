// arguments passed and a return value

#include<iostream>
using namespace std;
int prime(int n);
int main()
{
  int num, flag = 0;
  cout << "Enter positive integer to check : "<<endl ;
  cin >> num;
  flag = prime(num);
  if(flag ==1 )
  cout << num << " is not a prime number ."<<endl ;
  else
  {
    cout<< num << " is a prime number."<<endl;
  }
  return 0;
  
}
int prime(int n){
  int i;
  for(i = 2; i <= n/2 ; ++i){
    if(n % i == 0)
    return 1;
  }
  return 0;
}
