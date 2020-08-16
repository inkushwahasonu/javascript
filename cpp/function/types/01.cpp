// without  argument pass and without return value
///  check number is prime or not
#include<iostream>
using namespace std;
 void prime();
 
int main(){
prime();
return 0;
}
void prime(){
  int  num , i , flag = 0;
  cout << "Enter a positive integer enter to check : "<<endl;
  cin >> num;
  for (i=2; i<=num/2; ++i){
    if(num%i==0){
      flag=1;
      break;
    }
  }
  if(flag == 1){
    cout<< num <<" is a prime number .";
  }
  else{
    cout << num << " is not a prime number." <<endl;
    
  }
}

