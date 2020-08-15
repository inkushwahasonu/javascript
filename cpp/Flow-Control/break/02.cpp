// break in while loop


#include<iostream>
using namespace std;
int main(){
  int num, sum;
  sum=0;
  while(true){
    cout<<"Enter the number : " <<endl;
    cin>>num;
    if(num<0){
      break;
    }
    sum += num;
  }
  cout<<"sum is :"<< sum <<endl;
  return 0;
}